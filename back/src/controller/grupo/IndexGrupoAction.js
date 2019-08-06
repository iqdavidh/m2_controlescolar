const BuilderJsonresponse = require("../../lib/BuilderJsonResponse");
const DbMongo = require("../../model/DbMongo");


const IndexGrupoAction = {

  execute: function (res, pagina) {


    DbMongo.Grupos
        .find({})
        .then((lista) => {

          const data = {
            items: lista,
            total: lista.length,
            next: ''
          };

          BuilderJsonresponse.Success(res, data);

        })
        .catch(error => {
              BuilderJsonResponse.Error(res, error);
            }
        );


  }
};

module.exports = IndexGrupoAction;
