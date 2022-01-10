const { fetchUserByEmail, createUser } = require('../services/users-service');
const passport = require('passport');
const bcrypt = require('bcrypt');

const isProduction = process.env.NODE_ENV === 'production';

const signUpUser = async (req, res, next) => {
    const { email, firstName, lastName, password } = req.body;

    //Check if active user with this email exists
    try {
        const userDb = await fetchUserByEmail(email)  
        if (userDb) {
            return res.status(422).json({
                error: { status: 422, data: "User with this email already exists."}
            })
        }

        const pwdHash = await bcrypt.hash(password, 10);
        const user = {
            email,
            firstName,
            lastName,
            pwdHash,
        }
        const newUser = await createUser(user);
        res.status(201).json({user_id: newUser.id});
    } catch(err) {
        console.log(err);
        next(e);
    }
}

const loginUser = async (req, res, next) => {
    passport.authenticate(
        'login',
        async (err, user, info) => {
        try {
            if (err || !user) {
                const error = new Error(info.message);
                return next(error);
            }
        } catch (error) {
            return next(error);
        }
        req.login(user, (err) => {
            console.log('Inside req.login() callback')
            console.log(`req.session.passport: ${JSON.stringify(req.session.passport)}`)
            console.log(`req.user: ${JSON.stringify(req.user)}`)
            return res.send('You were authenticated & logged in!');
          })
        }
    )(req, res, next);
}

const logoutUser = (req, res, next) => {
    return res.status(200).send()
}

module.exports = {
    signUpUser, loginUser, logoutUser
}