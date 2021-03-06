'use strict';

/**
 * Created by David on 25/07/2019.
 */


import dataSeed from "../services/dataSeed"
import libFecha from "../lib/libFecha";

const listaTipoActividad = dataSeed.listaTipoActividad;


const listaGrupos = dataSeed.listaGrupos;
const listaActividad = dataSeed.listaActividad;


const paginacion = 2;

const listaDiaSemana = ['Dom', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sab'];


const getListaAsistAlumnosNew = (id_grupo) => {
  let listaAlumnosNew = listaGrupos
      .find(g => {
        return g._id === id_grupo
      })
      .alumnos
  ;

  listaAlumnosNew = JSON.parse(JSON.stringify(listaAlumnosNew));
  listaAlumnosNew.forEach(a => {
    a.valor = 1;
  });

  return listaAlumnosNew;
};


let dataLocal = {
  /* nos da una lista de objetos para ver como index*/
  getIndexGrupos: async (pagina = 1) => {

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


    const respuesta = {
      success: true,
      msg: "",
      data: {_id: id_new}
    };

    return Promise.resolve(respuesta);

  },
  updateAlumno(idGrupo, idAlumno, data) {

    /* actualiza los datos , se manda  un paylaod de qconfirmacion*/

    const grupo = listaGrupos
        .find(g => {
          return g._id === idGrupo;
        })
    ;


    const respuesta = {
      success: true,
      msg: "",
      data: {}
    };

    return Promise.resolve(respuesta);

  },
  insertAlumno(idGrupo, data) {
    /*guarda los datos del grupo, insert*/



    const grupo = listaGrupos
        .find(g => {
          return g._id === idGrupo;
        })
    ;

    const id_new = "a" + (grupo.alumnos.length + 1);
    data._id = id_new;

    const respuesta = {
      success: true,
      msg: "",
      data: {_id: id_new}
    };

    return Promise.resolve(respuesta);

  },
  deleteAlumno(idGrupo,idAlumno){

    const respuesta = {
      success: true,
      msg: "",
      data: {}
    };

    return Promise.resolve(respuesta);

  },

  /* ****************************** */

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
  getIndexActividades(id_grupo) {

    /*trae todas las actividades de una fecha*/

    let lista = listaActividad
        .filter(a => {
          return a.id_grupo === id_grupo;
        });

    //por el momento no importa la paginacion
    const d = {
      success: true,
      msg: "",
      data: {
        total: lista.length,
        items: lista,
        next: ''
      }
    };

    return Promise.resolve(d);

  },

  updateActividad(id_actividad, data) {

    let actividad = listaActividad
        .find(a => {
          return a._id === id_actividad;
        });

    Object
        .keys(data)
        .forEach(k => {
          actividad[k] = data[k];
        })
    ;

    //por el momento no importa la paginacion
    const d = {
      success: true,
      msg: "",
      data: {}
    };

    return Promise.resolve(d);

  },
  insertActividad(data) {

    const id_new = "t_z" + (listaActividad.length + 1);
    data._id = id_new;
    listaActividad.push(data);


    const respuesta = {
      success: true,
      msg: "",
      data: {_id: id_new}
    };

    return Promise.resolve(respuesta);

  },

  updateActividadCalificacionAlumno(id_actividad, id_alumno, calificacion) {

    let actividad = listaActividad
        .find(a => {
          return a._id === id_actividad;
        });


    let alumno = actividad.alumnos.find(a => {
      return a.id === id_alumno
    });

    alumno.calificacion = calificacion;

    //por el momento no importa la paginacion
    const d = {
      success: true,
      msg: "",
      data: {}
    };

    return Promise.resolve(d);

  },
  getAsistenciaDia(id_grupo, fDMY) {

    let lista = dataSeed.indexAsistencia;

    //por el momento no importa la paginacion
    const d = {
      success: true,
      msg: "",
      data: {
        total: 1,
        alumnos: lista,
        fechas:dataSeed.listaFechasA,
        next: ''
      }
    };

    return Promise.resolve(d);

  },

  paginaAsistencia(id_grupo, pagina) {

    let lista = dataSeed.indexAsistencia;

    //por el momento no importa la paginacion
    const d = {
      success: true,
      msg: "",
      data: {
        total: 1,
        alumnos: lista,
        fechas:dataSeed.listaFechasA,
        next: ''
      }
    };

    return Promise.resolve(d);

  },

  updateAsistencia(id_grupo, fDMY, dataUpdate) {

    const d = {
      success: true,
      msg: "",
      data: {}
    };

    return Promise.resolve(d);

  },

  reporteAsistencia(id_grupo, y, m) {

    const d = {
      success: true,
      msg: "",
      data: dataSeed.reporte
    };

    return Promise.resolve(d);


  },
  reporteActividades(id_grupo, y, m) {

    const d = {
      success: true,
      msg: "",
      data: {alumnos: dataSeed.reporteActividad}
    };

    return Promise.resolve(d);


  }
};

export default dataLocal;
