const ProCrearTablaNormalizada = {
  exe: (listaAsistencia) => {


    const alumnosEnLista = [];

    listaAsistencia.forEach(asistencia => {


      //buscar todos los alumnos
      asistencia.alumnos.forEach(alumno => {

        let id = alumno.id;

        let indexAlumno = alumnosEnLista
            .findIndex(item => {
              return item.id === id;
            });

        if (indexAlumno === -1) {
          alumnosEnLista.push({
            id: alumno.id,
            nombre: alumno.nombre,
            apellidos: alumno.apellidos,
            asistencia:[]
          });
        }
      });

    });

    alumnosEnLista
        .sort((a, b) => {

          if (a.apellidos === b.apellidos) {

            if (a.nombre === b.nombre) {
              return 0;
            }

            if (a.nombre > b.nombre) {
              return 1;
            } else {
              return -1;
            }

          }

          if (a.apellidos > b.apellidos) {
            return 1;
          } else {
            return -1;
          }

        })
    ;




    const asistenciaDeTodos = [];

    alumnosEnLista.forEach( alumno=>{

      let idAlumno=alumno.id;

      let asistenciaEnFecha=null;

      listaAsistencia.forEach(asistencia=>{

        const alumnosEnFecha=asistencia.alumnos;

        const afecha= alumnosEnFecha.find( a=>{
          return a.id===idAlumno;
        });

        if(afecha!==undefined){
          asistenciaEnFecha = afecha;
        }
      });


      if(asistenciaEnFecha===null){
        asistenciaEnFecha={
          id:idAlumno,
          valor:null,
          nombre:alumno.nombre,
          apellidos:alumnos.apellidos
        };
      }

      alumno.asistencia.push( asistenciaEnFecha)

    });





    const respuesta = {
      alumnos:alumnosEnLista
    };

    return respuesta;
  }
};

module.exports = ProCrearTablaNormalizada;
