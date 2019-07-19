const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');
const path = require('path');


const BuilderJsonResponse = require("./lib/BuilderJsonResponse");


if (!process.env) {
	process.env = {};
}

if (!process.env.PORT) {
	process.env.PORT = 3003;
}


// mongoose
// 	.connect('mongodb://localhost/control_escolar', {useNewUrlParser: true})
// 	.then(x => {
// 		console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
// 	})
// 	.catch(err => {
// 		console.error('Error connecting to mongo', err)
// 	});

const app_name = require('../package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();

const cors = require("cors");

app.use(cors());


// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

app.get("/", function (req, res) {
	BuilderJsonResponse.Success(res,{}, "I'm backend");
});
module.exports = app;
