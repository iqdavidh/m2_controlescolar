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
              id_grupo: idGrupo,
              fecha: {$gte: dateIni, $lt: dateFin}
            })
        .sort({fecha: 1})
        .exec()
    ;


    Promise.all([promGrupo, promAsistencia])
        .then((values) => {

          const grupo = values[0];
          let asistencia = values[1];

          let data = {
            total: asistencia.length,
            alumnos: [],
            fechas: [],
            next: ''
          };

          if (asistencia && asistencia.length) {
            asistencia.forEach(a => {
              data.fechas.push(ProAsistencia.GetDataFecha(a.fecha));
              data.alumnos.push(a.alumnos);
            });
          }


          BuilderJsonresponse.Success(res, data);

        }).catch(error => {

      BuilderJsonresponse.Error(res, error);
    });


  }
};

module.exports = AsistenciaFindByMesAction;
