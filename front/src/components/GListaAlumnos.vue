<template>
  <div>


    <div style="display: flex; margin-bottom: 5px">
      <div>
        <span class="btn btn-primary btn-sm" title="Agregar Alumno"
              @click="onShowFormAdd">
        <i class="fa fa-plus"></i>
      </span>
      </div>
      <div style="margin-left: 20px; padding-top: 4px">
        <i class="fa fa-search"></i>
      </div>
      <div style="padding-left:10px; flex-grow: 1;">
        <input type="text" class="form-control form-control-sm"
               v-model="filtroLista"
               placeholder="Buscar..."/>
      </div>
      <div style="margin-left: 10px; ">

        <div class="btn-group btn-group-sm">
          <button type="button" class="btn btn-secondary  dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
                  aria-expanded="false">
            <i class="fa fa-bolt"></i>
          </button>
          <div class="dropdown-menu dropdown-menu-right">
            <button class="dropdown-item" type="button">
              <i class="fa fa-file-excel-o"></i> Exportar a Excel
            </button>
          </div>
        </div>


      </div>
    </div>

    <div ref="panTablaAlumnos">
      <table class="table table-condensed table-striped">
        <thead>
        <tr>
          <th style="width: 30px">#</th>
          <th style="width: 200px">Nombre</th>
          <th style="width: 200px">Apellidos</th>
          <th>Comentarios</th>
          <th style="width: 40px"></th>
          <th style="width: 40px"></th>
          <th style="width: 40px"></th>

        </tr>
        </thead>
        <tbody>

        <tr v-if="formNew.isShow"
            style="background-color: lightgoldenrodyellow">
          <td>New</td>
          <td>
            <div class="form-group" :class="{'error':form.dataError.nombre}">
              <input v-model="form.data.nombre"
                     ref="inputnombreNew"
                     class="form-control form-control-sm"
                     required
                     title="Nombre"/>
            </div>
          </td>

          <td :class="{'error':form.dataError.apellidos}">
            <div class="form-group">
              <input v-model="form.data.apellidos" class="form-control form-control-sm"
                     required title="Apellidos"/>
            </div>
          </td>

          <td>
            <div class="form-group">
            <textarea v-model="form.data.comentarios"
                      class="form-control form-control-sm"
                      required title="Comentarios"></textarea>
            </div>
          </td>

          <td></td>
          <td>
                <span class="btn btn-sm btn-primary " title="Guardar"
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

        <tr v-for="(alumno,index) in getListaConFiltro" :key="alumno.id">
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
                <span class="btn btn-sm btn-primary btnShowOnHover"
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
                <span class="btn btn-sm btn-danger btnShowOnHover"
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


    <!-- Modal -->
    <div class="modal fade" id="modalDelete" tabindex="-1" role="dialog"
         aria-hidden="true">
      <div class="modal-dialog bounceIn animated  " role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title"><i class="fa fa-trash"></i> Eliminar Alumno</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <small>Name:</small>
            <h4>{{formDelete.alumno.nombre}} {{formDelete.alumno.apellidos}}</h4>
            <small>ID</small>
            <p>{{formDelete.alumno.id}}</p>
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
    name: 'GListaAlumnos',
    props: {
      alumnos: {
        type: Array,
        default: () => []
      },
      idGrupo:{
        type: String,
        default: () =>''
      }
    },
    data() {
      return {
        listaCampos: ['nombre', 'apellidos'],
        listaCamposNoRequeridos: ['comentarios'],
        filtroLista: '',
        isEdit: false,
        form: {
          alumnoOld: null,
          data: {},
          dataError: {},
          isEnProceso: false,
          isShow: false
        },
        formNew: {
          isShow: false,
        },
        formDelete: {
          alumno: {},
          isEnProceso: false,
          isShow: false
        },
      }
    },
    computed: {
      getListaConFiltro() {

        let lista = [];

        let texto = this.filtroLista.toString().trim().toLowerCase();

        let isFiltro = texto !== '';


        if (isFiltro) {

          lista = this.alumnos
              .filter(a => {

                let index = a.nombre.toLowerCase().indexOf(texto);

                let isCoincidencia = (index > -1);

                if (!isCoincidencia) {

                  index = a.apellidos.toLowerCase().indexOf(texto);

                  isCoincidencia = index > -1;
                }

                return isCoincidencia;

              });

        } else {
          lista = this.alumnos
              .filter(a => {
                return true;
              });

        }


        return lista;

      }

    },
    methods: {
      onShowFormAdd() {

        const f = this.form;

        if (this.alumnoOld) {
          this.alumnoOld.isEdit = false;
        }

        this.listaCampos.forEach(c => {
          f.data[c] = '';
          f.dataError[c] = false;
        });

        f.data.comentarios = '';

        this.formNew.isShow = true;

      },
      async exeSaveAdd() {

        const f = this.form;

        if (f.isEnProceso) {
          return;
        }

        f.isEnProceso = true;

        let isValid = this.getIsValid();

        if (!isValid) {
          libToast.alert("Datos incorrectos");
          f.isEnProceso = false;
          return;
        }


        let dataInsert = {};
        this.listaCampos.forEach(c => {
          dataInsert[c] = f.data[c];
        });

        let respuesta = await dataService.insertAlumno(this.idGrupo, dataInsert);

        if (respuesta.success) {
          dataInsert.id=respuesta.data.id;
          this.$emit("onCrud", "c", dataInsert);
          libToast.success("Registro agregado");
          this.formNew.isShow=false;

        } else {
          libToast.alert(respuesta.data);
        }

        f.isEnProceso = false;


      },
      cancelSaveAdd() {

      },
      onShowEdit(alumno) {


      },
      onShowFormDelete(alumno) {

        this.formDelete.alumno = alumno;
        $("#modalDelete").modal();

      },
      exeSaveEdit(alumno) {

      },
      onCancelEdit(alumno) {

      },
      getIsValid() {

        let listaRequerido = ['nombre', 'apellidos'];
        let isValid = libValidacion.paramNotNull(this.form.data, listaRequerido, this.form.dataError);

        return isValid;

      },
      onShowCopiarExcel() {

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

      async exeDelete() {

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


  /*  tr td .btnShowOnHover {*/
  /*    display: none;*/
  /*  }*/

  /*  tr:hover td .btnShowOnHover {*/
  /*    display: block;*/
  /*  }*/
</style>
