const express = require('express');

const BuilderJsonResponse = require("../../lib/BuilderJsonResponse");

const routerActividades = express.Route();

/* Get ActividadesPagina(idGrupo, pagina) */
routerActividades.get('/grupo/:idGrupo/pagina/:pagina', (req, res, next) => {

});



module.exports=routerActividades;

