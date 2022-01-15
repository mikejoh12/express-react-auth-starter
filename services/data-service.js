const { fetchSecretNrDb } = require('../db/data-db');

const fetchSecretNr = async () => {
    try {
        return await fetchSecretNrDb();
    } catch (e) {
        throw new Error(e.message);
    }
}

module.exports = { fetchSecretNr }