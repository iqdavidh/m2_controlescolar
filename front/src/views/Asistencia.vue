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
              <span v-show="alumno.fechas[0].valor==1">.</span>
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
import libToast from "../lib/libToast";

export default {
  name: "asistencia",
  props: {},
  components: {},
  data() {
    return {
      listaAlumnos: [],
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
      
      if (this.isEnProceso)
      {
        return;
      }

      this.isEnProceso=true;
      let id_grupo = "g2a";
      let finiDMY = "01/01/2019";
      let dataUpdate = [];

      this.listaAlumnos.forEach( alumno =>{
          let valor= alumno.fechas[0].valor;
          let idAlumno=alumno.id;

          dataUpdate.push(
            {
              id:idAlumno,
              valor:valor
            }
          );

      });

      let respuesta = await dataService.updateAsistencia(id_grupo, finiDMY, dataUpdate);

      if(!respuesta.success){
        libToast.alert( respuesta.msg);
        return ;
      }

      libToast.success( "Registro actualizado");
      this.isEdit = false;
    }
  },
  async mounted() {
    let id_grupo = "g2a";
    let finiDMY = "01/01/2019";

    let respuesta = await dataService.getAsistenciaDia(id_grupo, finiDMY);
    if (respuesta.success) {
      respuesta.data.alumnos.forEach(item => {
        this.listaAlumnos.push(item);
      });
    }

    console.log(respuesta.data);
  }
};
</script>


<style scoped >
.panCmd {
  padding: 10px 5px;
  text-align: center;
}
</style>
