<template>
  <div>

    {{idGrupo}}

    <div style="display: flex">


      <div style="margin-right: 50px">

         <span class="btn btn-primary btn-sm" title="Agregar Alumno"
               @click="onAddFecha"
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
        <th class="tdindex"></th>
        <th></th>
        <!--  seccion new asistencia -->
        <th v-show="form.isAddAsistencia" class="thSelected">

           <span class="btn btn-primary btn-sm"
                 title="Agregar Asistencia"

                 @click="onSaveNewAsistencia"
           >
              <i class="fa fa-upload"></i>
            </span>

          <span class="btn btn-dark btn-sm"
                title="Cancel"
                style="margin-left: 25px"

                @click="onCancelNewAsistencia"
          >
              <i class="fa fa-times"></i>
            </span>
        </th>


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

          <div v-if="f.isEdit">

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
        <th class="tdindex">#</th>
        <th class="text-right">Alumno</th>

        <!--- Agregar nueva fecha -->
        <th v-show="form.isAddAsistencia" class="thSelected"
            @click="onAddFecha"
            style="cursor: pointer"
        >

          {{getDiaSemana}}
          <br>
          {{getFechaNew}} <i class="fa fa-edit"></i>
        </th>

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
        <td class="tdindex">{{index+1}}</td>
        <td class="text-right">
          {{alumno.apellidos}} {{alumno.nombre}}
        </td>

        <td v-show="form.isAddAsistencia" class="tdSelected">

          <select class="form-control form-control-sm" v-model="alumno.valorNewAsistencia">
            <option value="1">.</option>
            <option value="2">Retardo</option>
            <option value="3">Justificación</option>
            <option value="0">Falta</option>
          </select>
        </td>


        <td v-for="asistencia in alumno.asistencia"
            :key="asistencia.fecha"
            :class="{'tdSelected':asistencia.fecha === form.fechaOld.fecha}"
        >

          <div v-if=" !(asistencia.fecha === form.fechaOld.fecha && form.fechaOld.isEdit)"
               :title="asistencia.fecha"
          >
            <span v-show="asistencia.valor==1">.</span>
            <span v-show="asistencia.valor==2">R</span>
            <span v-show="asistencia.valor==3">J</span>
            <span class="tdFalta" v-show="asistencia.valor==0">/</span>
          </div>

          <div v-if="asistencia.fecha === form.fechaOld.fecha && form.fechaOld.isEdit">
            <select class="form-control form-control-sm" v-model="asistencia.valorEdit">
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
        <th class="tdindex"></th>
        <th></th>
        <th v-show="form.isAddAsistencia"></th>
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
        <div class="col-md-6">
          {{form}}
        </div>
        <div class="col-md-6">
          {{fechas}}
        </div>
      </div>
    </div>


    <!-- Modal -->
    <div class="modal fade" id="modalAddAsistencia" tabindex="-1" role="dialog"
         aria-hidden="true">
      <div class="modal-dialog bounceIn animated  " role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title"><i class="fa fa-trash"></i> Fecha del Registro de Asistencia</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div style="margin-left: 150px">
              <datepicker v-model="form.fechaNew"
                          format="dd/MM/yyyy"></datepicker>
            </div>


          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary btn-sm"
                    @click="onSetFechaNew"

            >
              <i class="fa fa-calendar"></i> Continuar
            </button>
            <button type="button" class="btn btn-dark btn-sm"
                    data-dismiss="modal">Cancelar
            </button>

          </div>
        </div>
      </div>
    </div>


    <!-- Modal -->
    <div class="modal fade" id="modalDeleteAsistencia" tabindex="-1" role="dialog"
         aria-hidden="true">
      <div class="modal-dialog bounceIn animated  " role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title"><i class="fa fa-trash"></i> Eliminar Fecha</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">


          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-danger"

            >
              <i class="fa fa-trash"></i> Eliminar
            </button>
            <button type="button" class="btn btn-secondary"
                    data-dismiss="modal">Cancelar
            </button>

          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
  import dataService from "../services/dataService";
  import libToast from "../lib/libToast";
  import libConfig from "../lib/libConfig";
  import Datepicker from 'vuejs-datepicker';

  const listaDias = ['Dom', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  const listaDiasAbb = ['Dom', 'Lun', 'Ma', 'Mi', 'Ju', 'Vi', 'Sab'];
  const listaMes = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];

  export default {
    name: 'GAsistencia',
    props: {
      idGrupo: {
        type: String,
        default: () => ''
      }
    },
    watch:{
      idGrupo: {
        immediate: true,
        handler (newVal, oldVal) {

          this.solicitarPagina(1);
        }
      }
    },
    components: {
      Datepicker
    },
    data() {

      return {
        fechas: [],
        alumnos: [],
        numPagina: 1,
        totalPaginas: 0,
        totalRegistros:0,
        form: {
          fechaOld: {isEdit: false},
          isEnProceso: false,
          isAddAsistencia: false,
          fechaNew: new Date()

        },
        isDebug: libConfig.isDebug

      };
    },
    computed: {
      getDiaSemana() {

        const fnew = this.form.fechaNew;

        let diaSemana = fnew.getDay();
        return listaDias[diaSemana];
      },
      getFechaNew() {

        const fnew = this.form.fechaNew;

        if (!fnew) {
          return '';
        }

        let m = fnew.getMonth() + 1;
        m = m < 10 ? '0' + m.toString() : m.toString();

        let d = fnew.getDate();
        d = d < 10 ? '0' + d.toString() : d.toString();

        return `${d}/${m}/${fnew.getFullYear()}`;
      }
    },
    methods: {
      async solicitarPagina(numPagina) {


        const x = 0;

        if (this.idGrupo === '') {
          return;
        }

        const respuesta = await dataService.getAsistenciaPagina(this.idGrupo, numPagina);

        if (!respuesta.success) {
          libToast.alert(respuesta.msg);
          return;
        }

        this.totalPaginas = respuesta.data.totalPaginas;
        this.totalRegistros=respuesta.data.total;

        this.alumnos = respuesta.data.alumnos;

        respuesta.data.fechas.forEach(f => {
          f.isEdit = false;
        });

        this.fechas = respuesta.data.fechas;

        this.numPagina = numPagina;

      }
      ,
      onEditarAsistenciaFecha(fecha) {

        const f = this.form;

        f.fechaOld.isEdit = false;
        f.isEnProceso = false;
        f.fechaOld = fecha;

        f.isAddAsistencia = false;

        const fechaDMY = f.fechaOld.fecha;

        this.alumnos.forEach(a => {

          a.fechas.forEach(f => {
            if (f.fecha === fechaDMY) {
              f.valorEdit = f.valor;
            }
          });

        });


        /* hacer una copia de los valores edit */
        f.fechaDMYEdit = fecha.fecha;
        fecha.isEdit = true;

      },
      onCancelAsistenciaFecha(fecha) {
        fecha.isEdit = false;
      },
      async onSaveAsistenciaFecha(fecha) {


        const f = this.form;
        if (f.isEnProceso) {
          return;
        }

        f.isEnProceso = true;

        const fechaDMY = f.fechaOld.fecha;

        let dataUpdate = [];

        this.alumnos.forEach(a => {

          a.fechas.forEach(f => {

            if (f.fecha === fechaDMY) {
              dataUpdate.push({
                id: a.id,
                valor: parseInt(f.valor)
              })

            }
          });
        });

        let respuesta = await dataService.updateAsistencia(this.idGrupo, fechaDMY, dataUpdate);

        if (!respuesta.success) {
          libToast.alert(respuesta.msg);
          f.isEnProceso = false;
          return;
        }


        libToast.success("Registro actualizado");
        /*actualizar libro*/
        this.alumnos.forEach(a => {
          a.fechas.forEach(f => {
            if (f.fecha === fechaDMY) {
              f.valor = f.valorEdit;
            }

          });
        });

        f.isEnProceso = false;
        f.fechaOld.isEdit = false;

      },
      onAddFecha() {

        const f = this.form;

        f.fechaOld.isEdit = false;

        $("#modalAddAsistencia").modal()
      },
      onSetFechaNew() {
        const f = this.form;

        f.fechaOld = {};

        $("#modalAddAsistencia").modal('hide');
        f.isAddAsistencia = true;
      },
      onCancelNewAsistencia() {
        const f = this.form;

        f.isAddAsistencia = false;
      },
      async onSaveNewAsistencia() {

        /*Al gaurdar una nueva asistencia debemos de insertar el objecto fecha tambien
         y en cada alkmno el registro de fecha*/

        const f = this.form;
        if (f.isEnProceso) {
          return;
        }

        f.isEnProceso = true;

        const fechaDMY = this.getFechaNew;

        let dataUpdate = [];

        this.alumnos.forEach(a => {

          dataUpdate.push({
            id: a.id,
            valor: parseInt(a.valorNewAsistencia)
          })

        });

        let respuesta = await dataService.updateAsistencia(this.idGrupo, fechaDMY, dataUpdate);

        if (!respuesta.success) {
          libToast.alert(respuesta.msg);
          f.isEnProceso = false;
          return;
        }


        libToast.success("Registro Agregado");

        /*actualizar libro*/

        const diaSemanaAbb = listaDiasAbb[f.fechaNew.getDay()];

        this.fechas.push({
          fecha: fechaDMY,
          diaSemana: diaSemanaAbb,
          dia: f.fechaNew.getDate(),
          mes: listaMes[f.fechaNew.getMonth()],
          y: f.fechaNew.getFullYear(),
          isEdit: false
        });

        let indexAlumno = 0;
        this.alumnos.forEach(a => {

          a.fechas.push({
            fecha: fechaDMY,
            valor: dataUpdate[indexAlumno].valor
          });

          indexAlumno++;

          a.valorNewAsistencia = '.'
        });


        f.isEnProceso = false;
        f.fechaOld = this.fechas[this.fechas.length - 1];
        f.isAddAsistencia = false;


      }


    },
    async mounted() {

      //la pagina se carga con el watcher
      //this.solicitarPagina(1);

    }
  }
</script>

<style scoped>
  .tableAsistencia tr th, .tableAsistencia tr td {
    padding: 2px;
    width: 60px;
    text-align: center;

  }

  .tableAsistencia tr th.thSelected, .tableAsistencia tr td.tdSelected {
    background-color: lightgoldenrodyellow;
  }

  .tableAsistencia tr th.tdindex, .tableAsistencia tr td.tdindex {
    width: 30px;
  }

  th.tdEdit {
    width: 200px;
  }

  span.tdFalta {
    color: red;
    font-weight: bold
  }
</style>
