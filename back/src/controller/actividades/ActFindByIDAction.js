const BuilderJsonresponse = require("../../lib/BuilderJsonResponse");
const DbMongo = require("../../model/DbMongo");

const ActFindByIDAction = {

  run: (res, id) => {

    const promGrupo = DbMongo.Actividades
        .findById(id)
        .exec()
    ;

    promGrupo
        .then((act) => {

          BuilderJsonresponse.Success(res, act);

        }).catch(error => {

      BuilderJsonresponse.Error(res, error);
    });
  }
};

module.exports = ActFindByIDAction;
