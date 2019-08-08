import apiGrupo from "./api/apiGrupo";

const copiarPropiedades=(origen, destino)=>{

    Object.keys(origen)
        .forEach(k => {
            destino[k]=origen[k];
        })
    ;

};

const dataApi = {};

/* copiar los elementos de apiGrupo ****************** */
copiarPropiedades(apiGrupo, dataApi);

export default dataApi;
