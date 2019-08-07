const BuilderJsonresponse = require("../../lib/BuilderJsonResponse");
const DbMongo = require("../../model/DbMongo");
const ProAsistencia = require("./proceso/ProAsistencia");


const AsistenciaFindByFechaAction = {

  run: (res, idGrupo, fecha) => {


    const promGrupo = DbMongo.Grupos.findById(idGrupo, {alumnos: 1});
    const promAsistencia = DbMongo.Asistencia
        .find({
          id_grupo: idGrupo,
          fecha: fecha
        })
        .exec()
    ;


    Promise.all([promGrupo, promAsistencia])
        .then((values) => {

          const grupo = values[0];
          let asistencia = values[1];

          if (asistencia._id === undefined) {

            asistencia = {alumnos: []};

            grupo.alumnos
                .forEach(a => {
                  asistencia.alumnos.push(
                      {id: a.id, valor: 1, nombre:a.nombre, apellidos:a.apellidos}
                  );
                });
          }

          let data = {
            total:1,
            alumnos: asistencia.alumnos,
            fechas: [],
            next: ''
          };

          data.fechas.push(ProAsistencia.GetDataFecha(fecha));

          BuilderJsonresponse.Success(res, data);

        }).catch(error => {

      BuilderJsonresponse.Error(res, error);
    });


  }
};

module.exports = AsistenciaFindByFechaAction;
