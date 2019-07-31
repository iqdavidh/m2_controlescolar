<template>
  <div>

    <div class="row" style="margin-top: 10px; margin-bottom: 10px">
      <div class="col-md-12">
        <span class="btn btn-primary" title="Agregar Grupo" @click="onShowFormAdd">
          <i class="fa fa-plus"></i>
        </span>
        <span style="margin-left: 20px">{{listaGrupos.length}} Grupos Registrados</span>
      </div>
    </div>


    <div class="row">
      <div class="col-md-12">

        <div class="alert alert-info"
             v-for="g in listaGrupos"
             :key="g._id"
        >
          <h4 class="display-4">{{g.materia }} <span>Grupo {{g.nombre}}</span></h4>
          <p class="lead"><i class="fa fa-building"></i> Escuela : {{g.escuela}}
            <i class="fa fa-calendar" style="margin-left: 20px"></i>
            Ciclo {{g.tipo_ciclo.ciclo}}
          </p>

          <div style="text-align: right">

            <router-link
                class="btn btn-primary btn-md"
                :to="{name:'grupo', params: {id:g._id}}"
                >Ver más</router-link>

          </div>

        </div>


      </div>
    </div>

    <div v-if="isDebug && false">
      {{listaGrupos}}
    </div>

  </div>

</template>


<script>

  import libConfig from "../lib/libConfig";
  import dataService from "../services/dataService";
  import libToast from "../lib/libToast";


  export default {
    name: 'grupos',
    props: {},
    components: {},
    data() {
      return {
        listaGrupos: [],
        isDebug: libConfig.isDebug
      }
    },
    methods: {
      onShowFormAdd() {

      }
    },
    async mounted() {
      const response = await dataService.getIndexGrupos();

      if (!response.success) {
        libToast.alert(response.msg);
      }

      this.listaGrupos = response.data.items;

    }


  }
</script>


<style scoped>

</style>
