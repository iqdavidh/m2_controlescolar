<template>
  <div>
    <div>
      Seleccionar Grupo
      <select class="form-control" v-model="idGrupo" 
      @change="onGrupoCambia">
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
          Solicitar
        </button>

      </div>
    </div>
    <div class="col-md-12">
      <h1 id="tituloSeccion">Calificaciones</h1>
    </div>
    <table>
    
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
    };
  },
  methods: {
    onActividadCambia() {
      this.seRequiereActualizarDatos= false;
    },
    async onGrupoCambia() {
      
      let respuesta = await dataService.getActividadesIndex(this.idGrupo);
      if (!respuesta.success) {
        libToast.alert(respuesta.msg);
        return;
      }
      this.seRequiereActualizarDatos= false;
      libToast.success("Datos Recibidos");

      this.listaActividades = respuesta.data.actividades;


      console.log(this.listaActividades);
    },
   async mostrarCalificaciones (){
      let respuesta = await dataService.getActividad(this.idActividad);

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
