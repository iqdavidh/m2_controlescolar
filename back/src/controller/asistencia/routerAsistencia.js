const express = require('express');

const BuilderJsonResponse = require("../../lib/BuilderJsonResponse");
const LibValidacion = require("../../lib/LibValidacion");
const AsistenciaFindByFecha = require("./AsistenciaFindByFecha");

const routerAsistencia = express.Router();

/* Get AsistenciaDia (idGrupo, fDMY) */
routerAsistencia.get('/grupo/:idGrupo/:year/:mes/:dia?', (req, res, next) => {

  const id = req.params.idGrupo;

  try {

    const year = parseInt(req.params.year);
    const mes = parseInt(req.params.mes);
    const dia = req.params.dia ? parseInt(req.params.dia) : null;


    if (year > 2050 || year < 2000) {
      throw new Error("Año incorrecto " + year.toString());
    }

    if (mes > 12 || mes < 1) {
      throw new Error("mes incorrecto " + mes.toString());
    }

    if (dia !== null && dia > 31 || dia < 1) {
      throw new Error("dia incorrecto " + dia.toString());

    }

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

routerAsistencia.post("/grupo/:idGrupo");


module.exports = routerAsistencia;
