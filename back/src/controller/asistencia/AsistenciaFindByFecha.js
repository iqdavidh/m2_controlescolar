const BuilderJsonresponse = require("../../lib/BuilderJsonResponse");
const DbMongo = require("../../model/DbMongo");


const AsistenciaFindByFechaAction = {

  run: (res, idGrupo, fecha) => {

    
    const promGrupo = DbMongo.Grupos.findById(idGrupo);
    const promAsistencia = DbMongo.Asistencia
        .find({
             id_grupo:idGrupo,
             fecha:fecha 
          })        
        .exec()
    ;


    Promise.all([promGrupo, promAsistencia])
        .then((values) => {
          
          const grupo = values[0];
          const asistencia = values[1];

          if(!asistencia){
            
            asistencia={ alumnos:[] };
            
            grupo.alumnos
              .forEach(a => {
                asistencia.alumnos.push(
                  {id:a.id, valor:1}
                );
            });
          }

          let data = {
            alumnos:asistencia.alumnos,
            fechas:[{fecha: fecha}],
            next: ''
          };

          BuilderJsonresponse.Success(res, data);

        }).catch(error => {

      BuilderJsonresponse.Error(res, error);
    });


  }
};

module.exports = AsistenciaFindByFechaAction;
