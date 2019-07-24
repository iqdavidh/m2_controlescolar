'use strict';

/**
 * Created by David on 23/07/2019.
 */
const {assert} = require('chai');

describe(`Base Dummy`, async () => {

	it('verificar el test mocha esta disponible', async () => {
		assert(true, 'Esto no deberia pasar');
	}).timeout(20000)
});
