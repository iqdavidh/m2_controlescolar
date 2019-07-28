'use strict';

/**
 * Created by David on 25/07/2019.
 */


import dataSeed from "../services/dataSeed"
import libFecha from "../lib/libFecha";

const listaTipoActividad = dataSeed.listaTipoActividad;


const listaGrupos = dataSeed.listaGrupos;
const listaActividad = dataSeed.listaActividad;
const listaAsistencia = dataSeed.listaAsistencia;

const paginacion = 2;

const listaDiaSemana = ['Dom', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sab'];

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
    data._id = id_new;
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
  getIndexActividades(id_grupo, fIniDMY, fFinDMY) {

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


    let alumno = actividad.lista_alumnos.find(a => {
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
  getIndexAsistencia(id_grupo, finiDMY, ffinDMY) {

    //buscar un grupo en la lista de asistencia, si no esta crear una lista

    let finiYMD = libFecha.convertDMYToYMD(finiDMY);
    let ffinYMD = libFecha.convertDMYToYMD(ffinDMY);

    let listaFechasRegistradas = listaAsistencia.filter(a => {
      return a.id_grupo === id_grupo && (a.fecha >= finiYMD || a.fecha <= ffinYMD);
    });

    let listaAlumnosNew = listaGrupos
        .find(g => {
          return g._id === id_grupo
        })
        .lista_alumnos
    ;

    listaAlumnosNew = JSON.parse(JSON.stringify(listaAlumnosNew));
    listaAlumnosNew.forEach(a => {
      a.valor = 1;
    });


    let isFechaFinalalcanzada = false;
    let listaFechas = [];
    let fYMD = finiYMD;

    let dateAsistencia = libFecha.factoryFromYMD(finiYMD);

    while (!isFechaFinalalcanzada) {

      let asistenciaDia = listaFechasRegistradas.find(a => {
        return a.fecha === fYMD;
      });

      if (asistenciaDia) {
        asistenciaDia.fechaDMY = libFecha.convertYMDtoDMY(fYMD);

      } else {
        asistenciaDia = {
          id_grupo: id_grupo,
          fecha: fYMD,
          fechaDMY: libFecha.convertYMDtoDMY(fYMD),
          lista_alumnos: listaAlumnosNew
        };
      }

      asistenciaDia.diaSemana = dateAsistencia.getDay();
      asistenciaDia.tagDia = listaDiaSemana[asistenciaDia.diaSemana];
      asistenciaDia.isEnable = !(asistenciaDia.diaSemana === 6 || asistenciaDia.diaSemana === 0);

      listaFechas.push(asistenciaDia);

      isFechaFinalalcanzada = fYMD === ffinYMD;

      dateAsistencia = dateAsistencia.addDays(1);
      fYMD = dateAsistencia.toFechaYMD();


    }


    //por el momento no importa la paginacion
    const d = {
      success: true,
      msg: "",
      data: {
        total: listaFechas.length,
        items: listaFechas,
        next: ''
      }
    };

    return Promise.resolve(d);

  },
  updateAsistencia(id_grupo, fDMY, id_alumno, estatus_asistencia) {


  }
};

export default dataLocal;
