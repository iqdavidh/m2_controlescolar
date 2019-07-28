<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <h1 id="tituloSeccion">Test</h1>
      </div>
    </div>

    <div class="row">

      <div class="col-md-6">
        <div
            v-for="t in listaTest"
            v-if="t.isRunTest"
            v-bind:class="{'alert alert-success': t.isSuccess === true , 'alert alert-danger': t.isSuccess === false }"
        > <strong>{{t.nombre}}</strong> <br> {{t.resultado}}
        </div>
      </div>

      <div class="col-md-6">

      </div>
    </div>

  </div>

</template>


<script>


  import dataService from "../services/dataService";
  import libTest from "../lib/libTest";
  import libConfig from "../lib/libConfig";

  let listaTest = [];


  listaTest.push(libTest.FactoryTest("Dummy", "Always success - esto nunca se ve", () => {
    return '';
  }));


  export default {
    name: 'test',
    props: {},
    components: {},
    data() {
      return {
        listaTest
      }
    },
    methods: {},
    mounted() {

      if(!libConfig.isDebug){
        redirect('/')
      }
      /*Ejecutar todos los test*/
      listaTest.forEach(t => {
        t.run();
      });
    }
  }
</script>


<style scoped>

</style>
