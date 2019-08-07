const express = require('express');

const BuilderJsonResponse = require("../../lib/BuilderJsonResponse");
const ActPaginaAction = require("./ActPaginaAction");

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



module.exports=routerAct;

