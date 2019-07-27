const libValidacion = {

	/*regresa falso en caso de ser valor nulo o vacio*/
	isNotNullOrEmty(valor) {
		return !(valor === null || valor === undefined || valor.toString().trim() === '');
	},


	paramNotNull(data, listaCampos, dataError) {

		dataError = {};
		let isValid = true;

		listaCampos.forEach(c => {
			if (!this.isNotNullOrEmty(data[c])) {
				dataError[c] = true;
				isValid = false
			}
		});

		return isValid;
	}
};

export default libValidacion;
