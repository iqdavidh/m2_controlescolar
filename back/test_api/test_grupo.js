'use strict';

/**
 * Created by David on 18/07/2019.
 */

const fNow = new Date();


const supertest = require('supertest');
const assert = require('assert');
const LibTest = require('./LibTest');

let url = "http://localhost:3003"; //<-- es nuestro sitio backend

const request = supertest(url);


describe('grupo/index get request ok', function () {
  it('ok respuesta basica', function (done) {
    request
        .get('/api/grupo/index')
        .expect(200)
        .end(function (err, res) {

          const c = JSON.parse(res.text);

          LibTest.saveResponse(res.text, './grupo_index.json');

          assert(c.success, "Se esperada true como tipo de success");
          assert(c.msg === "");

          assert(typeof c.data === "object", "El objeto data deberia deberia ser un objeto");

          assert(c.data.total > 0, "El numero de grupo");
          assert(c.data.items.length > 0, "El numero de items deber ser  mayor a 0");
          //TODO el data next, porque deberiamos usarlo


          let row = c.data.items[0];
          let listaP = ['_id', 'nombre', 'escuela', 'materia'];
          let isValid = LibTest.ValidarTieneProp(row, listaP);

          assert(isValid === true, isValid);

          if (err) return done(err);
          done();
        })
    ;
  });
});

describe('/grupo/:idGrupo GET  ok  Buscar por ID', function () {
  it('ok respuesta basica', function (done) {
    request
        .get('/api/grupo/5d48cc49a01add3ae0483a72')
        .expect(200)
        .end(function (err, res) {

          const c = JSON.parse(res.text);

          LibTest.saveResponse(res.text, './grupo_findById.json');

          assert(c.success, "Se esperada true como tipo de success");
          assert(c.msg === "");

          assert(typeof c.data === "object", "El objeto data deberia deberia ser un objeto");


          let listaP = ['_id', 'nombre', 'escuela', 'materia', 'ciclo',
            'ymini', 'ymfin', 'comentarios', 'alumnos'];

          let isValid = LibTest.ValidarTieneProp(c.data, listaP);

          assert(isValid === true, isValid);

          if (err) return done(err);
          done();
        })
    ;
  });

});



const dataRandom = `${fNow.getHours()}:${fNow.getMinutes()}:${fNow.getSeconds()} `;

describe('/grupo/:idGrupo POST  ok  Buscar por ID y actualizar grupo', function () {
  it('ok respuesta basica', function (done) {

    const dataUpdate = {
      "comentarios": "comentario at " + dataRandom
    };

    request
        .post('/api/grupo/5d48cc49a01add3ae0483a72')
        .send(dataUpdate)
        .expect(200)
        .end(function (err, res) {

          const c = JSON.parse(res.text);

          LibTest.saveResponse(res.text, './grupo_update.json');

          assert(c.success, "Se esperada true como tipo de success");
          assert(c.msg === "");

          assert(typeof c.data === "object", "El objeto data deberia deberia ser un objeto");

          let listaP = ['_id'];
          let isValid = LibTest.ValidarTieneProp(c.data, listaP);

          assert(isValid === true, isValid);

          if (err) return done(err);
          done();
        })
    ;
  });

});







