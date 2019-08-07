const BuilderJsonresponse = require("../../lib/BuilderJsonResponse");
const DbMongo = require("../../model/DbMongo");
const ProAsistencia = require("./proceso/ProAsistencia");


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
          let asistencia = values[1];

          let dataRespuesta = {
            total: asistencia.length,
            alumnos: [],
            fechas: [],
            next: ''
          };

          if (asistencia && asistencia.length) {
            asistencia.forEach(a => {
              dataRespuesta.fechas.push(ProAsistencia.GetDataFecha(a.fecha));
              dataRespuesta.alumnos.push(a.alumnos);
            });
          }


          BuilderJsonresponse.Success(res, dataRespuesta);

        }).catch(error => {

      BuilderJsonresponse.Error(res, error);
    });


  }
};

module.exports = AsistenciaFindByMesAction;
