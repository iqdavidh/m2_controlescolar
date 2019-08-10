const DBMongo = require("../src/model/DbMongo");
const listaGrupo = require("./listaGrupos");
const listaActividades = require("./listaActividades");

listaGrupo.forEach(g=>{
  g.alumnos.sort((a,b)=>{

    if (a.apellidos === b.apellidos) {

      if (a.nombre > b.nombre) {
        return 1;
      } else {
        return -1;
      }

    } else {

      if (a.apellidos === b.apellidos) {
        return 0;
      } else {
        if (a.apellidos > b.apellidos) {
          return 1;
        } else {
          return -1;
        }
      }
    }
  })
});

DBMongo.cx;

const importar = async () => {
  await DBMongo.Grupos.deleteMany({});
  await DBMongo.Actividades.deleteMany({});


  const grupos = await DBMongo.Grupos.insertMany(listaGrupo);


  const idGrupo1 = grupos[0]._id;
  const idGrupo2 = grupos[1]._id;

  let i = 1;
  listaActividades.forEach(a => {

    a.fecha='2000-01-01';
    a.idGrupo = i < 10 ? idGrupo1 : idGrupo2;
    i++;
  });

  const responseActividades = await DBMongo.Actividades.insertMany(listaActividades);

};

importar();
