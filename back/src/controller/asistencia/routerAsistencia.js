const express = require('express');

const BuilderJsonResponse = require("../../lib/BuilderJsonResponse");
const LibValidacion = require("../../lib/LibValidacion");

const routerAsistencia = express.Router();



routerAsistencia.get('/', (req,res,next)=>{
    BuilderJsonResponse.Success(res,{msg:'prioobando'});
} );

module.exports = routerAsistencia;