const BuilderJsonresponse = require("../../lib/BuilderJsonResponse");
const DbMongo = require("../../model/DbMongo");
const ProAsistencia = require("../asistencia/proceso/ProAsistencia");

const ActPaginaAction = {
  run: (res, idGrupo, pagina) => {


    const itemsXPage = 7;

    const promTotal = DbMongo.Actividades.countDocuments({idGrupo});
    const promListaAct = DbMongo.Actividades
        .find({idGrupo})
        .limit(itemsXPage)
        .skip(itemsXPage * (pagina - 1))
        .sort({fecha: 'desc'})
        .exec()
    ;

    Promise.all([promTotal, promListaAct])
        .then((values) => {

          const total = values[0];
          const listaActividades = values[1];

          const actividades = [];
          const alumnos = [];

          if (listaActividades) {
            listaActividades.forEach(actividad => {

              let actividadInfoPrincipal = ProAsistencia.GetDataFecha(actividad.fecha);
              actividadInfoPrincipal.tipo = actividad.tipo;
              actividadInfoPrincipal.titulo = actividad.titulo;

              actividades.push(actividadInfoPrincipal);
              alumnos.push(actividad.alumnos)
            });
          }

          //fechas.reverse();  <-- no es toy seguro si se debe reverse


          let data = {
            total,
            alumnos,
            pagina,
            actividades,
            next: ''
          };

          BuilderJsonresponse.Success(res, data);

        })
        .catch(error => {

          BuilderJsonresponse.Error(res, error);
        });


  }
};

module.exports = ActPaginaAction;
