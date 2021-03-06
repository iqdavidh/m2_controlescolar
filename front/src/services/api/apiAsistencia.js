import libConfig from "../../lib/libConfig";
import libAsyncReqJson from "../../lib/libAsyncReqJson";


const urlApi = libConfig.urlApi;

const apiAsistencia = {


  getAsistenciaDia: async (id_grupo, fecha) => {

    let y = fecha.getFullYear();
    let m = fecha.getMonth() + 1;
    let d = fecha.getDate();
    let url = urlApi + `/asistencia/grupo/${id_grupo}/${y}/${m}/${d}`;

    let json = await libAsyncReqJson.requestGET(url);

    return json;
  },

  updateAsistencia: async (id_grupo, fecha, dataUpdate) => {

    let y = fecha.getFullYear();
    let m = fecha.getMonth() + 1;
    let d = fecha.getDate();
    let url = urlApi + `/asistencia/grupo/${id_grupo}/${y}/${m}/${d}`;

    let json = await libAsyncReqJson.requestPOST(url, dataUpdate);

    return json;

  },

  getAsistenciaPagina: async (id_grupo, numPagina) => {


    let url = urlApi + `/asistencia/grupo/${id_grupo}/pagina/${numPagina}`;

    let json = await libAsyncReqJson.requestGET(url);

    return json;
  },
};

export default apiAsistencia;
