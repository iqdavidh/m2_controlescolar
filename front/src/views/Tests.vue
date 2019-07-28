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
        ><strong>{{t.nombre}} <i class="fa fa-check" v-if="t.isSuccess"></i></strong> <br v-if="!t.isSuccess"> {{t.resultado}}
        </div>
      </div>

      <div class="col-md-6">

      </div>
    </div>

  </div>

</template>


<script>


  import dataLocal from "../services/dataLocal";
  import libTest from "../lib/libTest";
  import libConfig from "../lib/libConfig";

  let listaTest = [];


  /*dataLocal*/

  listaTest.push(libTest.FactoryTest("dataLocal.getIndexGrupos", async () => {

    let p = await dataLocal.getIndexGrupos();


    let listaError = [];

    libTest.Validar(listaError, p.success, "success no es true");
    libTest.Validar(listaError, p.msg === '', "msg no vacio");
    libTest.Validar(listaError, typeof p.data === 'object', "el data no es object");

    libTest.Validar(listaError, p.data.total>0, "El data no tiene total >0 ");
    libTest.Validar(listaError, p.data.items.length>0, "El data no tiene items ");
    libTest.Validar(listaError, typeof p.data.next === 'string', "El data no tiene next - puede ser vacio, solo se requiere type string ");

    /*ver el primer item delkdata*/


    let msg=  libTest.GetMsgErrorTotal(listaError);
    return msg;

  }));


  listaTest.push(libTest.FactoryTest("Dummy -Always success", () => {
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
    async mounted() {

      if (!libConfig.isDebug) {
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
