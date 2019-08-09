import libConfig from "../../lib/libConfig";
import libAsyncReqJson from "../../lib/libAsyncReqJson";

const urlApi = libConfig.urlApi;

const apiAlumnos = {

  insertAlumno: async (idGrupo, dataInsert) => {

    let url = urlApi + `/alumnos/grupo/${idGrupo}/crear` ;

    let json = await libAsyncReqJson.requestPOST(url,dataInsert);

    return json;

  },
  deleteAlumno : async(idGrupo,idAlumno)=>{

    let url = urlApi + `/alumnos/grupo/${idGrupo}/alumno/${idAlumno}` ;

    let json = await libAsyncReqJson.requestDELETE(url);

    return json;

  },
  updateAlumno: async (idGrupo, idAlumno, dataUpdate) => {

    let url = urlApi + `/alumnos/grupo/${idGrupo}/alumno/${idAlumno}` ;

    let json = await libAsyncReqJson.requestPOST(url,dataUpdate);

    return json;

  }


};

export default apiAlumnos;
