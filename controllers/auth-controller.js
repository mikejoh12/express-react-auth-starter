const { fetchUserByEmail, createUser } = require('../services/users-service');
const passport = require('passport');
const bcrypt = require('bcrypt');

const signUpUser = async (req, res, next) => {
    const { email, first_name, last_name, password } = req.body;

    try {
        const userDb = await fetchUserByEmail(email)  
        if (userDb) {
            return res.status(422).json({
                error: { status: 422, data: "User with this email already exists."}
            });
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
            'login', (err, user, info) => {
                    if (err) return res.status(500).send();
                    if (!user) {
                        return res.status(401)
                                  .json({ error: { status: 401,
                                                   data: info.message }
                                            })
                        }
                    req.login(user, (err) => {
                        if (err) return next(err);
                        const { id, first_name, last_name, email } = req.user;
                        return res.json({id, first_name, last_name, email});
                    })
            }
    )(req, res, next);
}

const logoutUser = (req, res, next) => {
    req.logout();
    res.clearCookie('connect.sid');
    req.session.destroy(function (err) {
        res.status(200).send();
    });
}

module.exports = {
    signUpUser, loginUser, logoutUser
}