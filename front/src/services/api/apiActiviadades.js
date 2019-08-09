import libConfig from "../../lib/libConfig";
import libAsyncReqJson from "../../lib/libAsyncReqJson";

const urlApi = libConfig.urlApi;

const apiActiviadades = {

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
  updateCalificacionesActividadd: async (idActividad, dataCalificaciones) =>{

    let url = urlApi + `/actividades/grupo/${idGrupo}/index`;

    let json = await libAsyncReqJson.requestGET(url);

    return json;

  }

};


export default apiActiviadades;
