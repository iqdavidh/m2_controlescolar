<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <h1 id="tituloSeccion">Reportes</h1>
      </div>
      <div></div>Seleccionar Grupo
      <select class="form-control" v-model="idGrupo" @change="onDatosCambiaron">
        <option :value="g._id" v-for="g in listaGrupos" :key="g._id">{{g.nombre}}</option>
      </select>
      <div style="padding-top:20px">
        Seleccionar fecha
        <input />
        <datepicker v-model="fechaDMY" @selected="onDatosCambiaron" format="dd/MM/yyyy"></datepicker>
      </div>
      <div>
        Solicitar Tarea
        <input />
      </div>

      <div class="text-center" v-show="!isDatosListos">
        <button class="btn btn-primary" @click="mostrarAsistencia">
          <i class="fa fa-download"></i>
          Solicitar
        </button>
      </div>
    </div>

    <!-- La tabla de alumnos con la asistencia del grupo en la fecha sel -->
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
    </div>

    {{idGrupo}}
  </div>
</template>


<script>
import dataService from "../services/dataService";
import libToast from "../lib/libToast";
import Datepicker from "vuejs-datepicker";

export default {
  name: "reportes",
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
      isDatosListos: false /* nos indica si ya podemos ver la tabla de asistencia */,
      fechaDMY: new Date()
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
      let id_grupo = "g2a";
      let finiDMY = "01/01/2019";
      let dataUpdate = [];

      this.listaAlumnos.forEach(alumno => {
        let valor = alumno.fechas[0].valor;
        let idAlumno = alumno.id;

        dataUpdate.push({
          id: idAlumno,
          valor: valor
        });
      });

      let respuesta = await dataService.updateAsistencia(
        id_grupo,
        finiDMY,
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
      
      let respuesta = await dataService.getAsistenciaDia(this.idGrupo, this.fechaDMY);
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


<style scoped>
</style>
