import apiGrupo from "./api/apiGrupo";
import apiAsistencia from "./api/apiAsistencia";
import libConfig from "../lib/libConfig";
import libAsyncReqJson from "../lib/libAsyncReqJson";
const urlApi = libConfig.urlApi;
const copiarPropiedades=(origen, destino)=>{

    Object.keys(origen)
        .forEach(k => {
            destino[k]=origen[k];
        })
    ;

};

const dataApi = {};


  dataApi.getAsistenciaDia=async (id_grupo, fecha)=>{

        let y= fecha.getFullYear();
        let m= fecha.getMonth()+1;
        let d= fecha.getDate();
        let url = urlApi + `/asistencia/grupo/${id_grupo}/${y}/${m}/${d}`;
        
        console.log(url);
        let json = await libAsyncReqJson.requestGET(url);

        console.log('linea 16');
        return json;
    }
    ;

/* copiar los elementos de apiGrupo ****************** */
copiarPropiedades(apiGrupo, dataApi);

//copiarPropiedades(apiAsistencia, dataApi);

export default dataApi;
