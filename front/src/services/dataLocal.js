'use strict';

/**
 * Created by David on 25/07/2019.
 */


import dataSeed from "../services/dataSeed"

const listaTipoActividad=['Tarea','Examen'];


const listaGrupos = dataSeed.listaGrupos;
const listaActividad = dataSeed.listaActividad;
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

    const respuesta = {
      success: true,
      msg: "",
      data: {
        grupo: grupo
      }
    };

    return Promise.resolve(respuesta);
  },
  updateGrupo(id, data) {

    /* actualiza los datos , se manda  un paylaod de qconfirmacion*/

    const index = listaGrupos
        .findIndex(g => {
          return g._id === id;
        })
    ;

    Object
        .keys(data)
        .forEach(k => {
          listaGrupos[index][k] = data[k];
        })
    ;


    const respuesta = {
      success: true,
      msg: "",
      data: {}
    };

    return Promise.resolve(respuesta);

  },
  insertGrupo(data) {
    /*guarda los datos del grupo, insert*/


    const id_new = "5z" + (listaGrupos.length + 1);
    data._id= id_new;
    listaGrupos.push(data);


    const respuesta = {
      success: true,
      msg: "",
      data: {_id: id_new}
    };

    return Promise.resolve(respuesta);

  },
  getIndexTipoActividad() {

    //por el momento no importa la paginacion
    const d = {
      success: true,
      msg: "",
      data: {
        total: listaTipoActividad.length,
        items: listaTipoActividad,
        next: ''
      }
    };

    return Promise.resolve(d);

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
