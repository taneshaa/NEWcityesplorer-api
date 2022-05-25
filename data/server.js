'use strict';

// requires
// requires are like imports, importing libraries into our app
require('.env').config();
const express = require('express');
const cors = require('cors');

// using express variable to instantiate a new instance of an Express server (lab 7 card 2)
const app = express();

// middleware
// creating CORS instance and telling app to use it
// body guard of internet
app.use(cors());

// PORT- communication endpoint, software level, way for our computer to talk to the rest of the internet
// PORT is how people hack into computers
// creating PORT variable .env because its in the env file
// when we deploy Heroku, Heroku looks for variable named PORT to insert it's server into port
const PORT = process.env.PORT

// create route/endpoint
// get = read
// '/' is home/testing path
// request(req)- request object that axios brings in with request
// response(res)- response object that axios takes out with response data
app.get('/', (request, response) => {
response.send('testing, testing, is this thing on?');
});

// listen our express server which port to send data through
app.listen(PORT, () => console.log('listenting on PORT ${PORT}'));