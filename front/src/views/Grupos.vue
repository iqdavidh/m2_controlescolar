<template>
  <div>

    <div class="row" style="margin-top: 10px; margin-bottom: 10px">
      <div class="col-md-12">
        <span class="btn btn-primary" title="Agregar Grupo"
              @click="onShowFormAdd">
          <i class="fa fa-plus"></i>
        </span>
        <span style="margin-left: 20px">{{listaGrupos.length}} Grupos Registrados</span>
      </div>
    </div>


    <div class="row rowGrupo">
      <div class="col-md-12">

        <div class="alert alert-info"
             v-for="g in listaGrupos"
             :key="g._id"
        >
          <h4 class="display-4">
            {{g.materia }}
            <span>Grupo {{g.nombre}}</span>
          </h4>


          <div class="" style="display: flex">

            <div>
              <i class="fa fa-building"></i> Escuela : {{g.escuela}}
            </div>
            <div>
              <i class="fa fa-calendar" style="margin-left: 20px"></i>
              Ciclo {{g.ciclo}}
            </div>
            <div style="flex-grow: 1; text-align: right">
              <router-link
                  class="btn btn-primary btn-md"
                  :to="{name:'grupo', params: {id:g._id}}"
              >Ver más
              </router-link>
            </div>

          </div>


        </div>


      </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="modalAddG" tabindex="-1" role="dialog"
         aria-hidden="true">
      <div class="modal-dialog bounceIn animated  " role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title"><i class="fa fa-plus"></i> Agregar Grupo</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">

            <div class="row">
              <div class="col-md-12">
                <label>Grupo (1a, 2b, etc)</label>
                <input class="form-control"
                       type="text"
                       v-model="form.dataNew.nombre"/>
              </div>
            </div>

            <div class="row">
              <div class="col-md-12">
                <label>Materia</label>
                <input class="form-control"
                       type="text"
                       v-model="form.dataNew.materia"/>
              </div>
            </div>

          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary"
                    @click="exeAdd"
            >
              <i class="fa fa-plus"></i> Agregar
            </button>
            <button type="button" class="btn btn-secondary"
                    data-dismiss="modal">Cancelar
            </button>
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
  import libValidacion from "../lib/libValidacion";


  export default {
    name: 'grupos',
    props: {},
    components: {},
    data() {
      return {
        listaGrupos: [],
        isDebug: libConfig.isDebug,
        form: {
          dataNew: {
            nombre: '',
            materia: ''
          },
          dataError: {
            nombre: false,
            materia: false
          },
          isEnProceso: false,
        }
      }
    },
    methods: {
      onShowFormAdd() {
        $("#modalAddG").modal();
      },
      getIsValid()  {
        let listaRequerido = ['nombre', 'materia'];
        let isValid = libValidacion.paramNotNull(this.form.dataNew, listaRequerido, this.form.dataError);

        return isValid;
      },
      async exeAdd() {

        const f = this.form;

        if (f.isEnProceso) {
          return;
        }

        f.isEnProceso = true;

        let isValid = this.getIsValid();

        if (!isValid) {
          libToast.alert('Datos incorrectos');
          f.isEnProceso = true;
          return;
        }

        const dataInsert = f.dataNew;
        let respuesta = await dataService.insertGrupo(dataInsert);

        if (!respuesta.success) {
          libToast.alert(respuesta.msg());
          return ;
        }

        libToast.success("Grupo agregado");

        $("#modalAddG").modal('hide');

        let idGrupo= respuesta.data._id;

        /*redireccionar a  la vista de */

        this.$router.push('/grupo/'+idGrupo)

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

  .rowGrupo h4 {
    font-size: 20px;
    font-weight: bold
  }
</style>
