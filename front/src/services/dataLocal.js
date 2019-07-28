'use strict';

/**
 * Created by David on 25/07/2019.
 */

import dataSeed from "../services/dataSeed"

const listaActividad = dataSeed.listaActividad;

const listaGrupos = dataSeed.listaGrupos;
const listaTareas = dataSeed.listaActividad;
const paginacion = 2;


let dataLocal = {
  /* nos da una lista de objetos para ver como index*/
  getIndexGrupos: async (pagina) => {

    //por el momento no importa la paginacion
    const d = {
      success: true,
      msg: "",
      data: {
        total: listaGrupos.length,
        items: listaGrupos,
        next: ''
      }
    };

    return Promise.resolve(d);


  },
  getGrupo: async (id) => {
    /* regresa todos los datos del grupo*/

    const grupo = listaGrupos
        .find(g => {
          return g._id === id;
        })
    ;

    const payload = {
      success: true,
      msg: "",
      data: {
        grupo: grupo
      }
    };

    return Promise.resolve(payload);
  },
  updateGrupo(id, data) {
    /*guarda los datos del grupo, si id es null se hace insert*/
  },
  insertGrupo(id, data) {
    /*guarda los datos del grupo, si id es null se hace insert*/
  },
  getIndexTipoActividad() {
    /* regresa un pbjectp - es la misma logica que
* success:true/false,
* msg:"",
* data:{
* 	total (el numero total de registros que hay), items, next
* }
* */
  },
  getIndexActividades(pagina) {


    /* regresa un pbjectp - es la misma logica que
  * success:true/false,
  * msg:"",
  * data:{
  * 	total (el numero total de registros que hay), items, next
  * }
  * */
  },
  updateActividad(id, data) {

  },
  insertActividad(data) {

  },
  updateActividadCalificacionAlumno(id, id_alumno, calificacion) {

  },
  getIndexAsistencia(id_grupo, finiDMY, ffinDMY) {

  },
  updateAsistencia(id_grupo, fDMY, id_alumno, estatus_asistencia) {

  }
};

export default dataLocal;
