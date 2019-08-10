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



  console.log("getIndexGrupos");
  console.log(respuesta.data);

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


  let dataInsert = {'nombre': '5z', 'materia': 'recicalje', 'alumnos': [] ,tag_escuela:"tag", 'tipo_ciclo':{tipo:'sep',ciclo:'2019-2020'},
    ymini:2019, ymfin:2020};
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

  let respuesta = await dataLocal.getIndexActividades('g2a');

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





listaTest.push(libTest.FactoryTest("dataLocal.getAsistenciaDia(id_grupo, finiDMY, ffinDMY)  ", async () => {


  //este metodo devuelve un _id con el id de la nueva tarea

  let id_grupo = 'g2a';
  let finiDMY = '01/01/2019';

  let respuesta = await dataLocal.getAsistenciaDia(id_grupo, finiDMY);


  let listaError = [];

  libTest.ValidarRespuesta(listaError, respuesta);


  libTest.ValidarTieneProp(listaError, respuesta.data, ["alumnos","fechas","total","next"], []);



  let row = respuesta.data.alumnos[0];
  let listaP = ['id', 'apellidos', 'nombre', 'fechas'];
  libTest.ValidarTieneProp(listaError, row, listaP, []);

  let rowFecha = row.fechas[0];
  libTest.ValidarTieneProp(listaError, rowFecha, ['fecha', 'valor']);



  let rowF = respuesta.data.fechas[0];



  libTest.ValidarTieneProp(listaError, rowF,
      ["fecha","diaSemana","mes","y"], []);




  console.log('indexAsistencia');
  console.log(respuesta.data);

  return listaError;

}));


listaTest.push(libTest.FactoryTest("dataLocal.updateAsistencia(id_grupo, dDMY, dataUpdate ", async () => {

  let id_grupo = 'g2a';
  let fDMY = '02/01/2019';
  let dataUpdate=[{'id_alumno':"x", asistencia:"x" }];

  let respuesta = await dataLocal.updateAsistencia(id_grupo, fDMY, dataUpdate);

  let listaError = [];

  libTest.ValidarRespuesta(listaError, respuesta);


  return listaError;

}));


listaTest.push(libTest.FactoryTest("dataLocal.reporteAsistencia(id_grupo,y,m)", async () => {

  let id_grupo = 'g2a';
  let y = 2019;
  let m = 1;

  let respuesta = await dataLocal.reporteAsistencia(id_grupo, y, m);

  console.log('reporte asistencia');
  console.log(respuesta.data);


  let listaError = [];
  libTest.ValidarRespuesta(listaError, respuesta);


  /*estuctura del reporte*/

  libTest.ValidarTieneProp(listaError, respuesta.data,
      ['alumnos', 'mes', 'year']);

  /*estructura secuntario 1er elemento de alumno*/
  libTest.ValidarTieneProp(listaError, respuesta.data.alumnos[0],
      ['id', 'apellidos', 'nombre', 'fechas', 'asistencia_total', 'falta_total']);

  /*estructura terciaria1er elemento de fecha de asitencia */
  libTest.ValidarTieneProp(listaError, respuesta.data.alumnos[0].fechas[0],
      ['fecha', 'valor']);
  return listaError;

}));

listaTest.push(libTest.FactoryTest("dataLocal.reporteActividades(id_grupo,y,m)", async () => {

  let id_grupo = 'g2a';
  let y = 2019;
  let m = 1;

  let respuesta = await dataLocal.reporteActividades(id_grupo, y, m);

  console.log('reporte actividad');
  console.log(respuesta.data);

  let listaError = [];

  libTest.ValidarRespuesta(listaError, respuesta);


  /*estructura 1er elemento de alumno*/
  libTest.ValidarTieneProp(listaError, respuesta.data, ['alumnos']);


  /*estructura secuntario 1er elemento de alumno*/
  libTest.ValidarTieneProp(listaError, respuesta.data.alumnos[0],
      ['actividades', 'apellidos', 'id', 'nombre'
    , 'promedio','y','m']);

  libTest.ValidarTieneProp(listaError, respuesta.data.alumnos[0].actividades[0],
      ['_id','tipo','titulo','calificacion']);




  return listaError;

}));

export default listaTest;
