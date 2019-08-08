import libConfig from "../lib/libConfig";
import libRequestJson from "../lib/libRequestJson";
import libAsyncReqJson from "../lib/libAsyncReqJson";

const urlApi = libConfig.urlApi;

const dataApi = {

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

    let response = await fetch(url);
    //let data = await response.json();
    return data;
  }
};

export default dataApi;
