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
        ><strong>{{t.nombre}} <i class="fa fa-check" v-if="t.isSuccess"></i></strong> <br v-if="!t.isSuccess">
          {{t.resultado}}
        </div>
      </div>

      <div class="col-md-6">

      </div>
    </div>

  </div>

</template>


<script>

  import libTest from "../lib/libTest";
  import libConfig from "../lib/libConfig";

  import listaT_dataLocal from "../viewmethods/z_test/dataLocal_test";





  let listaT1 = [ ...listaT_dataLocal];


  listaT1.push(libTest.FactoryTest(":) Dummy - Always success", () => {
    return '';
  }));


  export default {
    name: 'test',
    props: {},
    components: {},
    data() {
      return {
        listaTest: listaT1
      }
    },
    methods: {},
    async mounted() {

      if (!libConfig.isDebug) {
        redirect('/')
      }
      /*Ejecutar todos los test*/
      listaT1.forEach(t => {
        t.run();
      });
    }
  }
</script>


<style scoped>

</style>
