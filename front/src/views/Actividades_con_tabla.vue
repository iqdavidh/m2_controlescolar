<template>
  <div>
    <div>
      Seleccionar Grupo
      <select class="form-control" v-model="idGrupo" @change="onGrupoCambia">
        <option :value="g._id" v-for="g in listaGrupos" :key="g._id">{{g.materia}}/{{g.nombre}}</option>
      </select>
    </div>
    <div class="col-md-12">
      <h1 id="tituloSeccion">Actividades</h1>
    </div>

    <br />
    <br />

    <button type="button" class="btn btn-modificar">Modificar</button>
    <button type="button" class="btn btn-actualizar">Actualizar</button>

    <div class="col-md-12">
      <h1 id="tituloSeccion">Actividades</h1>
    </div>

    <table class="table">
      <thead>
        <tr class="trTextoVertical">
          <th>#</th>
          <th style="width: 200px;vertical-align: bottom; text-align:left">Nombre del alumno</th>
          <th v-for="actividad in listaActividades" :key="actividad.titulo">{{actividad.titulo}}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(alumno,index) in listaAlumnos" :key="alumno.id">
          <td>{{index+1}}</td>
          <td>{{alumno.apellidos}} {{alumno.nombre}}</td>
          <td v-for="act in alumno.act" :key="act._id">
            <span v-if="act.calificacion===null">NA</span>
            <span v-if="act.calificacion!==null">{{act.calificacion}}</span>
           
          </td>
        </tr>
      </tbody>
      <tfoot></tfoot>
    </table>

  </div>
</template>

<script>
import dataService from "../services/dataService";
import libToast from "../lib/libToast";

