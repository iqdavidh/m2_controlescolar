const IndexGrupoAction  = require("./IndexGrupoAction");

const BuilderJsonResponse = require("../../lib/BuilderJsonResponse");



const express = require('express');
const routerGrupo = express.Router();


/* index */
routerGrupo.get('/index', (req, res, next) => {
  const pagina="no se usa"; //TODO
  IndexGrupoAction.execute(res,pagina);
});

/* update data grupo */
routerGrupo.post('/:id', (req, res, next) => {
  BuilderJsonResponse.Error(res,"pendiente")
});


module.exports = routerGrupo;
