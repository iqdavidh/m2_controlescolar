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


    <table class="table table-condensed table-striped">
      <thead>

      <tr>
        <th></th>
        <th></th>
        <th v-for="f in fechas">
          <span class="btn btn-secondary btn-sm"
                title="Editar Asistencia"
          >
            <i class="fa fa-edit"></i>
          </span>
        </th>
      </tr>

      <tr>
        <th style="width: 30px">#</th>
        <th>Alumno</th>
        <th v-for="f in fechas" :key="f.fecha">
          {{f.diaSemana}} {{ f.dia}} <br> {{f.mes}}
        </th>
      </tr>

      </thead>
      <tbody>


      <tr v-for="(alumno,index) in alumnos" :key="alumno.id">
        <td>{{index+1}}</td>
        <td>
          {{alumno.nombre}} {{alumno.apellidos}}
        </td>


        <td v-for="f in alumno.fechas" :key="f.fecha">
          {{f.valor}}
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
        totalPaginas: 0

      };
    },
    computed: {
      getAlumnosAsistencia() {

      }
    },
    methods: {
      async solicitarPagina(numPagina) {

        const respuesta = await dataService.paginaAsistencia(this.idGrupo, numPagina);

        if (!respuesta.success) {
          libToast.alert(respuesta.msg);
          return;
        }

        this.totalPaginas = respuesta.data.total;

        this.alumnos.splice(0, this.alumnos.length);
        respuesta.data.alumnos.forEach( a=>{
          this.alumnos.push(a);
        });


        this.fechas = respuesta.data.fechas;

        if (numPagina === 0) {
          this.numPagina = respuesta.data.total;
        } else {
          this.numPagina = numPagina;
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
