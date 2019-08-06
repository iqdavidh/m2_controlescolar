const BuilderJsonresponse = require("../../lib/BuilderJsonResponse");
const DbMongo = require("../../model/DbMongo");


const IndexGrupoAction = {

  execute: (res, pagina) => {


    const promTotal = DbMongo.Grupos.countDocuments({});
    const promItems = DbMongo.Grupos
        .find({})
        .sort({nombre: 'desc'})
        .exec()
    ;


    Promise.all([promTotal, promItems])
        .then((values) => {
          const total = values[0];
          const items = values[1];


          let data = {
            total,
            items,
            next: ''
          };

          BuilderJsonresponse.Success(res, data);

        }).catch(error => {

      BuilderJsonresponse.Error(res, error);
    });


  }
};

module.exports = IndexGrupoAction;
