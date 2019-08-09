
import apiGrupo from "./api/apiGrupo";
import apiAsistencia from "./api/apiAsistencia";
import apiAlumnos from "./api/apiAlumnos";
import apiActividades from "./api/apiActiviadades";


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
copiarPropiedades(apiActividades, dataApi);

export default dataApi;
