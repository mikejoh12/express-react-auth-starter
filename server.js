const express = require('express');
const session = require('express-session');
require('dotenv').config();
require('./config/db');


const passport = require('passport');
require('./config/passport');

const morgan = require('morgan')

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(morgan('dev'));

const compression = require("compression");
app.use(compression());

// Add header security
const helmet = require("helmet")
app.use(helmet())

app.use(session({ 
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

const routes = require('./routes');
app.use('/api', routes);

// Improved error handling
app.use((error, req, res, next) => {
    console.error(error);
    res.status(error.status || 500).send({
      error: {
          status: error.status || 500,
          data: error.message || 'Internal Server Error',
      },
  })
})

app.listen(process.env.PORT, () => {
	console.log(`API listening at http://localhost:${process.env.PORT}`);
});