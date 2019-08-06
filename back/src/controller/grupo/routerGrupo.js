const BuilderJsonResponse = require("../../lib/BuilderJsonResponse");



const express = require('express');
const routerGrupo = express.Router();


/* index */
routerGrupo.get('/index', (req, res, next) => {
  BuilderJsonResponse.Success(res,{}, "pendiente no sirvo");
});

module.exports = routerGrupo;
