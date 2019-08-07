const express = require('express');

const BuilderJsonResponse = require("../../lib/BuilderJsonResponse");
const ActPaginaAction = require("./ActPaginaAction");
const ActFindByIDAction = require("./ActFindByIDAction");

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


/* update to ID */
routerAct.post('/:idAct', (req, res, next) => {
  const id = req.params.idAct;

  let dataRaw = req.body;

  try {

    //  let dataClean = LibValidacion.getDataClean(dataRaw, GrupoUpdateAction.getListaCamposAllowUpdate());

    // GrupoUpdateAction.run(res, id, dataClean);

  } catch (e) {

    BuilderJsonResponse.Error(e);
  }
});


/* update to ID */
routerAct.delete('/:idAct', (req, res, next) => {
  const id = req.params.idAct;

  //GrupoDeleteAction.run(res,id);

});


module.exports = routerAct;

