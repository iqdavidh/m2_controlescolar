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

        </ul>

        <!-- Tab panes -->
        <div class="tab-content">
          <div role="tabpanel" class="tab-pane active" id="grupo">

            <h5><i class="fa fa-home"></i> DATOS GENERALES</h5>
            <hr>
            <GDatosBasicos :grupo="grupo"
                           :key="grupo._id"
                           @onUpdated="onUpdateDatosBasicos"/>

            <h5><i class="fa fa-users"></i> {{getNumAlumnos}} ALUMNOS</h5>
            <hr>
            <GListaAlumnos :alumnos="grupo.alumnos"
                           :idGrupo="grupo._id"
                           @onCrud="onCrudAlumnos"/>

          </div>

          <div role="tabpanel" class="tab-pane fade" id="asistencia">
            <h5><i class="fa fa-list"></i> LIBRO DE ASISTENCIA</h5>
            <hr>

            <GAsistencia :idGrupo="grupo._id"/>

          </div>

          <div role="tabpanel" class="tab-pane fade" id="actividades">

            <h5><i class="fa fa-list"></i> LIBRO DE ACTIVIDADES</h5>
            <hr>
<!--            <GActividades :idGrupo="grupo._id"/>-->


          </div>

        </div>

      </div>
    </div>


    <div v-if="isDebug && false">
      {{grupo}}
    </div>

  </div>
</template>

<script>

  import GDatosBasicos from '@/components/GDatosBasicos.vue';
  import GListaAlumnos from '@/components/GListaAlumnos.vue';
  import GAsistencia from '@/components/GAsistencia.vue';
  import GActividades from '@/components/GActividades.vue';

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
      GDatosBasicos, GListaAlumnos, GAsistencia, GActividades
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
      ordenarLista() {

        this.grupo.alumnos.sort((a, b) => {

          if (a.apellidos === b.apellidos) {

            if (a.nombre === b.nombre) {
              return 0;
            }

            if (a.nombre > b.nombre) {
              return 1;
            } else {
              return -1;
            }

          }

          if (a.apellidos > b.apellidos) {
            return 1;
          } else {
            return -1;
          }

        });
      },
      onCrudAlumnos(tipoOperacion, data) {

        if (tipoOperacion === "c") {

          this.grupo.alumnos.push(data);

        } else if (tipoOperacion === "u") {

          const idAlumno = data.id;
          const alumno = this.grupo.alumnos.find(a => {
            return a.id === idAlumno;
          });

          Object.keys(data)
              .forEach(k => {
                if (data[k] !== alumno[k]) {
                  alumno[k] = data[k];
                }
              });

        } else if (tipoOperacion === "d") {
          const idAlumno = data.id;
          let index = this.grupo.alumnos.findIndex(a => {
            return a.id === idAlumno;
          });

          this.grupo.alumnos.splice(index, 1);

        } else {
          alert("error - tipo de operacion no reconocdio:" + tipoOperacion);
        }


        this.ordenarLista();

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

      const grupo = response.data;

      grupo.alumnos.forEach(a => {
        a.isEdit = false;
      });

      this.grupo = grupo;
      this.ordenarLista();

    }
  }
</script>

<style scoped>
  .tab-pane {
    padding-top: 20px;
  }
</style>
