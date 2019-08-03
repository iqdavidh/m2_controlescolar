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
         v-show="!isEdit"
    >

        <span class="btn btn-secondary btn-sm" title="Editar"
              @click="onShowEdit">
          <i class="fa fa-edit"></i>
        </span>
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
      }
    },
    computed: {},
    methods: {
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


        if (respuesta.success) {

          if (!isUpdate) {
            dataUpdate._id = respuesta.data._id;
          }

          this.$emit("onUpdated", isUpdate, dataUpdate);

          libToast.success(isUpdate ? "Datos actualizados" : "Grupo agregado");
          this.isEdit=false;

        } else {
          libToast.alert(respuesta.msg());
        }

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
