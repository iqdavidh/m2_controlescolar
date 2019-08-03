<template>
  <div>

    <table class="table table-condensed table-striped">
      <thead>
      <tr>
        <th style="width: 40px">#</th>
        <th>Nombre</th>
        <th>Apellidos</th>
        <th>Comentarios</th>
        <th></th>
        <th></th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      <tr v-show="formNew.isShow"
          style="background-color: lightgoldenrodyellow">
        <td>New</td>
        <td>
          <div class="form-group" :class="{'error':form.dataError.nombre}">
            <input v-model="form.data.nombre"
                   ref="inputnombreNew"
                   class="form-control"
                   required
                   title="Nombre"/>
          </div>
        </td>

        <td :class="{'error':form.dataError.apellidos}">
          <div class="form-group">
            <input v-model="form.data.apellidos" class="form-control"
                   required title="Apellidos"/>
          </div>
        </td>

        <td>
          <div class="form-group">
            <textarea v-model="form.data.comentarios"
                      class="form-control" required title="Comentarios"></textarea>
          </div>
        </td>

        <td></td>
        <td>
                <span class="btn btn-sm btn-primary" title="Guardar"
                      @click="exeSaveAdd">
                  <i class="fa fa-upload"></i>
                </span>
        </td>

        <td>
               <span class="btn btn-sm btn-dark" title="Cancelar"
                     @click="cancelSaveAdd">
                  <i class="fa fa-times"></i>
                </span>
        </td>
      </tr>

      <tr v-for="(alumno,index) in alumnos" :key="alumno.id">
        <td>{{index+1}}</td>
        <td>
          <div v-if="!alumno.isEdit">
            {{alumno.nombre}}
          </div>
          <div v-if="alumno.isEdit">
            <div class="form-group" :class="{'error':form.dataError.nombre}">
              <input v-model="form.data.nombre"
                     class="form-control"
                     required title="Nombre"/>
            </div>
          </div>

        </td>
        <td>
          <div v-if="!alumno.isEdit">
            {{alumno.apellidos}}
          </div>
          <div v-if="alumno.isEdit">
            <div class="form-group" :class="{'error':form.dataError.apellidos}">
              <input v-model="form.data.apellidos" class="form-control"
                     required title="Apellidos"/>
            </div>
          </div>
        </td>
        <td>
          <div v-if="!alumno.isEdit">
            {{alumno.comentarios}}
          </div>
          <div v-if="alumno.isEdit">
            <div class="form-group">
              <textarea v-model="form.data.comentarios"
                        class="form-control" required title="Comentarios"></textarea>
            </div>
          </div>

        </td>
        <td>
          <div v-if="alumno.isEdit">
                <span class="btn btn-sm btn-primary"
                      title="Guardar cambios"
                      @click="exeSaveEdit(alumno)"
                >
                  <i class="fa fa-upload"></i>
                </span>
          </div>
        </td>
        <td>
          <div v-if="!alumno.isEdit">
                <span class="btn btn-sm btn-primary"
                      @click="onShowEdit(alumno)"
                >
                  <i class="fa fa-edit"></i>
                </span>
          </div>
          <div v-if="alumno.isEdit">
                <span class="btn btn-sm btn-dark"
                      @click="onCancelEdit(alumno)"
                >
                  <i class="fa fa-times"></i>
                </span>
          </div>

        </td>
        <td>
          <div v-if="!alumno.isEdit">
                <span class="btn btn-sm btn-danger"
                      title="Eliominar Registro"
                      @click="onShowFormDelete(alumno)">
                  <i class="fa fa-trash"></i>
                </span>
          </div>
        </td>
      </tr>
      </tbody>

    </table>


  </div>
</template>

<script>
  import libValidacion from "../lib/libValidacion";
  import libToast from "../lib/libToast";
  import dataService from "../services/dataService";

  export default {
    name: 'GListaAlumnos',
    props: {
      alumnos: Array
    },
    data() {
      return {
        listaCampos: ['nombre', 'apellidos'],
        isEdit: false,
        formNew: {
          isShow: false,
        },
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
      exeSaveAdd() {

      },
      cancelSaveAdd() {

      },
      onShowEdit(alumno) {


      },
      onShowFormDelete(alumno){

      },
      exeSaveEdit(alumno) {

      },
      onCancelEdit(alumno) {

      },
      getIsValid() {

        // let isValid = libValidacion.paramNotNull(this.form.data, listaRequerido, this.form.dataError);
        //
        // return isValid;


      },
      async exe() {

        // const f = this.form;
        //
        // if (f.isEnProceso) {
        //   return;
        // }
        //
        // f.isEnProceso = true;
        //
        // let isValid = this.getIsValid();
        //
        // if (!isValid) {
        //   libToast.alert('Datos incorrectos');
        //   f.isEnProceso = true;
        //   return;
        // }
        //
        //
        // let dataUpdate = {};
        // this.listaCampos.forEach(c => {
        //   dataUpdate[c] = f.data[c];
        // });
        //
        // let idGrupo = this.grupo._id;
        // let isUpdate = idGrupo !== undefined;
        //
        // let respuesta;
        //
        // if (isUpdate) {
        //   respuesta = await dataService.updateGrupo(idGrupo, dataUpdate);
        // } else {
        //   respuesta = await dataService.insertGrupo(idGrupo, dataUpdate);
        // }
        //
        //
        // if (respuesta.success) {
        //
        //   if (!isUpdate) {
        //     dataUpdate._id = respuesta.data._id;
        //   }
        //
        //   this.$emit("onUpdated", isUpdate, dataUpdate);
        //
        //   libToast.success(isUpdate ? "Datos actualizados" : "Grupo agregado");
        //   this.isEdit=false;
        //
        // } else {
        //   libToast.alert(respuesta.msg());
        // }
        //
        // f.isEnProceso = false;

      },
      cancel() {
        this.isEdit = false;
      },
    },
    beforeMount() {

      this.listaCampos.forEach(c => {
        this.form.data[c] = null;
        this.form.dataError[c] = false;
      });
    },
    mounted() {


    }

  }
</script>


<style scoped>


</style>
