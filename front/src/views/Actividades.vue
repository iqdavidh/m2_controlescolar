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

      <div v-show="seRequiereActualizarDatos && idActividad!=='' ">
        <button @click="mostrarCalificaciones">
          <i></i>
          Solicitar
        </button>
      </div>
    </div>
    <div>
      <div class="col-md-12">
        <h1 id="tituloSeccion">Calificaciones</h1>
        <div>
          <button @click="onEditar">
            <i class="fa fa-upload">Modificar</i>
          </button>
        </div>
        <div>
          <button @click="onGuardar">
            <i class="fa fa-upload">Actualizar</i>
          </button>
        </div>
      </div>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Número de lista</th>
          <th scope="col">Nombre del alumno</th>
          <th scope="col">Calificaciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="alumno in listaAlumnos" :key="alumno.id">
          <td>{{alumno.id}}</td>
          <td>{{alumno.apellidos}} {{alumno.nombre}}</td>
          <td style="text-align:center">
            <div class="text-center" v-show="!isEdit">
              <span v-if="alumno.calificacion===null">NA</span>
              <span v-if="alumno.calificacion!==null">{{alumno.calificacion}}</span>
            </div>
            <div class="text-center" v-show="isEdit">
              <select class="form-control" v-model="alumno.calificacion">
                <option >10</option>
                <option >9</option>
                <option >8</option>
                <option >7</option>
                <option >6</option>
                <option >5</option>
                <option >4</option>
                <option >3</option>
                <option >2</option>
                <option >1</option>
                <option >0</option>

              </select>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <br />
    <br />

    <button type="button" class="btn btn-modificar">Modificar</button>
    <button type="button" class="btn btn-actualizar">Actualizar</button>

    <div class="col-md-12">
      <h1 id="tituloSeccion">Actividades</h1>
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
      if(this.isEnProceso){
        return;
      }
      this.isEnProceso=true;
      let calificacionesUpdate= [];
      this.listaAlumnos.forEach(alumno =>{
    
        calificacionesUpdate.push({
          id: alumno.id,
          nombre: alumno.nombre,
          apellido: alumno.apellido,
          calificacion: alumno.calificacion
        })
        
      });
        let respuesta= await dataService.updateCalificacionesActividad(
          this.idActividad,
          calificacionesUpdate
        )
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
