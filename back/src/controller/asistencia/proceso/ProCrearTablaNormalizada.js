const LibFecha = require("../../../lib/LibFecha");
const ProCrearTablaNormalizada = {
  exe: (listaAsistencia) => {


    const alumnosEnLista = [];
    const fechasEnLista = [];

    listaAsistencia.forEach(asistencia => {


      const dateA = asistencia.fecha;

      fechasEnLista.push({
        fechaDMY: LibFecha.dateToDMY(dateA),
        fechaAbb: LibFecha.dateToFechaAbb(dateA),
        dia: dateA.getDay()
      });

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
            asistencia: []
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

    alumnosEnLista.forEach(alumno => {

      let idAlumno = alumno.id;

      let asistenciaEnFecha = null;

      listaAsistencia.forEach(asistencia => {

        const f = asistencia.fecha;
        const fechaDMY = LibFecha.dateToDMY(f);

        alumnosEnFecha = asistencia.alumnos;

        const afecha = alumnosEnFecha.find(a => {
          return a.id === idAlumno;
        });

        if (afecha !== undefined) {
          asistenciaEnFecha = {
            id: idAlumno,
            valor: afecha.valor,
            fechaDMY
          };

        }


        /* agregar la fecha ********************** */
        if (asistenciaEnFecha === null) {
          asistenciaEnFecha = {
            id: idAlumno,
            valor: null,
            fechaDMY
          };
        }

        alumno.asistencia.push(asistenciaEnFecha);

      });

    });


    const respuesta = {
      alumnos: alumnosEnLista,
      fechas: fechasEnLista
    };

    return respuesta;
  }
};

module.exports = ProCrearTablaNormalizada;
