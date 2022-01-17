const { signUpUser, loginUser, logoutUser } = require('../controllers/auth-controller.js')
const { validateSignUpUser,
        validateLoginUser } = require('./validation')
const express = require('express');
const { getSecretAnswer } = require('../controllers/data-controller.js');

// Add this function as a middleware to routes requiring authentication
// req.user will contain the current user in the routes
function checkAuth(req,res,next){
    if(req.isAuthenticated()){
        next();
    } else{
        res.status(401).send("You are not authorized to access this route.");
    }
}

const router = express.Router();

router  
    .post('/auth/signup', validateSignUpUser, signUpUser)
    .post('/auth/login', validateLoginUser, loginUser)
    .post('/auth/logout', logoutUser)
    .get('/data/secret', checkAuth, getSecretAnswer) // checkAuth middleware checks authentication

module.exports = router;