'use strict';

/**
 * Created by David on 18/07/2019.
 */


const supertest = require('supertest');
const assert = require('assert');
const LibTest = require('./LibTest');

let url = "http://localhost:3003"; //<-- es nuestro sitio backend

const request = supertest(url);


describe('index grupos /', function () {
	it('ok respuesta basica', function (done) {
		request
			.get('/api/grupo/index')
			.expect(200)
			.end(function (err, res) {

				const c = JSON.parse(res.text);

				LibTest.saveResponse(res.text, './indexgrupos.json');

				assert(c.success, "Se esperada true como tipo de success");
				assert(c.msg === "");

				assert(typeof c.data === "object", "El objeto data deberia deberia ser un objeto");

				assert(c.data.total>0 ,"El numero de grupo");
				assert(c.data.items.length>0 ,"El numero de items deber ser  mayor a 0");
				//TODO el data next, porque deberiamos usarlo


				let row = c.data.items[0];
				let listaP = ['_id', 'nombre', 'escuela', 'materia', 'alumnos'];
				let isValid= LibTest.ValidarTieneProp (row, listaP);

				assert(isValid === true, isValid);

				if (err) return done(err);
				done();
			})
		;
	});

});



