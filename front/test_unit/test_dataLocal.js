'use strict';

/**
 * Created by David on 23/07/2019.
 */
const {assert} = require('chai');

import dataLocal from "../src/services/dataLocal";

describe(`Probar implementacion Local de servicio`, async () => {

	it('verificar el test mocha esta disponible', async () => {
		assert(true, 'Esto no deberia pasar');
	}).timeout(20000)
});
