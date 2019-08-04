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
                      @click="exeSave">
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
                        class="form-control" required
                        title="Comentarios"></textarea>
              </div>
            </div>

          </td>
          <td>
            <div v-if="alumno.isEdit">
                <span class="btn btn-sm btn-primary"
                      title="Guardar cambios"
                      @click="exeSave(alumno)"
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


    <div v-if="isDebug">
      {{form.data}}
    </div>
  </div>
</template>

<script>
  import libValidacion from "../lib/libValidacion";
  import libToast from "../lib/libToast";
  import dataService from "../services/dataService";
  import libConfig from "../lib/libConfig";

  export default {
    name: 'GListaAlumnos',
    props: {
      alumnos: {
        type: Array,
        default: () => []
      },
      idGrupo: {
        type: String,
        default: () => ''
      }
    },
    data() {
      return {
        listaCampos: ['nombre', 'apellidos'],
        listaCamposNoRequeridos: ['comentarios'],
        filtroLista: '',
        isEdit: false,
        alumnoOld: {isEdit: false, id: ''},
        form: {
          ope: '',
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
        isDebug: libConfig.isDebug
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

        this.alumnoOld.isEdit = false;
        this.alumnoOld.id = '';

        f.ope = "c";

        this.listaCampos.forEach(c => {
          f.data[c] = '';
          f.dataError[c] = false;
        });

        f.data.comentarios = '';

        this.formNew.isShow = true;

      },
      async exeSave() {

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

        let respuesta;

        let dataAlumno = { isEdit:false};
        this.listaCampos.forEach(c => {
          dataAlumno[c] = f.data[c];
        });

        if (f.ope === "c") {
          respuesta = await dataService.insertAlumno(this.idGrupo, dataAlumno);

        } else {
          respuesta = await dataService.updateAlumno(this.idGrupo, f.idAlumno, dataAlumno);
        }


        if (respuesta.success) {

          if (f.ope === "c") {
            dataAlumno.id = respuesta.data.id;
          } else {
            dataAlumno.id = f.idAlumno;
          }


          this.$emit("onCrud", f.ope, dataAlumno);

          libToast.success(f.ope === "c" ? "Registro agregado" : "Registro Actualizado");

          if (f.ope === "c") {
            this.formNew.isShow = false;
          } else {
            this.alumnoOld.isEdit = false;
          }


        } else {
          libToast.alert(respuesta.data);
        }

        f.isEnProceso = false;


      },
      cancelSaveAdd() {
        this.formNew.isShow = false;
      },
      onShowEdit(alumno) {

        const f = this.form;

        if (this.alumnoOld !== null) {
          this.alumnoOld.isEdit = false;
          this.alumnoOld = alumno;
        }


        this.listaCampos.forEach(c => {
          f.data[c] = alumno[c];
          f.dataError[c] = false;
        });
        this.listaCamposNoRequeridos.forEach(c => {
          f.data[c] = alumno[c];
        });

        f.ope = "u";
        f.idAlumno = alumno.id;

        alumno.isEdit = true;


      },
      onShowFormDelete(alumno) {

        this.formDelete.alumno = alumno;
        this.formDelete.isEnProceso = false;

        $("#modalDelete").modal();

      },
      onCancelEdit(alumno) {
        alumno.isEdit = false;
      },
      getIsValid() {

        let listaRequerido = ['nombre', 'apellidos'];
        let isValid = libValidacion.paramNotNull(this.form.data, listaRequerido, this.form.dataError);

        return isValid;

      },
      onShowCopiarExcel() {

      },
      async exeDelete() {

        let f = this.formDelete;

        if (f.isEnProceso) {
          return;
        }

        f.isEnProceso = true;

        let respuesta = await dataService.deleteAlumno(this.idGrupo, this.formDelete.alumno.id);

        if (respuesta.success) {
          libToast.success("Registro eliminado");
          this.$emit("onCrud", "d", this.formDelete.alumno);
          $("#modalDelete").modal('hide');
          f.isEnProceso=false;

        } else {
          libToast.alert(respuesta.msg);
        }

      },
      cancel() {
        this.isEdit = false;
      },
    },
    beforeMount() {

      this.listaCampos.forEach(c => {
        this.form.data[c] = '';
        this.form.dataError[c] = false;
      });

      this.listaCamposNoRequeridos.forEach(c => {
        this.form.data[c] = '';
      });

    },
    mounted() {


    }

  }
</script>


<style scoped>


</style>
