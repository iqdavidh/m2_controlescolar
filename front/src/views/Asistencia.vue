<template>
  <div>
    <div class="panCmd" v-show="!isEdit">
      <button type="button" class="btn btn-secondary" @click="onEditar">
        <i class="fa fa-edit"></i> Modificar
      </button>
    </div>
    <div class="panCmd" v-show="isEdit">
      <button type="button" class="btn btn-primary" @click="onGuardar">
        <i class="fa fa-upload"></i> Actualizar
      </button>
    </div>

    <div class="row">
      <div class="col-md-12">
        <h1 id="tituloSeccion">Asistencia</h1>
      </div>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Número de lista</th>
          <th scope="col">Nombre del alumno</th>
          <th scope="col">Asistencia</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="alumno in listaAlumnos" :key="alumno.id">
          <td>{{alumno.id}}</td>
          <td>{{alumno.apellidos}} {{alumno.nombre}}</td>
          <td>
            <div class="text-center" v-show="!isEdit">
              <span v-show="alumno.fechas[0].valor==1">P</span>
              <span v-show="alumno.fechas[0].valor==2">R</span>
              <span v-show="alumno.fechas[0].valor==3">J</span>
              <span v-show="alumno.fechas[0].valor==0">/</span>
            </div>
            <div v-show="isEdit">
              <select class="form-control" v-model="alumno.fechas[0].valor">
                <option value="1">Asistencia</option>
                <option value="2">Retardo</option>
                <option value="3">Justificación</option>
                <option value="0">Falta</option>
              </select>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    {{listaAlumnos}}
  </div>
</template>


<script>
import dataService from "../services/dataService";

export default {
  name: "asistencia",
  props: {},
  components: {},
  data() {
    return {
      listaAlumnos: [],
      isEdit: false
    };
  },
  methods: {
    onEditar() {
      this.isEdit = true;
    },
    onGuardar() {
      //Todo - falta gaurdar los datos
      this.isEdit = false;
    }
  },
  async mounted() {
    let id_grupo = "g2a";
    let finiDMY = "01/01/2019";
    let ffinDMY = "05/01/2019";
    let respuesta = await dataService.getIndexAsistencia(
      id_grupo,
      finiDMY,
      ffinDMY
    );
    if (respuesta.success) {
      respuesta.data.alumnos.forEach(item => {
        this.listaAlumnos.push(item);
      });
    }
  }
};
</script>


<style scoped >
.panCmd {
  padding: 10px 5px;
  text-align: center;
}
</style>
