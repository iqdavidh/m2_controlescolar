class UnitTestVue {

  constructor(nombre,  fnToTest) {

    this.nombre = nombre;

    this.fnToTest = fnToTest;
    this.isRunTest = true;
    this.resultado = '';
    this.isSuccess = null;
    this.run = async () => {
      // no correr test si esta marcado como no correr
      if (!this.isRunTest) {
        return;
      }
      this.resultado = await this.fnToTest();
      this.isSuccess = this.resultado === '';
    }
  }
}


const libTest = {

  FactoryTest(nombre,  fnToTest) {
    return new UnitTestVue(nombre,  fnToTest)
  },
  Validar(listaErrorAcumulado, evaluacion, msgError) {
    if (evaluacion !== true) {
      listaErrorAcumulado.push(msgError);
    }

  },
  GetMsgErrorTotal(listaErrorAcumulado) {
    return listaErrorAcumulado.join(',');
  }

};

export default libTest;
