const { fetchUserByEmailDb,
        createUserDb}
        = require('../db/users-db');

const fetchUserByEmail = async email => await fetchUserByEmailDb(email)

const createUser = async user => {
    try {
        return await createUserDb(user);
    } catch (e) {
        throw new Error(e.message);
    }
}

module.exports = {  fetchUserByEmail,
                    createUser }