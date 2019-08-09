<template>
  <div>
    <div>
      Seleccionar Grupo
      <select class="form-control" v-model="idGrupo" @change="onGrupoCambia">
        <option :value="g._id" v-for="g in listaGrupos" :key="g._id">{{g.materia}}/{{g.nombre}}</option>
      </select>
      Seleccionar Actividad
      <select
          class="form-control"
          v-model="idActividad"
          @change="onActividadCambia"
      >
        <option :value="act._id" v-for="act in listaActividades" :key="act._id">{{act.titulo}}</option>
      </select>

      <div v-show="seRequiereActualizarDatos && idActividad!=='' "
           style="margin-top: 20px; text-align: center">
        <button class="btn btn-primary" @click="mostrarCalificaciones">
          <i class="fa fa-download"></i>
          Solicitar
        </button>
      </div>
    </div>

    <div v-show="!seRequiereActualizarDatos">
      <div style="margin-top: 20px">
        <div class="col-md-12" style="display: flex">
          <h3 id="tituloSeccion" style="flex-grow: 1">Calificaciones</h3>
          <div style="text-align: right" v-show="!isEdit">
            <button @click="onEditar" class="btn btn-dark">
              <i class="fa fa-upload"></i> Modificar
            </button>
          </div>
          <div v-show="isEdit">
            <button @click="onGuardar" class="btn btn-primary">
              <i class="fa fa-upload"></i> Actualizar
            </button>
          </div>
        </div>
      </div>
      <table class="table">
        <thead>
        <tr>
          <th scope="col" style="width: 50px">#</th>
          <th scope="col">Nombre del alumno</th>
          <th scope="col" style="width: 50px">Calificaciones</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(alumno,index) in listaAlumnos" :key="alumno.id">
          <td>{{index+1}}</td>
          <td>{{alumno.apellidos}} {{alumno.nombre}}</td>
          <td style="text-align:center">
            <div class="text-center" v-show="!isEdit">
              <span v-if="alumno.calificacion===null">NA</span>
              <span v-if="alumno.calificacion!==null">{{alumno.calificacion}}</span>
            </div>
            <div class="text-center" v-show="isEdit">
              <select class="form-control" v-model="alumno.calificacion">
                <option v-for="num in 10">{{num}}</option>
              </select>
            </div>
          </td>
        </tr>
        </tbody>
      </table>

    </div>


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
        idActividad: "",
        listaActividades: [],
        listaAlumnos: [],
        seRequiereActualizarDatos: true,
        isEdit: false,
        isEnProceso: false
      };
    },
    methods: {
      onEditar() {
        this.isEdit = true;
        this.isEnProceso = false;
      },
      async onGuardar() {

        if (this.isEnProceso) {
          return;
        }

        this.isEnProceso = true;

        let calificacionesUpdate = this.listaAlumnos.map(alumno => {
          return {
            id: alumno.id,
            nombre: alumno.nombre,
            apellidos: alumno.apellidos,
            calificacion: alumno.calificacion
          }
        });

        let respuesta = await dataService.updateCalificacionesActividad(
            this.idActividad,
            calificacionesUpdate
        );

        if(!respuesta.success){
          libToast.alert(respuesta.msg);
          return;
        }

        libToast.success("Datos actualizados");

        this.isEnProceso=false;
        this.isEdit=false
      },
      onActividadCambia() {
        this.seRequiereActualizarDatos = true;
      },
      async onGrupoCambia() {
        let respuesta = await dataService.getActividadesIndex(this.idGrupo);
        if (!respuesta.success) {
          libToast.alert(respuesta.msg);
          return;
        }
        libToast.success("Datos Recibidos");

        this.seRequiereActualizarDatos = true;
        this.listaActividades = respuesta.data.actividades;
        this.idActividad = "";
      },
      async mostrarCalificaciones() {
        let respuesta = await dataService.getActividad(this.idActividad);
        if (!respuesta.success) {
          libToast.alert(respuesta.msg);
          return;
        }
        this.listaAlumnos = respuesta.data.alumnos;
        this.seRequiereActualizarDatos = false;
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
