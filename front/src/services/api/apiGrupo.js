import libConfig from "../../lib/libConfig";
import libAsyncReqJson from "../../lib/libAsyncReqJson";

const urlApi = libConfig.urlApi;

const apiGrupo = {

  getIndexGrupos: async (pagina = 1) => {

    let url = urlApi + '/grupo/index';

    let json = await libAsyncReqJson.requestGET(url);

    return json;

  },

  getGrupo: async (id) => {
    let url = urlApi + '/grupo/' + id;

    let json = await libAsyncReqJson.requestGET(url);

    return json;
  },

  updateGrupo: async (id, data) => {
    let url = urlApi + '/grupo/' + id;

    let json = await libAsyncReqJson.requestPOST(url,data);

    return json;
  },

  insertGrupo: async (data) => {
    let url = urlApi + '/grupo/crear';

    let json = await libAsyncReqJson.requestPOST(url,data);

    return json;
  },

  deleteGrupo: async (id) => {
    let url = urlApi + '/grupo/'+id;

    let json = await libAsyncReqJson.requestDELETE(url,data);

    return json;
  }


};

export default apiGrupo;
