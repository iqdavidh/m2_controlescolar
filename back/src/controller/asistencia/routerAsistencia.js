const express = require('express');

const BuilderJsonResponse = require("../../lib/BuilderJsonResponse");

const AsistenciaFindByFecha = require("./AsistenciaFindByFecha");
const AsistenciaUpdateByFecha = require("./AsistenciaUpdateByFecha");
const ProAsistencia = require("./proceso/ProAsistencia");
const AsistenciaDeleteByFecha = require("./AsistenciaDeleteByFecha");
const AsistenciaPaginaAction = require("./AsistenciaPaginaAction");

const routerAsistencia = express.Router();




/* Get AsistenciaPagina(idGrupo, pagina) */
routerAsistencia.get('/grupo/:idGrupo/pagina/:pagina', (req, res, next) => {

  const idGrupo = req.params.idGrupo;
  const pagina = req.params.pagina;

  try {

    if(pagina<0|| pagina>1000 ){
      throw new Error("Pagina incorrecta");
    }

    AsistenciaPaginaAction.run(res,idGrupo,pagina);

  } catch (e) {

    BuilderJsonResponse.Error(res, e);
  }
});



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
  const listaCamposPermitidos=['id','valor','nombre','apellidos'];

  dataRaw.forEach(a => {

    const asistenciaClean={};

    listaCamposPermitidos.forEach(c=>{

      if(!a[c]){
        throw new Error("Se require " + c);
      }

      asistenciaClean[c]=a[c];
    });


    dataClean.push(asistenciaClean);

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
