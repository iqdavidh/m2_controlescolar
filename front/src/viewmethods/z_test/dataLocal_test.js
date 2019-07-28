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
  let listaP = ['_id', 'nombre', 'escuela', 'materia', 'lista_alumnos'];
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


  let dataInsert = {'nombre': '5z', 'materia': 'recicalje', 'lista_alumnos': []};
  let respuesta = await dataLocal.insertGrupo(dataInsert);

  let listaError = [];

  libTest.ValidarRespuesta(listaError, respuesta);

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


export default listaTest;
