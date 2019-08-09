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
    
<br><br>

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
          <th class="tv">
            <div>
              <span>Resumen la última luz humana</span>
            </div>
          </th>
          <th class="tv">
            <div>
              <span>5 preguntas Tesla</span>
            </div>
          </th>
          <th class="tv">
            <div>
              <span>Portada</span>
            </div>
          </th>
          <th class="tv">
            <div>
              <span>Temario</span>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>01</td>
          <td>Vanbrunt Lesli</td>
          <td>10</td>
          <td>10</td>
          <td>10</td>
          <td>10</td>
        </tr>
        <tr>
          <td>02</td>
          <td>Govan Latrina</td>
          <td>7</td>
          <td>10</td>
          <td>9</td>
          <td>10</td>
        </tr>
        <tr>
          <td>03</td>
          <td>Rascon Leeanna</td>
          <td>6</td>
          <td>7</td>
          <td>0</td>
          <td>10</td>
        </tr>
        <tr>
          <td>04</td>
          <td>Toney Nga</td>
          <td>9</td>
          <td>7</td>
          <td>6</td>
          <td>8</td>
        </tr>
        <tr>
          <td>05</td>
          <td>Hofmann Debbra</td>
          <td>8</td>
          <td>5</td>
          <td>7</td>
          <td>6</td>
        </tr>
        <tr>
          <td>06</td>
          <td>Shanklin Barrie</td>
          <td>9</td>
          <td>8</td>
          <td>9</td>
          <td>8</td>
        </tr>
        <tr>
          <td>07</td>
          <td>Sherrer Floyd</td>
          <td>5</td>
          <td>0</td>
          <td>7</td>
          <td>6</td>
        </tr>
        <tr>
          <td>08</td>
          <td>Kinsman Zofia</td>
          <td>10</td>
          <td>9</td>
          <td>9</td>
          <td>10</td>
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
      listaActividades: []
    };
  },
  methods: {
    async onGrupoCambia() {
      
      let respuesta = await dataService.getIndexActividades(this.idGrupo);
      if (!respuesta.success) {
        libToast.alert(respuesta.msg);
        return;
      }

      libToast.success("Datos Recibidos");

      this.listaActividades = respuesta.data.items;
      console.log(this.listaActividades);
    },

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
