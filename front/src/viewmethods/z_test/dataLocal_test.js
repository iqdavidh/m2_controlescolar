/*dataLocal*/

import libTest from "../../lib/libTest";
import dataLocal from "../../services/dataLocal";

let listaTest = [];


listaTest.push(libTest.FactoryTest("dataLocal.getIndexGrupos", async () => {

  let respuesta = await dataLocal.getIndexGrupos();


  let listaError = [];

  libTest.ValidarRespuesta(listaError, respuesta);

  libTest.Validar(listaError, respuesta.data.total > 0, "El data no tiene total >0 ");
  libTest.Validar(listaError, respuesta.data.items.length > 0, "El data no tiene items ");
  libTest.Validar(listaError, typeof respuesta.data.next === 'string', "El data no tiene next - puede ser vacio, solo se requiere type string ");

  /*ver el primer item delkdata*/
  let row = respuesta.data.items[0];
  let listaP = ['_id', 'nombre', 'escuela', 'materia', 'alumnos'];
  libTest.ValidarTieneProp(listaError, row, listaP, []);


  let msg = libTest.GetMsgErrorTotal(listaError);
  return msg;

}));

listaTest.push(libTest.FactoryTest("dataLocal.getGrupo(id)", async () => {


  let respuesta = await dataLocal.getGrupo('g2a');


  let listaError = [];

  libTest.ValidarRespuesta(listaError, respuesta);

  libTest.Validar(listaError, typeof respuesta.data.grupo === 'object', "el data.grupo no es object");

  libTest.ValidarTieneProp(listaError, respuesta.data.grupo, ['_id', 'nombre']);

  return listaError;

}));

listaTest.push(libTest.FactoryTest("dataLocal.updateGrupo(id,data)", async () => {


  let dataUpdate = {'nombre': 'nuevo nombre', 'materia': 'nueva materia'};
  let respuesta = await dataLocal.updateGrupo('g2a', dataUpdate);


  let listaError = [];

  libTest.ValidarRespuesta(listaError, respuesta);

  return listaError;

}));


listaTest.push(libTest.FactoryTest("dataLocal.insertGrupo(data)", async () => {


  let dataInsert = {'nombre': '5z', 'materia': 'recicalje', 'alumnos': []};
  let respuesta = await dataLocal.insertGrupo(dataInsert);

  let listaError = [];

  libTest.ValidarRespuesta(listaError, respuesta);

  //el data trae el id del grupo creado
  libTest.Validar(listaError, typeof respuesta.data._id === 'string', 'no viene el id');
  libTest.Validar(listaError, respuesta.data._id.length > 0, 'no es un id valido');

  return listaError;

}));


listaTest.push(libTest.FactoryTest("dataLocal.getIndexTipoActividad()", async () => {

  let respuesta = await dataLocal.getIndexTipoActividad();

  let listaError = [];

  libTest.ValidarRespuesta(listaError, respuesta);

  libTest.Validar(listaError, respuesta.data.total > 0, "El data no tiene total >0 ");
  libTest.Validar(listaError, respuesta.data.items.length > 0, "El data no tiene items ");
  libTest.Validar(listaError, typeof respuesta.data.next === 'string', "El data no tiene next - puede ser vacio, solo se requiere type string ");

  //console.log(respuesta.data.items);

  return listaError;

}));


listaTest.push(libTest.FactoryTest("dataLocal.getIndexActividades(id_grupo, fIniDMY,fFinDMY)", async () => {

  let respuesta = await dataLocal.getIndexActividades('g2a', '01/17/2019', '01/05/202');

  let listaError = [];

  libTest.ValidarRespuesta(listaError, respuesta);

  libTest.Validar(listaError, respuesta.data.total > 0, "El data no tiene total >0 ");
  libTest.Validar(listaError, respuesta.data.items.length > 0, "El data no tiene items ");
  libTest.Validar(listaError, typeof respuesta.data.next === 'string', "El data no tiene next - puede ser vacio, solo se requiere type string ");

  //console.log(respuesta.data.items);

  return listaError;

}));


