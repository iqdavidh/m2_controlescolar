class UnitTestVue {

  constructor(nombre, fnToTest) {

    this.nombre = nombre;

    this.fnToTest = fnToTest;
    this.isRunTest = true;
    this.resultado = '';
    this.isSuccess = false;
    this.run = async function () {
      // no correr test si esta marcado como no correr
      if (!this.isRunTest) {
        return;
      }

      let r = await this.fnToTest();

      if (typeof r === "string") {
        this.isSuccess = r === '';
        this.resultado = r;
      } else {
        let msg = libTest.GetMsgErrorTotal(r);
        this.isSuccess = msg === '';
        this.resultado = msg;
      }

    }
  }
}


const libTest = {

  FactoryTest(nombre, fnToTest) {
    return new UnitTestVue(nombre, fnToTest)
  },
  Validar(listaErrorAcumulado, evaluacion, msgError) {
    if (evaluacion !== true) {
      listaErrorAcumulado.push(msgError);
    }
  },
  ValidarRespuesta(listaErrorAcumulado, p){
    this.Validar(listaErrorAcumulado, p.success, "success no es true");
    this.Validar(listaErrorAcumulado, p.msg === '', "msg no vacio");
    this.Validar(listaErrorAcumulado, typeof p.data === 'object', "el data no es object");
  },
  ValidarTieneProp(listaErrorAcumulado, objeto, listaCNotNull, listaCPosibleNull = []) {

    let isValid = true;
    let msg = '';

    listaCNotNull.forEach(c => {
      if (objeto[c] === undefined || objeto[c] === null) {
        msg += msg === '' ? '' : ', ';
        msg += c;
        isValid = false;
      }
    });

    if (msg !== '') {
      msg = 'Falta : ' + msg;
      listaErrorAcumulado.push(msg);
    }

    let msg2 = '';
    listaCPosibleNull.forEach(c => {
      if (objeto[c] === undefined) {
        msg2 += msg2 === '' ? '' : ', ';
        msg2 += c;
      }
    });

    if (msg2 !== '') {
      msg2 = 'Falta (Posible Null) : ' + msg2;
      listaErrorAcumulado.push(msg2);
    }

  },
  GetMsgErrorTotal(listaErrorAcumulado) {
    return listaErrorAcumulado.join(',');
  }

};

export default libTest;
