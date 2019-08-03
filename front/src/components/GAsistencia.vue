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
              v-show="pagina.totalPaginas>0 && pagina.num>1"
          >
            <a class="page-link" href="#">Previous</a>
          </li>

          <li class="page-item"
              :class="{'active':pagina.num===num}"
              v-for="num in pagina.totalPaginas" :key="num"
          >
            <a class="page-link"
               href="#">{{num}}</a>
          </li>

          <li class="page-item"
              v-show="pagina.totalPaginas>0 && pagina.num<pagina.totalPaginas"
          ><a class="page-link" href="#">Next</a></li>
        </ul>
      </nav>

    </div>


    <table class="table table-condensed table-striped">
      <thead>
      <tr>
        <th style="width: 30px">#</th>
        <th>Alumno</th>
      </tr>
      </thead>
      <tbody>


      <tr v-for="(alumno,index) in alumnos" :key="alumno.id">
        <td>{{index+1}}</td>
        <td>
          {{alumno.nombre}} {{alumno.apellidos}}
        </td>
      </tr>

      </tbody>
    </table>

  </div>
</template>

<script>
  import dataService from "../services/dataLocal";
  import libToast from "../lib/libToast";

  export default {
    name: 'GAsistencia',
    props: {
      alumnos: {
        type: Array,
        default: () => []
      },
      idGrupo: {
        type: String,
        default: () => ''
      }
    },
    data() {

      return {
        pagina : {
          fechas:[],
          alumnos:[],
          num:0,
          totalPaginas:0
        }
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

        console.log(respuesta);

        this.pagina.totalPaginas = respuesta.data.total;
        this.pagina.alumnos = respuesta.data.alumnos;
        this.pagina.fechas = respuesta.data.fechas;

        if (numPagina === 0) {
          this.pagina.num = respuesta.data.total;
        } else {
          this.pagina.num = numPagina;
        }


      }

    },
    async mounted() {
      /*la pagina 0 nos va a devolver la ultima pagina*/
      this.solicitarPagina(0);

    }
  }
</script>

<style scoped>

</style>