listaTest.push(libTest.FactoryTest("dataLocal.updateActividad(id_actividad, data)", async () => {

  let dataUpdate = {'titulo': 'supertitulo'};
  let respuesta = await dataLocal.updateActividad('t01', dataUpdate);

  let listaError = [];

  libTest.ValidarRespuesta(listaError, respuesta);

  return listaError;

}));


listaTest.push(libTest.FactoryTest("dataLocal.insertActividad(data)", async () => {


  //este metodo devuelve un _id con el id de la nueva tarea

  let dataInsert = {'id_grupo': 'g2a', "tipo": "tarea", "titulo": "no hacer nada", "alumnos": []};
  let respuesta = await dataLocal.insertActividad(dataInsert);


  let listaError = [];

  libTest.ValidarRespuesta(listaError, respuesta);

  libTest.Validar(listaError, typeof respuesta.data._id === 'string', 'no viene el id');
  libTest.Validar(listaError, respuesta.data._id.length > 0, 'no es un id valido');


  //console.log(respuesta.data);

  return listaError;

}));


listaTest.push(libTest.FactoryTest("dataLocal.updateActividadCalificacionAlumno(id_actividad, id_alumno, calificacion) ", async () => {


  //este metodo devuelve un _id con el id de la nueva tarea

  let id_actividad = 't41';/*2c*/
  let id_alumno = 'a29';
  let calificacion = '8';

  let respuesta = await dataLocal.updateActividadCalificacionAlumno(id_actividad, id_alumno, calificacion);


  let listaError = [];

  libTest.ValidarRespuesta(listaError, respuesta);

  //console.log(respuesta.data);

  return listaError;

}));


listaTest.push(libTest.FactoryTest("dataLocal.getIndexAsistencia(id_grupo, finiDMY, ffinDMY)  ", async () => {


  //este metodo devuelve un _id con el id de la nueva tarea

  let id_grupo = 'g2a';
  let finiDMY = '01/01/2019';
  let ffinDMY = '05/01/2019';


  let respuesta = await dataLocal.getIndexAsistencia(id_grupo, finiDMY, ffinDMY);


  let listaError = [];

  libTest.ValidarRespuesta(listaError, respuesta);

  let row = respuesta.data.items[0];
  let listaP = ['fecha', 'diaSemana', 'isEnable', 'fechaDMY', 'tagDia', 'diaSemana', 'alumnos'];
  libTest.ValidarTieneProp(listaError, row, listaP, []);

  //console.log(respuesta.data);

  return listaError;

}));


listaTest.push(libTest.FactoryTest("dataLocal.updateAsistencia(id_grupo, dDMY, idAlumno, estatus_asistencia)  ", async () => {

  let id_grupo = 'g2a';
  let fDMY = '02/01/2019';

  let respuesta = await dataLocal.updateAsistencia(id_grupo, fDMY, "03", 0);

  let listaError = [];

  libTest.ValidarRespuesta(listaError, respuesta);


  return listaError;

}));


listaTest.push(libTest.FactoryTest("dataLocal.reporteAsistencia(id_grupo,y,m)", async () => {

  let id_grupo = 'g2a';
  let y = 2019;
  let m = 1;

  let respuesta = await dataLocal.reporteAsistencia(id_grupo, y, m);

  let listaError = [];
  libTest.ValidarRespuesta(listaError, respuesta);

  libTest.Validar(listaError, respuesta.data.items.length>0,"No hay arraay de reporet");


  return listaError;

}));

listaTest.push(libTest.FactoryTest("dataLocal.reporteActividades(id_grupo,y,m)  ", async () => {

  let id_grupo = 'g2a';
  let y = 2019;
  let m = 1;

  let respuesta = await dataLocal.reporteAsistencia(id_grupo, y, m);

  let listaError = [];
  libTest.ValidarRespuesta(listaError, respuesta);


  return listaError;

}));

export default listaTest;
