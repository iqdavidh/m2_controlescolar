
import apiGrupo from "./api/apiGrupo";
import apiAsistencia from "./api/apiAsistencia";
import apiAlumnos from "./api/apiAlumnos";


const copiarPropiedades=(origen, destino)=>{

    Object.keys(origen)
        .forEach(k => {
            destino[k]=origen[k];
        })
    ;

};

const dataApi = {};


copiarPropiedades(apiGrupo, dataApi);
copiarPropiedades(apiAsistencia, dataApi);
copiarPropiedades(apiAlumnos, dataApi);

export default dataApi;
