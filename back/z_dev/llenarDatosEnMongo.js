const DBMongo = require("../src/model/DbMongo");
const listaGrupo = require("./listaGrupos");
const listaActividades = require("./listaActividades");


DBMongo.cx;

const importar = async () => {
  await DBMongo.Grupos.deleteMany({});
  await DBMongo.Actividades.deleteMany({});


  const grupos = await DBMongo.Grupos.insertMany(listaGrupo);


  const idGrupo1 = grupos[0]._id;
  const idGrupo2 = grupos[1]._id;

  let i = 1;
  listaActividades.forEach(a => {

    a.fecha=new Date(2001,1,1);
    a.idGrupo = i < 10 ? idGrupo1 : idGrupo2;
    i++;
  });

  const responseActividades = await DBMongo.Actividades.insertMany(listaActividades);

};

importar();
