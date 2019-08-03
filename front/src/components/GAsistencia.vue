<template>
  <div>


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
          {{alumno.nombre}}  {{alumno.apellidos}}
        </td>
      </tr>

      </tbody>
    </table>

  </div>
</template>

<script>
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

      };
    },
    computed: {

    },
    methods: {

    },
    mounted() {

    }
  }
</script>

<style scoped>

</style>
