class UnitTestVue {

  constructor(nombre, msgError, fnToTest) {

    this.nombre = nombre;
    this.msgError = msgError;
    this.fnToTest = fnToTest;
    this.isRunTest = true;
    this.resultado = '';
    this.isSuccess=null;
    this.run=()=>{
      // no correr test si esta marcado como no correr
      if (!this.isRunTest) {
        return;
      }
      this.resultado = this.fnToTest();
      this.isSuccess= this.resultado==='';
    }
  }
}


const libTest = {

  FactoryTest(nombre, msgError, fnToTest) {
    return new UnitTestVue(nombre, msgError, fnToTest)
  }


};

export default libTest;
