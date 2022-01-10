const passport = require('passport')
const bcrypt = require('bcrypt')
const LocalStrategy = require('passport-local').Strategy
const { fetchUserByEmail } = require('../services/users-service');

/*
Easy way to generate key on Linux using crypto:
node -e "console.log(require('crypto').randomBytes(256).toString('base64'));"
*/

passport.use(
    'login',
    new LocalStrategy(
    {
        usernameField: 'email',
        passwordField: 'password',
    },
    async (email, password, done) => {
        try {
          const user = await fetchUserByEmail(email);
          if (!user) {
            return done(null, false, { message: 'Incorrect email or password.' });
          }

          const match = await bcrypt.compare(password, user.pwd_hash)

          if (!match) {
            return done(null, false, { message: 'Incorrect email or password.' });
          }

          return done(null, user, { message: 'Logged in Successfully' });
        } catch(err) {
            return done(null, false, { message: 'There was a problem logging in.' });          
        }
}))

passport.serializeUser((user, done) => {
  done(null, user.email);
});

passport.deserializeUser(async (email, done) => {
  try {
    let user = await fetchUserByEmail(email);
    if (!user) {
      return done(new Error('user not found'));
    }
    done(null, user);
  } catch (e) {
    done(e);
  }
});