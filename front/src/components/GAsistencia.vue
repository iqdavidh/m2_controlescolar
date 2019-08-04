<template>
  <div>


    <div style="display: flex">


      <div style="margin-right: 50px">

         <span class="btn btn-primary btn-sm" title="Agregar Alumno"
         >
           <i class="fa fa-plus"></i>
         </span>

      </div>

      <nav aria-label="Page navigation " style="flex-grow: 1">
        <ul class="pagination pagination-sm">
          <li class="page-item"
              v-show="totalPaginas>0 && numPagina>1"
          >
            <a class="page-link" href="#">Previous</a>
          </li>

          <li class="page-item"
              :class="{'active':numPagina===num}"
              v-for="num in totalPaginas" :key="num"
          >
            <a class="page-link"
               href="#">{{num}}</a>
          </li>

          <li class="page-item"
              v-show="totalPaginas>0 && numPagina<totalPaginas"
          ><a class="page-link" href="#">Next</a></li>
        </ul>
      </nav>

    </div>


    <table class="table table-condensed table-striped tableAsistencia">
      <thead>

      <tr>
        <th></th>
        <th></th>
        <th v-for="f in fechas"
            :class="{'thSelected':f.fecha===form.fechaOld.fecha ,
            'thEdit':f.fecha===form.fechaOld.fecha && form.fechaOld.isEdit
            }"
        >

          <span class="btn btn-secondary btn-sm"
                title="Editar Asistencia"
                v-show="!f.isEdit"
                @click="onEditarAsistenciaFecha(f)"
          >
            <i class="fa fa-edit"></i>
          </span>

          <div v-if="f.isEdit" style="width: 150px">

            <span class="btn btn-primary btn-sm"
                  title="Actualizar Asistencia"

                  @click="onSaveAsistenciaFecha(f)"
            >
            <i class="fa fa-upload"></i>
          </span>

            <span class="btn btn-dark btn-sm"
                  title="Cancel"
                  style="margin-left: 25px"

                  @click="onCancelAsistenciaFecha(f)"
            >
            <i class="fa fa-times"></i>
          </span>
          </div>


        </th>
      </tr>

      <tr>
        <th style="width: 30px">#</th>
        <th>Alumno</th>
        <th v-for="f in fechas" :key="f.fecha"
            :class="{'thSelected':f.fecha===form.fechaOld.fecha
            ,'thEdit':f.fecha===form.fechaOld.fecha && form.fechaOld.isEdit
            }"
        >
          {{f.diaSemana}} {{ f.dia}} <br> {{f.mes}} {{f.y}}
        </th>
      </tr>

      </thead>
      <tbody>


      <tr v-for="(alumno,index) in alumnos" :key="alumno.id">
        <td>{{index+1}}</td>
        <td>
          {{alumno.nombre}} {{alumno.apellidos}}
        </td>

        <td v-for="f in alumno.fechas"
            :key="f.fecha"
            :class="{'tdSelected':f.fecha === form.fechaOld.fecha}"
        >
          <div v-if=" !(f.fecha === form.fechaOld.fecha && form.fechaOld.isEdit)">
            <span v-show="f.valor==1">.</span>
            <span v-show="f.valor==2">R</span>
            <span v-show="f.valor==3">J</span>
            <span v-show="f.valor==0">/</span>
          </div>
          <div v-if="f.fecha === form.fechaOld.fecha && form.fechaOld.isEdit">
            <select class="form-control" v-model="f.valor">
              <option value="1">.</option>
              <option value="2">Retardo</option>
              <option value="3">Justificación</option>
              <option value="0">Falta</option>
            </select>
          </div>

        </td>


      </tr>

      </tbody>
      <tfoot>
      <tr>
        <th></th>
        <th></th>
        <th v-for="f in fechas">
          <span class="btn btn-danger btn-sm"
                title="Eliminar Fecha de Asistencias"
          >
            <i class="fa fa-trash"></i>
          </span>
        </th>
      </tr>

      </tfoot>
    </table>


    <div v-if="isDebug">
      <div class="row">
        <div class="col-md-6">{{alumnos}}</div>
        <div class="col-md-6">{{fechas}}</div>
      </div>
    </div>

  </div>
</template>

<script>
  import dataService from "../services/dataLocal";
  import libToast from "../lib/libToast";
  import libConfig from "../lib/libConfig";

  export default {
    name: 'GAsistencia',
    props: {
      idGrupo: {
        type: String,
        default: () => ''
      }
    },
    data() {

      return {
        fechas: [],
        alumnos: [],
        numPagina: 0,
        totalPaginas: 0,
        form: {
          fechaOld: {isEdit: false},
          isEnProceso: false
        },
        isDebug: libConfig.isDebug

      };
    },
    computed: {},
    methods: {
      async solicitarPagina(numPagina) {

        const respuesta = await dataService.paginaAsistencia(this.idGrupo, numPagina);

        if (!respuesta.success) {
          libToast.alert(respuesta.msg);
          return;
        }

        this.totalPaginas = respuesta.data.total;

        this.alumnos.splice(0, this.alumnos.length);
        respuesta.data.alumnos.forEach(a => {
          a.fechas.forEach(f => {
            f.isEdit = false;
          });
          this.alumnos.push(a);
        });


        respuesta.data.fechas.forEach(f => {
          f.isEdit = false;
        });

        this.fechas = respuesta.data.fechas;

        if (numPagina === 0) {
          this.numPagina = respuesta.data.total;
        } else {
          this.numPagina = numPagina;
        }

      },

      onEditarAsistenciaFecha(fecha) {

        const f = this.form;

        f.fechaOld.isEdit = false;
        f.isEnProceso = false;
        f.fechaOld = fecha;

        fecha.isEdit = true;

      },
      onCancelAsistenciaFecha(fecha){
        fecha.isEdit=false;
      },
      onSaveAsistenciaFecha(fecha) {

      }

    },
    async mounted() {
      /*la pagina 0 nos va a devolver la ultima pagina*/
      this.solicitarPagina(0);

    }
  }
</script>

<style scoped>
  .tableAsistencia tr th , .tableAsistencia tr td  {
    padding: 2px;
    width: 60px;
    text-align: center;

  }

  .tableAsistencia tr th.thSelected , .tableAsistencia tr td.tdSelected {
    background-color: lightgoldenrodyellow;
  }

  th.tdEdit{
    width: 200px;
  }

</style>
