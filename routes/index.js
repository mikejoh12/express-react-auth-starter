const { signUpUser, loginUser, logoutUser } = require('../controllers/auth-controller.js')
const { validateSignUpUser,
        validateLoginUser } = require('./validation')
const express = require('express');

function checkAuth(req,res,next){
    console.log(req.isAuthenticated());
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

module.exports = router;