const BuilderJsonresponse = require("../../lib/BuilderJsonResponse");
const DbMongo = require("../../model/DbMongo");


let listaCamposPermitirUpdate = [
  '_id', 'nombre', 'escuela',
  'materia', 'ciclo',
  'ymini', 'ymfin',
  'comentarios', 'alumnos'
];


const GrupoUpdateAction = {

  getListaCamposAllowUpdate: () => {
    return listaCamposPermitirUpdate;
  },
  run: (res, id, dataUpdate) => {


    const promGrupo = DbMongo.Grupos
        .findById(id)
        .exec()
    ;

    const promUpdate = DbMongo.Grupos.findByIdAndUpdate(id, {$set: dataUpdate} , {
      new: false,upsert: false
    });

    promUpdate
        .then((item) => {

          const data={
            _id : id
          };

          BuilderJsonresponse.Success(res, data);

        }).catch(error => {

      BuilderJsonresponse.Error(res, error);
    });


  }
};

module.exports = GrupoUpdateAction;
