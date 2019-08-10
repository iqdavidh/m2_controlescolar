<template>
  <div>
    <!-- Panel para seleccionar s y grupo-->
    <div>
      Seleccionar Grupo
      <select class="form-control" v-model="idGrupo"
              @change="onDatosCambiaron">
        <option :value="g._id" v-for="g in listaGrupos" :key="g._id">{{g.materia}} ({{g.nombre}})</option>
      </select>
      <div style="padding-top:20px">
        Seleccionar Fecha
        <datepicker v-model="fecha" format="dd/MM/yyyy"
                    @selected="onDatosCambiaron"></datepicker>
      </div>

      <div class="text-center"
           v-show="!isDatosListos && idGrupo!==''">
        <button class="btn btn-primary" @click="mostrarAsistencia">
          <i class="fa fa-download"></i>
          Solicitar
        </button>
      </div>
    </div>

    <!-- La tabla de alumnos con la asistencia del grupo en la s sel -->
    <div v-show="isDatosListos">
      <div class="row">
        <div class="col-md-12" style="display:flex">
          <h2 id="tituloSeccion">Asistencia</h2>
          <div class="panCmd" v-show="!isEdit" style="flex-grow:1; text-align: right">
            <button type="button" class="btn btn-secondary" @click="onEditar">
              <i class="fa fa-edit"></i> Modificar
            </button>
          </div>
          <div class="panCmd" v-show="isEdit" style="flex-grow:1; text-align: right">
            <button type="button" class="btn btn-primary" @click="onGuardar">
              <i class="fa fa-upload"></i> Actualizar
            </button>
          </div>
        </div>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col" style="width: 40px">#</th>
            <th scope="col">Nombre del alumno</th>
            <th scope="col">Asistencia</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(alumno,index) in listaAlumnos" :key="alumno.id">
            <td>{{index+1}}</td>
            <td>{{alumno.apellidos}} {{alumno.nombre}}</td>
            <td>
              <div class="text-center" v-show="!isEdit">
                <span v-show="alumno.valor==1">.</span>
                <span v-show="alumno.valor==2">R</span>
                <span v-show="alumno.valor==3">J</span>
                <span v-show="alumno.valor==0">/</span>
              </div>
              <div v-show="isEdit">
                <select class="form-control" v-model="alumno.valor">
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
    </div>

  </div>
</template>


<script>
import dataService from "../services/dataService";
import libToast from "../lib/libToast";
import Datepicker from 'vuejs-datepicker';

export default {
  name: "asistencia",
  props: {},
  components: {
      Datepicker
    },
  data() {
    return {
      listaAlumnos: [],
      isEdit: false /* indica si esta en modo de edicion - muestra select para cambiar asistencia  */,
      isEnProceso: false /* indica si ya estamos enviando los cambios -para no repetir doble click */,
      idGrupo: "",
      listaGrupos: [],
      isDatosListos: false, /* nos indica si ya podemos ver la tabla de asistencia */
      fecha: new Date()
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

      let dataUpdate = [];

      this.listaAlumnos.forEach(alumno => {
        let valor = alumno.valor;
        let idAlumno = alumno.id;

        dataUpdate.push({
          id: idAlumno,
          valor: valor,
          nombre:alumno.nombre,
          apellidos:alumno.apellidos
        });
      });

      let respuesta = await dataService.updateAsistencia(
        this.idGrupo,
        this.fecha,
        dataUpdate
      );

      if (!respuesta.success) {
        libToast.alert(respuesta.msg);
        return;
      }

      libToast.success("Registro actualizado");
      this.isEdit = false;
    },
    onDatosCambiaron(){
      this.isDatosListos=false;
    },
    async mostrarAsistencia () {

      let respuesta = await dataService.getAsistenciaDia(this.idGrupo, this.fecha);


      if (!respuesta.success) {
        libToast.alert(respuesta.msg);
        return;
      }

      libToast.success("Datos Recibidos");

      this.listaAlumnos= respuesta.data.alumnos;
      this.isDatosListos=true;

    }
  },
  async mounted() {


    let respuesta = await dataService.getIndexGrupos();
    if (!respuesta.success) {
      libToast.alert(respuesta.msg);
      return;
    }
    this.listaGrupos = respuesta.data.items;
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
