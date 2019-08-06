const BuilderJsonresponse = require("../../lib/BuilderJsonResponse");
const DbMongo = require("../../model/DbMongo");
const LibAlumnos = require("./LibAlumnos");
const uniqid = require("uniqid");


const runAction = (res, idGrupo, dataAlumno, fnUpdate) => {

  const dataResponse = {
    _id: idGrupo
  };

  DbMongo.Grupos
      .findById(idGrupo, {alumnos: 1})
      .then((data) => {

        const alumnos = data.alumnos;

        fnUpdate(alumnos, dataAlumno, dataResponse);

        LibAlumnos.sort(alumnos);

        return DbMongo.Grupos.findByIdAndUpdate(idGrupo, {$set: {alumnos}}, {
          new: false, upsert: false
        });

      })
      .then(data => {
        BuilderJsonresponse.Success(res, dataResponse);
      })
      .catch(error => {
        BuilderJsonresponse.Error(res, error);
      });
};


const AlumnoAction = {

  runInsert: (res, id, alumnoNew) => {


    let dataResponse = {};

    const fnUpdate = (alumnos, alumnoNew, dataResponse) => {

      /*crar un ID del Alumnmos*/
      alumnoNew.id = uniqid();

      alumnos.push(alumnoNew);

      dataResponse.idAlumno = alumnoNew.id;
    };

    runAction(res, id, alumnoNew, fnUpdate);

  }

};

module.exports = AlumnoAction;
