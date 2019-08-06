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
routerAlumnos.delete('/grupo/:idGrupo/alumno/:idAlumno', (req, res, next) => {
  const idGrupo = req.params.idGrupo;
  const idAlumno = req.params.idAlumno;

  AlumnoAction.runDelete(res,idGrupo, idAlumno);

});

/* wliminar un alumno */
routerAlumnos.post('/grupo/:idGrupo/alumno/:idAlumno', (req, res, next) => {
  const idGrupo = req.params.idGrupo;
  const idAlumno = req.params.idAlumno;
  let dataRaw = req.body;

  /*validar */


  AlumnoAction.runUpdate(res,idGrupo, idAlumno, dataRaw);
});




module.exports=routerAlumnos;
