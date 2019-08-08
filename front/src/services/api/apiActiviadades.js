import libConfig from "../../lib/libConfig";
import libAsyncReqJson from "../../lib/libAsyncReqJson";

const urlApi = libConfig.urlApi;

const apiActiviadades = {

  getIndexActividades: async (idGrupo, pagina) =>{

    let url = urlApi + `/activiadades/grupo/${idGrupo}/pagina/${pagina}`;

    let json = await libAsyncReqJson.requestGET(url);

    return json;

  }

};


export default apiActiviadades;
