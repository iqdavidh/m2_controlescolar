<template>
  <div>

    <div style="display: flex">


      <div style="margin-right: 50px">

         <span class="btn btn-primary btn-sm" title="Agregar Actividad"
               @click="onAddActividad"
         >
           <i class="fa fa-plus"></i>
         </span>

      </div>

      <nav aria-label="Page navigation "
           style="flex-grow: 1">
        <ul class="pagination pagination-sm">

          <li class="page-item"
              :class="{'active':numPagina===num}"
              v-for="num in totalPaginas" :key="num"
          >
            <a class="page-link"
               @click="solicitarPagina(num)"
               href="#">{{num}}</a>
          </li>


        </ul>
      </nav>

    </div>



    <table class="table table-condensed table-striped tableActividad">
      <thead>


      <tr>
        <th class="tdindex"></th>
        <th class="text-right"></th>



        <th v-for="act in actividades" :key="act._id"
            :class="{'thSelected':act._id===form.actOld._id
            ,'thEdit':act._id===form.actOld._id && form.actOld.isEdit
            }"
        >
          {{act.fechaAbb}}
        </th>
      </tr>

      <tr>
        <th class="tdindex">#</th>
        <th class="text-right">Alumno</th>



        <th v-for="act in actividades" :key="act._id"
            :class="{'thSelected':act._id===form.actOld._id
            ,'thEdit':act._id===form.actOld._id && form.actOld.isEdit
            }"
        >
          {{act.titulo}}
        </th>
      </tr>

      </thead>
      <tbody>


      <tr v-for="(alumno,index) in alumnos" :key="alumno.id">
        <td class="tdindex">{{index+1}}</td>
        <td class="text-right">
          {{alumno.apellidos}} {{alumno.nombre}}
        </td>



        <td v-for="act in alumno.act"
            :key="act.fecha"
            :class="{'tdSelected':act._id === form.actOld._id}"
        >

          <div v-if=" !(act._id === form.actOld._id && form.actOld.isEdit)"
               :title="act.titulo"
          >
            <span v-show="act.calificacion===null">NA</span>
            <span v-show="act.calificacion!==null">{{act.calificacion}}</span>

          </div>

          <div v-if="act._id === form.actOld._id && form.actOld.isEdit">
            <select class="form-control form-control-sm" v-model="act.calificacion">
              <option value="num" v-for="num in 10">{{num}}}</option>
            </select>
          </div>

        </td>


      </tr>

      </tbody>
      <tfoot>
      <tr>
        <th class="tdindex"></th>
        <th></th>
        <th v-show="form.isAddActividad"></th>
        <th v-for="f in fechas">
          <span class="btn btn-danger btn-sm"
                title="Eliminar Actividad"
          >
            <i class="fa fa-trash"></i>
          </span>
        </th>
      </tr>

      </tfoot>
    </table>


    <div v-if="isDebug && false">
      <div class="row">
        <div class="col-md-6">
          {{form}}
        </div>
        <div class="col-md-6">
          {{actividades}}
        </div>
      </div>
    </div>


    <!-- Modal -->
    <div class="modal fade" id="modalAddAct" tabindex="-1" role="dialog"
         aria-hidden="true">
      <div class="modal-dialog bounceIn animated  " role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title"><i class="fa fa-trash"></i> Fecha del Registro de Actividad</h5>
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
    <div class="modal fade" id="modalDeleteActividad" tabindex="-1" role="dialog"
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
    name: 'GActividades',
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
        actividades: [],
        alumnos: [],
        numPagina: 1,
        totalPaginas: 0,
        totalRegistros:0,
        form: {
          actOld: {isEdit: false},
          isEnProceso: false,
          isAddAct: false,
          titulo:'',
          fechaNew: new Date()
        },
        isDebug: libConfig.isDebug

      };
    },
    computed: {

    },
    methods: {
      async solicitarPagina(numPagina) {

        const x = 0;

        if (this.idGrupo === '') {
          return;
        }

        const respuesta = await dataService.getActividadesPagina(this.idGrupo, numPagina);

        if (!respuesta.success) {
          libToast.alert(respuesta.msg);
          return;
        }

        this.totalPaginas = respuesta.data.totalPaginas;
        this.totalRegistros=respuesta.data.total;

        this.alumnos = respuesta.data.alumnos;

        respuesta.data.actividades.forEach(act => {
          act.isEdit = false;
        });

        this.actividades = respuesta.data.actividades;

        this.numPagina = numPagina;

      }
      ,
      onEditarActividadFecha(fecha) {

        const f = this.form;

        f.actOld.isEdit = false;
        f.isEnProceso = false;
        f.actOld = fecha;

        f.isAddActividad = false;

        const fechaYMD = f.actOld.fecha;

        /*TODO no se porque esta esto --> */

        /* hacer una copia de los valores edit */
        f.fechaDMYEdit = fecha.fecha;
        fecha.isEdit = true;

      },
      onCancelActividadFecha(act) {
        act.isEdit = false;
      },
      async onSaveActfecha(fecha) {


        const f = this.form;
        if (f.isEnProceso) {
          return;
        }

        f.isEnProceso = true;

        const fechaDMY = f.actOld.fecha;

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

        let respuesta = await dataService.updateActividad(this.idGrupo, fechaDMY, dataUpdate);

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
        f.actOld.isEdit = false;

      },
      onAddActividad() {

        const f = this.form;

        f.actOld.isEdit = false;

        $("#modalAddAct").modal()
      },
      onSetFechaNew() {
        const f = this.form;

        f.actOld = {};

        $("#modalAddAct").modal('hide');
        f.isAddActividad = true;
      },
      onCancelNewActividad() {
        const f = this.form;

        f.isAddActividad = false;
      },
      async onSaveNewActividad() {

        /*Al gaurdar una nueva Actividad debemos de insertar el objecto fecha tambien
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
            valor: parseInt(a.valorNewActividad)
          })

        });

        let respuesta = await dataService.updateActividad(this.idGrupo, fechaDMY, dataUpdate);

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

          a.valorNewActividad = '.'
        });


        f.isEnProceso = false;
        f.actOld = this.fechas[this.fechas.length - 1];
        f.isAddActividad = false;


      }


    },
    async mounted() {

      //la pagina se carga con el watcher
      //this.solicitarPagina(1);

    }
  }
</script>

<style scoped>
  .tableActividad tr th, .tableActividad tr td {
    padding: 2px;
    width: 60px;
    text-align: center;

  }

  .tableActividad tr th.thSelected, .tableActividad tr td.tdSelected {
    background-color: lightgoldenrodyellow;
  }

  .tableActividad tr th.tdindex, .tableActividad tr td.tdindex {
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
