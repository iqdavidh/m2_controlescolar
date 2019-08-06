const express = require('express');

const BuilderJsonResponse = require("../../lib/BuilderJsonResponse");
const LibValidacion = require("../../lib/LibValidacion");
const AlumnoAction = require("./AlumnoAction");

const routerAlumnos = express.Router();





/* agrega un alumno al grupo */
routerAlumnos.post('/grupo/:idGrupo/alumno/crear', (req, res, next) => {
  const idGrupo = req.params.idGrupo;
  let dataRaw = req.body;

  let dataClean = LibValidacion.getDataClean(dataRaw, ['apellidos','nombre']);

  AlumnoAction.runInsert(res,idGrupo,dataClean);
});

/* actualiza los datos de un alumno */
routerAlumnos.post('/grupo/:idGrupo/alumno/:idAlumno', (req, res, next) => {

});

/* wliminar un alumno */
routerAlumnos.delete('/grupo/:idGrupo/alumno/:idAlumno', (req, res, next) => {

});


/*
* updateAlumno (idGrupo, idAlumno, data)
insertAlumno (idGrupo, data
deleteAlumno (idGRupo, idAlumno
* */

module.exports=routerAlumnos;
