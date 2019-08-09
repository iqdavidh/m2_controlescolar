const listaDiaSemana = ['Dom', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'];
const listaMes = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

const LibFecha = {
  getDateFromFechaYMD: (fymd) => {
    let lista = fymd.toString().split('-');
  },
  getDateFromFechaDMY: (fdmy) => {

    let lista = fdmy.toString().split('/');

    let mes = parseInt(lista[1]) - 1;
    let f = new Date(lista[2], mes, lista[0]);

    return f;
  },
  dateToYMD: (d) => {
    let y = d.getFullYear();
    let mes = d.getMonth() + 1;
    let dia = d.getDate();

    dia = (dia < 10 ? '0' : '') + dia.toString();
    mes = (mes < 10 ? '0' : '') + mes.toString();

    return `${y}-${mes}-${dia}`;
  },
  dateToDMY: (d) => {
    let y = d.getFullYear();
    let mes = d.getMonth() + 1;
    let dia = d.getDate();

    dia = (dia < 10 ? '0' : '') + dia.toString();
    mes = (mes < 10 ? '0' : '') + mes.toString();

    return `${dia}/${mes}/${y}`;
  },
  dateToFechaAbb: (d) => {

    let y = d.getFullYear();
    let mes = d.getMonth() + 1;
    let dia = d.getDate();

    const textoDia = (dia < 10 ? '0' : '') + dia.toString();
    const nombreDia = listaDiaSemana[dia - 1];
    const nombreMes=listaMes[mes-1];

    return `${nombreDia} ${textoDia} ${nombreMes} ${y}`;
  }


};


module.exports = LibFecha;
