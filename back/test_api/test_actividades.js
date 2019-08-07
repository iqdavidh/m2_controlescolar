'use strict';


const supertest = require('supertest');
const assert = require('assert');
const LibTest = require('./LibTest');
const DataTest = require("./DataTest");

let url = "http://localhost:3003"; //<-- es nuestro sitio backend

const fNow = new Date();
const dataRandom = `${fNow.getHours()}:${fNow.getMinutes()}:${fNow.getSeconds()} `;

const idGrupo = DataTest.idGrupo;
const idActividad = DataTest.idActividad;

const request = supertest(url);


/*
describe('actividades   api/actividades/grupo/:idGrupo/pagina/1 GET 1', function () {
  it('ok get la actividades pagina de  un grupo', function (done) {


    request
        .get('/api/actividades/grupo/' + idGrupo + '/pagina/2')
        .expect(200)
        .end(function (err, res) {

          const c = JSON.parse(res.text);

          LibTest.saveResponse(res.text, './actividades_pagina.json');

          assert(c.success, "Se esperada true como tipo de success");
          assert(c.msg === "");

          assert(typeof c.data === "object", "El objeto data deberia deberia ser un objeto");

          assert(c.data.total > 0, "El total viene vacio");
          assert(c.data.alumnos.length > 0, "El array de alumnos no esta funcioonando");
          assert(c.data.actividades.length > 0, "El array de actividades no esta funcioonando");
          assert(c.data.pagina === "2", "Esperamos la pagina 1");



          let isValid = LibTest.ValidarTieneProp(c.data.alumnos[0][0], ['id', 'nombre', 'apellidos'],['calificacion']);
          assert(isValid === true, isValid);

          isValid = LibTest.ValidarTieneProp(c.data.actividades[0], ['fecha', 'diaSemana', 'dia', 'mes', 'y', 'titulo','tipo']);
          assert(isValid === true, isValid);


          if (err) return done(err);
          done();
        })
    ;
  });
});




describe('actividades   api/actividades/:idActividad GET', function () {

  it('ok get la actividad', function (done) {


    request
        .get('/api/actividades/' + idActividad )
        .expect(200)
        .end(function (err, res) {

          const c = JSON.parse(res.text);

          LibTest.saveResponse(res.text, './actividades_finByID.json');

          assert(c.success, "Se esperada true como tipo de success");
          assert(c.msg === "");

          assert(typeof c.data === "object", "El objeto data deberia deberia ser un objeto");

          let isValid = LibTest.ValidarTieneProp(c.data, ['titulo','fecha','idGrupo','alumnos','tipo']);

          assert(isValid === true, isValid);



          if (err) return done(err);
          done();
        })
    ;
  });
});
*/


const actividadesAlumno = [
  {
    id: 1,
    calificacion: 8,
    nombre: "bart",
    apellidos: "simpson"
  },
  {
    id: 2,
    calificacion: 5,
    nombre: "Milhouse",
    apellidos: "Van Houten"
  }];


describe('actividad update - activiadad/:idAct POST  ok', function () {
  it('ok update registro existente', function (done) {

    const dataUpdate = {
      "titulo": "tit" + dataRandom,
      "comentarios": "com" + dataRandom
    };

    request
        .post('/api/actividades/' + idActividad)
        .send(dataUpdate)
        .expect(200)
        .end(function (err, res) {

          const c = JSON.parse(res.text);

          LibTest.saveResponse(res.text, './act_update.json');

          assert(c.success, "Se esperada true como tipo de success");
          assert(c.msg === "");

          assert(typeof c.data === "object", "El objeto data deberia deberia ser un objeto");

          let isValid = LibTest.ValidarTieneProp(c.data, ['_id']);

          assert(isValid === true, isValid);

          if (err) return done(err);
          done();
        })
    ;
  });

});
