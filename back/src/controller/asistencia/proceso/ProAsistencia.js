const ProAsistencia = {

  /* obtener el objeto fecha que se requiere para el objeto fecha de respuesta asistenca**/
  GetDataFecha(fecha) {
    let dia = fecha.getDate();
    let mes = fecha.getMonth() + 1;
    let y = fecha.getFullYear();

    let diaTexto = (dia < 10 ? '0' : '') + dia.toString();
    let mesTexto = (mes < 10 ? '0' : '') + mes.toString();

    return {
      fecha: `${diaTexto}/${mesTexto}/${y}`,
      diaSemana: fecha.getDay(),
      dia: dia,
      mes: mes,
      y: y
    }
  }
};

module.exports = ProAsistencia;
