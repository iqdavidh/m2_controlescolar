const BuilderJsonResponse = require("../../lib/BuilderJsonResponse");

const GrupoIndexAction = require("./GrupoIndexAction");
const GrupoFindByIDAction = require("./GrupoFindByIDAction");
const GrupoUpdateAction = require("./GrupoUpdateAction");

const express = require('express');

const routerGrupo = express.Router();


/* index */
routerGrupo.get('/index', (req, res, next) => {
  const pagina = "no se usa"; //TODO
  GrupoIndexAction.run(res, pagina);
});

/* find by id */
routerGrupo.get('/:id', (req, res, next) => {
  const id = req.params.id;
  GrupoFindByIDAction.run(res, id);
});

/* find by id */
routerGrupo.put('/:id', (req, res, next) => {
  const id = req.params.id;
  GrupoFindByIDAction.run(res, id);
});


/* update to ID */
routerGrupo.post('/:id', (req, res, next) => {
  const id = req.params.id;
  let dataRaw = req.body;

  try {

    let dataClean = LibValidacion.getDataClean(dataRaw, GrupoUpdateAction.getListaCamposAllowUpdate());

    GrupoUpdateAction.run(res, id, dataClean);

  } catch (e) {

    BuilderJsonResponse.Error(e);
  }

});


module.exports = routerGrupo;
