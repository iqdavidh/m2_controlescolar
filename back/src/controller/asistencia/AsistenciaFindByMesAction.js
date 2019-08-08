const BuilderJsonresponse = require("../../lib/BuilderJsonResponse");
const DbMongo = require("../../model/DbMongo");
const ProCrearTablaNormalizada = require("./proceso/ProCrearTablaNormalizada");



const AsistenciaFindByMesAction = {

  run: (res, idGrupo, y, m) => {


    const dateIni = new Date(y, m - 1, 1);

    let mFin = m + 1;
    let yFin = y;

    if (mFin > 12) {
      yFin++;
      mFin = 1;
    }

    const dateFin = new Date(yFin, mFin - 1, 1);

    const promGrupo = DbMongo.Grupos.findById(idGrupo, {alumnos: 1});

    const promAsistencia = DbMongo.Asistencia
        .find(
            {
              idGrupo: idGrupo,
              fecha: {$gte: dateIni, $lt: dateFin}
            })
        .sort({fecha: 1})
        .exec()
    ;


    Promise.all([promGrupo, promAsistencia])
        .then((values) => {

          const grupo = values[0];
          let listaAsistencia = values[1];


          const tabla = ProCrearTablaNormalizada.exe(listaAsistencia);


          let dataRespuesta = {
            total: listaAsistencia.length,
            alumnos: tabla.alumnos,
            fechas: tabla.fechas,
            next: ''
          };




          BuilderJsonresponse.Success(res, dataRespuesta);

        }).catch(error => {

      BuilderJsonresponse.Error(res, error);
    });


  }
};

module.exports = AsistenciaFindByMesAction;
