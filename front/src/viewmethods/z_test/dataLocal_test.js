/*dataLocal*/

import libTest from "../../lib/libTest";
import dataLocal from "../../services/dataLocal";

let listaTest = [];


listaTest.push(libTest.FactoryTest("dataLocal.getIndexGrupos", async () => {

  let p = await dataLocal.getIndexGrupos();


  let listaError = [];

  libTest.Validar(listaError, p.success, "success no es true");
  libTest.Validar(listaError, p.msg === '', "msg no vacio");
  libTest.Validar(listaError, typeof p.data === 'object', "el data no es object");

  libTest.Validar(listaError, p.data.total > 0, "El data no tiene total >0 ");
  libTest.Validar(listaError, p.data.items.length > 0, "El data no tiene items ");
  libTest.Validar(listaError, typeof p.data.next === 'string', "El data no tiene next - puede ser vacio, solo se requiere type string ");

  /*ver el primer item delkdata*/
  let row = p.data.items[0];
  let listaP = ['_id', 'nombre', 'escuela', 'materia', 'lista_alumnos'];
  libTest.ValidarTieneProp(listaError, row, listaP, []);


  let msg = libTest.GetMsgErrorTotal(listaError);
  return msg;

}));


listaTest.push(libTest.FactoryTest("dataLocal.getGrupo(id)", async () => {


  let p = await dataLocal.getGrupo('g2a');


  let listaError = [];

  libTest.Validar(listaError, p.success, "success no es true");
  libTest.Validar(listaError, p.msg === '', "msg no vacio");
  libTest.Validar(listaError, typeof p.data === 'object', "el data no es object");
  libTest.Validar(listaError, typeof p.data.grupo === 'object', "el data.grupo no es object");

  libTest.ValidarTieneProp(listaError, p.data.grupo, ['_id', 'nombre']);

  return listaError;

}));


listaTest.push(libTest.FactoryTest("dataLocal.updateGrupo(id,data)", async () => {


  let dataUpdate = {'nombre': 'nuevo nombre', 'materia': 'nueva materia'};
  let p = await dataLocal.updateGrupo('g2a', dataUpdate);


  let listaError = [];

  libTest.Validar(listaError, p.success, "success no es true");
  libTest.Validar(listaError, p.msg === '', "msg no vacio");
  libTest.Validar(listaError, typeof p.data === 'object', "el data no es object");

  return listaError;

}));


export default listaTest;
