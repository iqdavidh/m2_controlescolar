const BuilderJsonResponse = require("../../lib/BuilderJsonResponse");

const GrupoIndexAction  = require("./GrupoIndexAction");
const GrupoFindByIDAction  = require("./GrupoFindByIDAction");


const express = require('express');
const routerGrupo = express.Router();


/* index */
routerGrupo.get('/index', (req, res, next) => {
  const pagina="no se usa"; //TODO
  GrupoIndexAction.run(res,pagina);
});

/* find by id */
routerGrupo.get('/:id', (req, res, next) => {
  const id = req.params.id;
  GrupoFindByIDAction.run(res, id);
});


/* update data grupo */
routerGrupo.post('/:id', (req, res, next) => {
  BuilderJsonResponse.Error(res,"pendiente")
});


module.exports = routerGrupo;