export default {
  name: "actividades",
  props: {},
  components: {},
  data() {
    return {
      listaGrupos: [],
      idGrupo: "",
      listaActividades: [],
      listaAlumnos: []
    };
  },
  methods: {
    async onGrupoCambia() {
      /*
      let respuesta = await dataService.getIndexActividades(this.idGrupo);
      if (!respuesta.success) {
        libToast.alert(respuesta.msg);
        return;
      }
*/
      let respuesta = {
        success: true,
        msg: "",
        data: {
          total: 9,
          pagina: "1",
          alumnos: [
            {
              id: "27",
              nombre: "Kim",
              apellidos: "Beres",
              act: [
                {
                  _id: "5d4c32673a8148097cb7ba6e",
                  calificacion: 7
                },
                {
                  _id: "5d4c32673a8148097cb7ba6f",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba70",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba71",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba72",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba73",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba74",
                  calificacion: null
                }
              ]
            },
            {
              id: "15",
              nombre: "Jarrod",
              apellidos: "Bradway",
              act: [
                {
                  _id: "5d4c32673a8148097cb7ba6e",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba6f",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba70",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba71",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba72",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba73",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba74",
                  calificacion: null
                }
              ]
            },
            {
              id: "23",
              nombre: "Rocco",
              apellidos: "Carmen",
              act: [
                {
                  _id: "5d4c32673a8148097cb7ba6e",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba6f",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba70",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba71",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba72",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba73",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba74",
                  calificacion: null
                }
              ]
            },
            {
              id: "14",
              nombre: "Julio",
              apellidos: "Chess",
              act: [
                {
                  _id: "5d4c32673a8148097cb7ba6e",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba6f",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba70",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba71",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba72",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba73",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba74",
                  calificacion: null
                }
              ]
            },
            {
              id: "24",
              nombre: "Marget",
              apellidos: "Dearman",
              act: [
                {
                  _id: "5d4c32673a8148097cb7ba6e",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba6f",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba70",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba71",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba72",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba73",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba74",
                  calificacion: null
                }
              ]
            },
            {
              id: "20",
              nombre: "Lorretta",
              apellidos: "Derrico",
              act: [
                {
                  _id: "5d4c32673a8148097cb7ba6e",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba6f",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba70",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba71",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba72",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba73",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba74",
                  calificacion: null
                }
              ]
            },
            {
              id: "30",
              nombre: "Windy",
              apellidos: "Eisen",
              act: [
                {
                  _id: "5d4c32673a8148097cb7ba6e",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba6f",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba70",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba71",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba72",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba73",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba74",
                  calificacion: null
                }
              ]
            },
            {
              id: "02",
              nombre: "Latrina",
              apellidos: "Govan",
              act: [
                {
                  _id: "5d4c32673a8148097cb7ba6e",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba6f",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba70",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba71",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba72",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba73",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba74",
                  calificacion: null
                }
              ]
            },
            {
              id: "25",
              nombre: "Celestina",
              apellidos: "Greenhill",
              act: [
                {
                  _id: "5d4c32673a8148097cb7ba6e",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba6f",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba70",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba71",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba72",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba73",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba74",
                  calificacion: null
                }
              ]
            },
            {
              id: "11",
              nombre: "Deshawn",
              apellidos: "Gurrola",
              act: [
                {
                  _id: "5d4c32673a8148097cb7ba6e",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba6f",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba70",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba71",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba72",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba73",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba74",
                  calificacion: null
                }
              ]
            },
            {
              id: "05",
              nombre: "Debbra",
              apellidos: "Hofmann",
              act: [
                {
                  _id: "5d4c32673a8148097cb7ba6e",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba6f",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba70",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba71",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba72",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba73",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba74",
                  calificacion: null
                }
              ]
            },
            {
              id: "08",
              nombre: "Zofia",
              apellidos: "Kinsman",
              act: [
                {
                  _id: "5d4c32673a8148097cb7ba6e",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba6f",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba70",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba71",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba72",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba73",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba74",
                  calificacion: null
                }
              ]
            },
            {
              id: "09",
              nombre: "Azalee",
              apellidos: "Lemos",
              act: [
                {
                  _id: "5d4c32673a8148097cb7ba6e",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba6f",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba70",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba71",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba72",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba73",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba74",
                  calificacion: null
                }
              ]
            },
            {
              id: "26",
              nombre: "Rosamaria",
              apellidos: "Levesque",
              act: [
                {
                  _id: "5d4c32673a8148097cb7ba6e",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba6f",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba70",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba71",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba72",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba73",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba74",
                  calificacion: null
                }
              ]
            },
            {
              id: "21",
              nombre: "Epifania",
              apellidos: "Lococo",
              act: [
                {
                  _id: "5d4c32673a8148097cb7ba6e",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba6f",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba70",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba71",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba72",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba73",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba74",
                  calificacion: null
                }
              ]
            },
            {
              id: "13",
              nombre: "Katelin",
              apellidos: "Lovern",
              act: [
                {
                  _id: "5d4c32673a8148097cb7ba6e",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba6f",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba70",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba71",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba72",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba73",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba74",
                  calificacion: null
                }
              ]
            },
            {
              id: "22",
              nombre: "Toni",
              apellidos: "Mckeithan",
              act: [
                {
                  _id: "5d4c32673a8148097cb7ba6e",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba6f",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba70",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba71",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba72",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba73",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba74",
                  calificacion: null
                }
              ]
            },
            {
              id: "12",
              nombre: "Erin",
              apellidos: "Mingo",
              act: [
                {
                  _id: "5d4c32673a8148097cb7ba6e",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba6f",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba70",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba71",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba72",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba73",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba74",
                  calificacion: null
                }
              ]
            },
            {
              id: "16",
              nombre: "Tobie",
              apellidos: "Newhart",
              act: [
                {
                  _id: "5d4c32673a8148097cb7ba6e",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba6f",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba70",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba71",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba72",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba73",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba74",
                  calificacion: null
                }
              ]
            },
            {
              id: "10",
              nombre: "Columbus",
              apellidos: "Nickel",
              act: [
                {
                  _id: "5d4c32673a8148097cb7ba6e",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba6f",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba70",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba71",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba72",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba73",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba74",
                  calificacion: null
                }
              ]
            },
            {
              id: "28",
              nombre: "Candida",
              apellidos: "Prophet",
              act: [
                {
                  _id: "5d4c32673a8148097cb7ba6e",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba6f",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba70",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba71",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba72",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba73",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba74",
                  calificacion: null
                }
              ]
            },
            {
              id: "03",
              nombre: "Leeanna",
              apellidos: "Rascon",
              act: [
                {
                  _id: "5d4c32673a8148097cb7ba6e",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba6f",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba70",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba71",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba72",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba73",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba74",
                  calificacion: null
                }
              ]
            },
            {
              id: "19",
              nombre: "Otto",
              apellidos: "Riffel",
              act: [
                {
                  _id: "5d4c32673a8148097cb7ba6e",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba6f",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba70",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba71",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba72",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba73",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba74",
                  calificacion: null
                }
              ]
            },
            {
              id: "17",
              nombre: "Griselda",
              apellidos: "Roehr",
              act: [
                {
                  _id: "5d4c32673a8148097cb7ba6e",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba6f",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba70",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba71",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba72",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba73",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba74",
                  calificacion: null
                }
              ]
            },
            {
              id: "06",
              nombre: "Barrie",
              apellidos: "Shanklin",
              act: [
                {
                  _id: "5d4c32673a8148097cb7ba6e",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba6f",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba70",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba71",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba72",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba73",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba74",
                  calificacion: null
                }
              ]
            },
            {
              id: "07",
              nombre: "Floyd",
              apellidos: "Sherrer",
              act: [
                {
                  _id: "5d4c32673a8148097cb7ba6e",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba6f",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba70",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba71",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba72",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba73",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba74",
                  calificacion: null
                }
              ]
            },
            {
              id: "04",
              nombre: "Nga",
              apellidos: "Toney",
              act: [
                {
                  _id: "5d4c32673a8148097cb7ba6e",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba6f",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba70",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba71",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba72",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba73",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba74",
                  calificacion: null
                }
              ]
            },
            {
              id: "01",
              nombre: "Lesli",
              apellidos: "Vanbrunt",
              act: [
                {
                  _id: "5d4c32673a8148097cb7ba6e",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba6f",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba70",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba71",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba72",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba73",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba74",
                  calificacion: null
                }
              ]
            },
            {
              id: "18",
              nombre: "George",
              apellidos: "Yarbro",
              act: [
                {
                  _id: "5d4c32673a8148097cb7ba6e",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba6f",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba70",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba71",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba72",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba73",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba74",
                  calificacion: null
                }
              ]
            },
            {
              id: "29",
              nombre: "Lora",
              apellidos: "Yarnall",
              act: [
                {
                  _id: "5d4c32673a8148097cb7ba6e",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba6f",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba70",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba71",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba72",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba73",
                  calificacion: null
                },
                {
                  _id: "5d4c32673a8148097cb7ba74",
                  calificacion: null
                }
              ]
            }
          ],
          actividades: [
            {
              _id: "5d4c32673a8148097cb7ba6e",
              tipo: "tarea",
              titulo: "Cuadro eval firmado",
              fechaDMY: "01/02/2001",
              fechaAbb: "Dom 01 Febrero"
            },
            {
              _id: "5d4c32673a8148097cb7ba6f",
              tipo: "tarea",
              titulo: "Cuadro eval 2do día",
              fechaDMY: "01/02/2001",
              fechaAbb: "Dom 01 Febrero"
            },
            {
              _id: "5d4c32673a8148097cb7ba70",
              tipo: "tarea",
              titulo: "cuadro de eval 3er dia",
              fechaDMY: "01/02/2001",
              fechaAbb: "Dom 01 Febrero"
            },
            {
              _id: "5d4c32673a8148097cb7ba71",
              tipo: "tarea",
              titulo: "cuadro de eval 4to día",
              fechaDMY: "01/02/2001",
              fechaAbb: "Dom 01 Febrero"
            },
            {
              _id: "5d4c32673a8148097cb7ba72",
              tipo: "tarea",
              titulo: "Problema energía cinética",
              fechaDMY: "01/02/2001",
              fechaAbb: "Dom 01 Febrero"
            },
            {
              _id: "5d4c32673a8148097cb7ba73",
              tipo: "tarea",
              titulo: "Problema de energia potencial",
              fechaDMY: "01/02/2001",
              fechaAbb: "Dom 01 Febrero"
            },
            {
              _id: "5d4c32673a8148097cb7ba74",
              tipo: "tarea",
              titulo: "Bata 20 de mayo",
              fechaDMY: "01/02/2001",
              fechaAbb: "Dom 01 Febrero"
            }
          ],
          next: ""
        }
      };

      libToast.success("Datos Recibidos");

      this.listaActividades = respuesta.data.actividades;
      this.listaAlumnos = respuesta.data.alumnos;

      console.log(this.listaActividades);
    }
  },
  async mounted() {
    let respuesta = await dataService.getIndexGrupos();
    if (!respuesta.success) {
      libToast.alert(respuesta.msg);
      return;
    }
    this.listaGrupos = respuesta.data.items;
  }
};

</script>

<style scoped>
</style>
