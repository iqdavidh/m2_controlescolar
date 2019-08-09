import libConfig from "../../lib/libConfig";
import libAsyncReqJson from "../../lib/libAsyncReqJson";

const urlApi = libConfig.urlApi;

const apiActividades = {

  getActividadesPagina: async (idGrupo, pagina) =>{

    let url = urlApi + `/actividades/grupo/${idGrupo}/pagina/${pagina}`;

    let json = await libAsyncReqJson.requestGET(url);

    return json;

  },

  getActividadesIndex: async (idGrupo) =>{

    let url = urlApi + `/actividades/grupo/${idGrupo}/index`;

    let json = await libAsyncReqJson.requestGET(url);

    return json;

  },
  updateCalificacionesActividad: async (idActividad, dataCalificaciones) =>{

    let url = urlApi + `/actividades/grupo/${idGrupo}/index`;

    let json = await libAsyncReqJson.requestGET(url);

    return json;

  },
  getActividad: async (idActividad) =>{

    let url = urlApi + `/actividades/${idActividad}`;

    let json = await libAsyncReqJson.requestGET(url);

    return json;

  },



};


export default apiActividades;
