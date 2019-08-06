'use strict';


const supertest = require('supertest');
const assert = require('assert');
const LibTest = require('./LibTest');

let url = "http://localhost:3003"; //<-- es nuestro sitio backend

const fNow = new Date();
const dataRandom = `${fNow.getHours()}:${fNow.getMinutes()}:${fNow.getSeconds()} `;
const idGRupo = "5d48cc49a01add3ae0483a72";

const request = supertest(url);


describe('api/alumnos/grupo/:idGrupo/alumno/crear POST get request ok', function () {
  it('ok respuesta basica', function (done) {
    request
        .post('/api/alumnos/grupo/'+idGRupo +'/alumno/crear')
        .send({nombre: "bart" + dataRandom, "apellidos": "simson" + dataRandom})
        .expect(200)
        .end(function (err, res) {

          const c = JSON.parse(res.text);

          LibTest.saveResponse(res.text, './alumnos_crear.json');

          assert(c.success, "Se esperada true como tipo de success");
          assert(c.msg === "");

          assert(typeof c.data === "object", "El objeto data deberia deberia ser un objeto");

          assert(c.data._id !=="", "El numero de grupo");
          assert(c.data.idAlumno !=="", "El numero de items deber ser  mayor a 0");

          if (err) return done(err);
          done();
        })
    ;
  });
});
