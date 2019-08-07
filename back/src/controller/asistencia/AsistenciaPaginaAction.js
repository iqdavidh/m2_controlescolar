const BuilderJsonresponse = require("../../lib/BuilderJsonResponse");
const DbMongo = require("../../model/DbMongo");
const ProAsistencia = require("./proceso/ProAsistencia");


const AsistenciaPaginaAction = {

  run: (res, idGrupo, pagina) => {

    const itemsXPage = 5;

    const promTotal = DbMongo.Asistencia.countDocuments({idGrupo});
    const promItems = DbMongo.Asistencia
        .find({idGrupo})
        .limit(itemsXPage)
        .skip(itemsXPage * (pagina - 1))
        .sort({fecha: 'desc'})
        .exec()
    ;

    Promise.all([promTotal, promItems])
        .then((values) => {

          const total = values[0];
          const items = values[1];

          const fechas = [];
          const alumnos = [];

          if (items) {
            items.forEach(asistencia => {
              fechas.push(ProAsistencia.GetDataFecha(asistencia.fecha));
              alumnos.push(asistencia.alumnos)
            });
          }

          fechas.reverse();
          alumnos.reverse();


          let data = {
            total,
            alumnos,
            pagina,
            fechas,
            next: ''
          };

          BuilderJsonresponse.Success(res, data);

        })
        .catch(error => {

          BuilderJsonresponse.Error(res, error);
        });


  }
};

module.exports = AsistenciaPaginaAction;
