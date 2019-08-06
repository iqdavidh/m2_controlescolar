const express = require('express');

const BuilderJsonResponse = require("../../lib/BuilderJsonResponse");
const LibValidacion = require("../../lib/LibValidacion");

const routerAsistencia = express.Router();

/* Get AsistenciaDia (idGrupo, fDMY) */
routerAsistencia.get('/grupo/:idGrupo/fechaDMY/:fechaDMY', (req,res,next)=>{
    const id = req.params.idGrupo;
    const fechaDMY = req.params.fechaDMY;

    const fecha=new Date();
    AsistenciaFindByFecha.run(res,id,fecha);

    
} );

routerAsistencia.post("/grupo/:idGrupo")



module.exports = routerAsistencia;