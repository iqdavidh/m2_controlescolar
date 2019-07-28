Date.prototype.toFechaYMD = function () {
  var dat = new Date(this.valueOf());

  var dia = dat.getDate();

  if (dia < 10) {
    dia = "0" + dia.toString();
  }
  dia = dia.toString();

  var mes = dat.getMonth() + 1;
  if (mes < 10) {
    mes = "0" + mes.toString();
  }
  mes = mes.toString();

  var y = dat.getFullYear();

  return y + "-" + mes + "-" + dia;
};

Date.prototype.toFechaMDY = function () {
  var dat = new Date(this.valueOf());

  var dia = dat.getDate();

  if (dia < 10) {
    dia = "0" + dia.toString();
  }
  dia = dia.toString();

  var mes = dat.getMonth() + 1;
  if (mes < 10) {
    mes = "0" + mes.toString();
  }
  mes = mes.toString();

  var y = dat.getFullYear();

  return mes + "/" + dia + "/" + y;
};

/*Regresa el numero de mes base 1*/
Date.prototype.getMonthBase1 = function () {
  return this.getMonth() + 1;
};

Date.prototype.addDays = function(days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
};

//var fx= new ObjectFecha('2016-09-29T20:00:00-05:00');


const libFecha = {
  convertDMYToYMD(fechaDMY) {

    if (fechaDMY.length !== 10) {
      return new Error("No tiene la longitud correcta");
    }

    let lista = fechaDMY.split('/');

    let f = lista[2] + '-' + lista[1] + '-' + lista[0];

    return f;
  },
  convertYMDtoDMY(fechaYMD) {

    if (fechaYMD.length !== 10) {
      return new Error("No tiene la longitud correcta");
    }

    let lista = fechaYMD.split('-');

    let f = lista[2] + '/' + lista[1] + '/' + lista[0];

    return f;
  },
  factoryFromDMY(dmy) {
    let f = this.convertDMYToYMD(dmy);
    let lista = f.split('-');
    let y = f[2];
    let m = f[1];
    let d = f[0];

    let fecha=new Date();
    fecha.setFullYear(y);
    fecha.setMonth(m-1); //mes base 1
    fecha.setDate(d);
    fecha.setHours(0);
    fecha.setMinutes(0);
    fecha.setMilliseconds(0);

    return fecha;
  },
  factoryFromYMD(ymd) {

    let lista = ymd.split('-');
    let y = lista[0];
    let m = parseInt(lista[1]);
    let d = lista[2];

    let fecha=new Date();
    fecha.setFullYear(y);
    fecha.setMonth(m-1); //mes base 1
    fecha.setDate(d);
    fecha.setHours(0);
    fecha.setMinutes(0);
    fecha.setMilliseconds(0);

    return fecha;
  },

};

export default libFecha;
