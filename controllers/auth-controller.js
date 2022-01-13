const { fetchUserByEmail, createUser } = require('../services/users-service');
const passport = require('passport');
const bcrypt = require('bcrypt');

const isProduction = process.env.NODE_ENV === 'production';

const signUpUser = async (req, res, next) => {
    const { email, first_name, last_name, password } = req.body;

    //Check if active user with this email exists
    try {
        const userDb = await fetchUserByEmail(email)  
        if (userDb) {
            res.status(422).json({
                error: { status: 422, data: "User with this email already exists."}
            })
        }

        const pwd_hash = await bcrypt.hash(password, 10);
        const user = {
            email,
            first_name,
            last_name,
            pwd_hash,
        }
        const newUser = await createUser(user);
        res.status(201).json({user_id: newUser.id});
    } catch(err) {
        return next(err);
    }
}

const loginUser = (req, res, next) => {
        passport.authenticate(
            'login', async (err, user, info) => {
                try {
                    if (err || !user) {
                        throw new Error(info.message);
                    }
                    req.login(user, (err) => {
                        const { id, first_name, last_name, email } = req.user;
                        return res.json({id, first_name, last_name, email});
                    })
                } catch(err) {
                    return next(err);
                }
            }
    )(req, res, next);
}

const logoutUser = (req, res, next) => {
    req.logout();
    res.clearCookie('connect.sid');
    req.session.destroy(function (err) {
        res.status(200).send('Log out successful');
    });
}

module.exports = {
    signUpUser, loginUser, logoutUser
}