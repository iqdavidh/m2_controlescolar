const UrlApiConfig = require("./config/UrlApiConfig");
const BuilderJsonResponse = require("./lib/BuilderJsonResponse");

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');

const logger = require('morgan');
const path = require('path');


if (!process.env) {
	process.env = {};
}

if (!process.env.PORT) {
	process.env.PORT = 3003;
}


const app_name = require('../package.json').name;

const app = express();

const cors = require("cors");
const DBMongo = require("./model/DbMongo");



app.use(cors());


// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

app.get("/", function (req, res) {
	BuilderJsonResponse.Success(res,{}, "I'm backend");
});

/*grupo *************************************************** */
{
	const routerGrupo = require("./controller/grupo/routerGrupo");
	let url=`/api/${UrlApiConfig.Grupo}`;
	app.use( url, routerGrupo)
}
/* ******************************************************** */

module.exports = app;
