const { fetchSecretNr } = require('../services/data-service');

// data-controller is just a place-holder for some app specific routes that require authentication

const getSecretAnswer = async(req, res, next) => {
    const { first_name, last_name } = req.user // passport-session supplies req.user after log-in
    try {
        const nr = await fetchSecretNr();
        res.json(`Hello ${first_name} ${last_name}! The secret nr from the back-end is: ${nr} 😀`);
    } catch {
        return next(err);
    }
}

module.exports = { getSecretAnswer };