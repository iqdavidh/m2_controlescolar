const express = require('express');

const BuilderJsonResponse = require("../../lib/BuilderJsonResponse");
const LibValidacion = require("../../lib/LibValidacion");
const AsistenciaFindByFecha = require("./AsistenciaFindByFecha");
const AsistenciaUpdateByFecha = require("./AsistenciaUpdateByFecha");
const ProAsistencia = require("./proceso/ProAsistencia");
const AsistenciaDeleteByFecha = require("./AsistenciaDeleteByFecha");

const routerAsistencia = express.Router();

/* Get AsistenciaDia (idGrupo, fDMY) */
routerAsistencia.get('/grupo/:idGrupo/:year/:mes/:dia?', (req, res, next) => {

  const id = req.params.idGrupo;

  try {

    const year = parseInt(req.params.year);
    const mes = parseInt(req.params.mes);
    const dia = req.params.dia ? parseInt(req.params.dia) : null;

    ProAsistencia.ValidarFecha(year, mes, dia);

    if (dia === null) {
      //asistencia Mes
    } else {
      const fecha = new Date(year, mes - 1, dia);
      AsistenciaFindByFecha.run(res, id, fecha);
    }


  } catch (e) {

    BuilderJsonResponse.Error(res, e);
  }


});

/* Set AsistenciaDia (idGrupo, fDMY) */
routerAsistencia.post("/grupo/:idGrupo/:year/:mes/:dia", (req, res, next) => {

  let dataRaw = req.body;

  let dataClean = [];

  dataRaw.forEach(a => {

    if(!a.id || !a.valor){
      throw new Error("Se require id y valor del objeto");
    }

    dataClean.push(
        {id: a.id, valor: a.valor}
    )

  });


  const id = req.params.idGrupo;

  try {

    const year = parseInt(req.params.year);
    const mes = parseInt(req.params.mes);
    const dia = req.params.dia ? parseInt(req.params.dia) : null;

    ProAsistencia.ValidarFecha(year, mes, dia);

    if (dia === null) {
      //asistencia Mes

    } else {
      const fecha = new Date(year, mes - 1, dia);
      AsistenciaUpdateByFecha.run(res, id, fecha, dataClean);
    }


  } catch (e) {

    BuilderJsonResponse.Error(res, e);
  }


});



/* eliminar AsistenciaDia (idGrupo, fDMY) */
routerAsistencia.delete("/grupo/:idGrupo/:year/:mes/:dia", (req, res, next) => {

  const id = req.params.idGrupo;

  try {

    const year = parseInt(req.params.year);
    const mes = parseInt(req.params.mes);
    const dia = parseInt(req.params.dia);

    ProAsistencia.ValidarFecha(year, mes, dia);

    const fecha = new Date(year, mes - 1, dia);

    AsistenciaDeleteByFecha.run(res, id, fecha);


  } catch (e) {

    BuilderJsonResponse.Error(res, e);
  }


});


module.exports = routerAsistencia;
