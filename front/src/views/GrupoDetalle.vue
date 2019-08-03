<template>
  <div>

    <div class="row mt-2 mb-2">
      <div class="col-md-12">
        <h2>
          Grupo <span class="badge badge-primary">{{grupo.materia}}</span>
          <span class="badge badge-secondary" style="margin-left:10px"> {{grupo.nombre}}</span>
        </h2>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">


        <ul class="nav nav-tabs" role="tablist">
          <li class="nav-item">
            <a class="nav-link active" href="#grupo" role="tab" data-toggle="tab" id="homeTab">Grupo</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#asistencia" role="tab" data-toggle="tab">Asistencia</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#actividades" role="tab" data-toggle="tab">Actividades</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#reporte" role="tab" data-toggle="tab">Reporte</a>
          </li>
        </ul>

        <!-- Tab panes -->
        <div class="tab-content">
          <div role="tabpanel" class="tab-pane active" id="grupo">

            <h5><i class="fa fa-home"></i> DATOS GENERALES</h5>
            <hr>
            <GDatosBasicos :grupo="grupo" :key="grupo._id" @onUpdated="onUpdateDatosBasicos"/>

            <h5><i class="fa fa-users"></i> {{getNumAlumnos}} ALUMNOS</h5>
            <hr>
            <GListaAlumnos :alumnos="grupo.alumnos" @onUpdated="onUpdateAlumnos"/>



          </div>

          <div role="tabpanel" class="tab-pane fade" id="asistencia">ccc</div>
          <div role="tabpanel" class="tab-pane fade" id="actividades">ccc</div>
          <div role="tabpanel" class="tab-pane fade" id="reporte">ccc</div>
        </div>

      </div>
    </div>


    <div v-if="isDebug">
      {{grupo}}
    </div>

  </div>
</template>

<script>

  import GDatosBasicos from '@/components/GDatosBasicos.vue';
  import GListaAlumnos from '@/components/GListaAlumnos.vue';
  import Vue from 'vue';

  import libConfig from "../lib/libConfig";
  import dataService from "../services/dataService";
  import libToast from "../lib/libToast";

  export default {
    name: 'grupo',
    props: ['id'],
    data() {
      return {
        grupo: {},
        componentKey: 0,
        isDebug: libConfig.isDebug
      };
    },
    components: {
      GDatosBasicos, GListaAlumnos
    },
    methods: {

      onUpdateDatosBasicos(isUpdate, dataUpdate) {
        Object.keys(dataUpdate).forEach(k => {
          this.grupo[k] = dataUpdate[k];
        });

        if (!isUpdate) {
          this.grupo.alumnos = [];
        }
      },

      onUpdateAlumnos(isUpdate, listaUpdate) {

      }
    },
    computed: {
      getNumAlumnos() {
        return this.grupo.alumnos ? this.grupo.alumnos.length : 0;
      }
    },
    async beforeMount() {

      const response = await dataService.getGrupo(this.id);

      if (!response.success) {
        libToast.alert(response.msg);
        return;
      }

      this.grupo = response.data.grupo;

      this.grupo.alumnos.forEach(a => {
        Vue.set(a, 'isEdit', false);
      });

    }
  }
</script>

<style scoped>
  .tab-pane {
    padding-top: 20px;
  }
</style>
