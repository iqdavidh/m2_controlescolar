const express = require('express');

const BuilderJsonResponse = require("../../lib/BuilderJsonResponse");
const ActPaginaAction = require("./ActPaginaAction");
const ActFindByIDAction = require("./ActFindByIDAction");
const ActUpdate = require("./ActUpdateAction");
const LibValidacion = require("../../lib/LibValidacion");
const ActInsertAction = require("./ActInsertAction");
const LibFecha = require("../../lib/LibFecha");
const ActDeleteAction = require("./ActDeleteAction");

const routerAct = express.Router();

/* Get ActividadesPagina(idGrupo, pagina) */
routerAct.get('/grupo/:idGrupo/pagina/:pagina', (req, res, next) => {

  const idGrupo = req.params.idGrupo;
  const pagina = req.params.pagina;

  try {

    if (pagina < 0 || pagina > 100) {
      throw new Error("Pagina incorrecta");
    }

    ActPaginaAction.run(res, idGrupo, pagina);

  } catch (e) {

    BuilderJsonResponse.Error(res, e);
  }

});


/* find by id */
routerAct.get('/:idAct', (req, res, next) => {
  const id = req.params.idAct;
  ActFindByIDAction.run(res, id);

});

/* create */
routerAct.post('/crear', (req, res, next) => {

  let dataRaw = req.body;

  try {

    let dataClean = LibValidacion.getDataClean(dataRaw, ActInsertAction.getListaCamposAllowInsert());

    let fecha = LibFecha.getDateFromFechaDMY(dataClean.fecha);

    dataClean.fecha = fecha;


    ActInsertAction.run(res, dataClean);

  } catch (e) {

    BuilderJsonResponse.Error(e);
  }

});


/* update to ID */
routerAct.post('/:idAct', (req, res, next) => {
  const id = req.params.idAct;

  let dataRaw = req.body;

  try {

    let dataClean = LibValidacion.getDataClean(dataRaw, ActUpdate.getListaCamposAllowUpdate());

    ActUpdate.run(res, id, dataClean);

  } catch (e) {

    BuilderJsonResponse.Error(e);
  }
});


/* update to ID */
routerAct.delete('/:idAct', (req, res, next) => {
  const id = req.params.idAct;

  try{

    ActDeleteAction.run(res,id);

  }catch (e) {
    BuilderJsonResponse.Error(res,e);
  }


});


module.exports = routerAct;

