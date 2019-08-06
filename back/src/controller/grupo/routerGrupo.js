const express = require('express');

const BuilderJsonResponse = require("../../lib/BuilderJsonResponse");
const LibValidacion = require("../../lib/LibValidacion");

const GrupoIndexAction = require("./GrupoIndexAction");
const GrupoFindByIDAction = require("./GrupoFindByIDAction");
const GrupoUpdateAction = require("./GrupoUpdateAction");


const routerGrupo = express.Router();


/* index */
routerGrupo.get('/index', (req, res, next) => {
  const pagina = "no se usa"; //TODO
  GrupoIndexAction.run(res, pagina);
});

/* find by id */
routerGrupo.get('/:idGrupo', (req, res, next) => {
  const id = req.params.idGrupo;
  GrupoFindByIDAction.run(res, id);
});


/* update to ID */
routerGrupo.post('/:idGrupo', (req, res, next) => {
  const id = req.params.idGrupo;

  let dataRaw = req.body;

  try {

    let dataClean = LibValidacion.getDataClean(dataRaw, GrupoUpdateAction.getListaCamposAllowUpdate());

    GrupoUpdateAction.run(res, id, dataClean);

  } catch (e) {

    BuilderJsonResponse.Error(e);
  }

});


module.exports = routerGrupo;
