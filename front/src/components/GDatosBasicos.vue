<template>
  <div>

    <div class="row">
      <div class="col-xs-12 col-md-4">

        <div class="dataInfo" :class="{'error':form.dataError.nombre}">
          <div class="lab">Nombre del Grupo</div>
          <div class="valor" v-show="!isEdit">{{grupo.nombre}}</div>

          <div class="valoredit " v-show="isEdit">
            <div class="form-group">
              <input v-model="form.data.nombre" class="form-control form-control-sm" required title="Nombre"/>
            </div>
          </div>
        </div>
      </div>

      <div class="col-xs-12 col-md-4">

        <div class="dataInfo" :class="{'error':form.dataError.materia}">
          <div class="lab">Materia</div>
          <div class="valor" v-show="!isEdit">{{grupo.materia}}</div>
          <div class="valoredit " v-show="isEdit">
            <div class="form-group">
              <input v-model="form.data.materia" class="form-control form-control-sm" required title="Materia"/>
            </div>
          </div>
        </div>

      </div>

      <div class="col-xs-12 col-md-4">
        <div class="dataInfo" :class="{'error':form.dataError.escuela}">
          <div class="lab">Escuela</div>
          <div class="valor" v-show="!isEdit">{{grupo.escuela}}</div>
          <div class="valoredit " v-show="isEdit">
            <div class="form-group">
              <input v-model="form.data.escuela" class="form-control form-control-sm" required title="Escuela"/>
            </div>
          </div>
        </div>
      </div>

      <div class="col-xs-12 col-md-4">

        <div class="dataInfo" :class="{'error':form.dataError.ciclo}">
          <div class="lab">Ciclo Escolar</div>
          <div class="valor" v-show="!isEdit ">{{grupo.ciclo}}</div>
          <div class="valoredit " v-show="isEdit">
            <div class="form-group">
              <input v-model="form.data.ciclo" class="form-control form-control-sm"
                     required title="Año inicial" style="width: 190px; display: inline-block"/>
            </div>
          </div>
        </div>

      </div>

      <div class="col-xs-12 col-md-8">

        <div class="dataInfo">
          <div class="lab">Comentario</div>
          <div class="valor" v-show="!isEdit">{{grupo.comentarios}}</div>
          <div class="valoredit " v-show="isEdit">
            <div class="form-group">
          <textarea v-model="form.data.comentarios"
                    class="form-control form-control-sm"
                    required title="Comentarios"></textarea>
            </div>
          </div>
        </div>

      </div>
    </div>


    <div class="panCmd"
         style="display: flex"
         v-show="!isEdit"

    >

      <div style="flex-grow: 1; text-align: left">
          <span class="btn btn-danger btn-sm" title="Eliminar"
                @click="onShowDelete">
          <i class="fa fa-trash"></i>
        </span>
      </div>
      <div style="flex-grow: 1; text-align: right">
        <span class="btn btn-secondary btn-sm" title="Editar"
              @click="onShowEdit">
          <i class="fa fa-edit"></i>
        </span>
      </div>

    </div>


    <div class="panCmd"
         v-show="isEdit"

    >
         <span class="btn btn-primary btn-sm" title="Guardar Datos"
               @click="exe">
          <i class="fa fa-upload"></i>
          Actualizar
        </span>

      <span class="btn btn-dark  btn-sm" title="Edit" style="margin-left: 5px"
            @click="cancel">
          Cancelar
        </span>
    </div>

    <hr>

    <!-- Modal -->
    <div class="modal fade" id="modalDeleteGrupo" tabindex="-1" role="dialog"
         aria-hidden="true">
      <div class="modal-dialog bounceIn animated  " role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title"><i class="fa fa-trash"></i> Eliminar Grupo</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>Confirmar Eliminar</p>

          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-danger"
                    @click="exeDelete"
            >
              <i class="fa fa-trash"></i> Eliminar
            </button>
            <button type="button" class="btn btn-secondary"
                    data-dismiss="modal">Cancelar
            </button>

          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
  import libValidacion from "../lib/libValidacion";
  import libToast from "../lib/libToast";
  import dataService from "../services/dataService";

  export default {
    name: 'GDatosBasicos',
    props: {
      grupo: Object
    },
    data() {
      return {
        listaCampos: ['nombre', 'materia', 'escuela', 'ciclo', 'comentarios'],
        isEdit: false,
        form: {
          data: {},
          dataError: {},
          isEnProceso: false,
          isShow: false
        },
        formDelete: {
          isEnProceso: false
        }
      }
    },
    computed: {},
    methods: {
      onShowDelete() {
        $("#modalDeleteGrupo").modal();
        this.formDelete.isEnProceso = false;
      },
      async exeDelete(){
        let f=this.formDelete;
        if(f.isEnProceso){
          return;
        }

        f.isEnProceso=true;

        let respuesta = await dataService.deleteGrupo(this.grupo._id);

        if (!respuesta.success) {
          libToast.alert(respuesta.msg());
          return ;
        }

        libToast.success("Grupo Eliminado");
        $("#modalDeleteGrupo").modal('hide');

        /*redireccionar pra ver el grupo*/
        this.$router.push('/grupos');
      },
      onShowEdit() {

        this.listaCampos
            .forEach(c => {
              this.form.data[c] = this.grupo[c];
            });

        this.isEdit = true;
      },
      getIsValid() {
        let listaRequerido = ['nombre', 'materia', 'escuela', 'ciclo'];
        let isValid = libValidacion.paramNotNull(this.form.data, listaRequerido, this.form.dataError);

        return isValid;


      },
      async exe() {

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


        let dataUpdate = {};
        this.listaCampos.forEach(c => {
          dataUpdate[c] = f.data[c];
        });

        let idGrupo = this.grupo._id;
        let isUpdate = idGrupo !== undefined;

        let respuesta;

        if (isUpdate) {
          respuesta = await dataService.updateGrupo(idGrupo, dataUpdate);
        } else {
          respuesta = await dataService.insertGrupo(idGrupo, dataUpdate);
        }

        if (!respuesta.success) {
          libToast.alert(respuesta.msg());
          return;
        }
        libToast.success(isUpdate ? "Datos actualizados" : "Grupo agregado");


        if (!isUpdate) {
          dataUpdate._id = respuesta.data._id;
        }

        this.$emit("onUpdated", isUpdate, dataUpdate);

        this.isEdit = false;

        f.isEnProceso = false;

      },
      cancel() {
        this.isEdit = false;
      },
    },
    beforeMount() {

      // this.listaCampos.forEach(c => {
      //   this.form.data[c] = null;
      //   this.form.dataError[c] = false;
      // });
    },
    mounted() {


    }

  }
</script>


<style scoped>

  .dataInfo {
    display: flex;

  }

  .lab {
    text-align: right;
    padding-top: 6px;
    width: 150px;
    color: #6C757D;
    margin-right: 6px;
  }

  .valor {
    text-align: left;
    font-weight: bold;
    padding-top: 6px;
    min-height: 30px;
  }


  .panCmd {
    margin-top: 20px;
    text-align: center;
  }

  .valoredit {
    flex-grow: 1;
  }
</style>
