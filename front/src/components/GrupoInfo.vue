<template>
  <div>


    <div class="dataInfo" :class="{'error':form.dataError.nombre}">
      <div class="lab">Nombre del Grupo</div>
      <div class="valor" v-show="!isEdit">{{grupo.nombre}}</div>

      <div  class="valoredit " v-show="isEdit">
        <div class="form-group" >
          <input v-model="form.data.nombre" class="form-control" required title="Nombre"/>
        </div>
      </div>
    </div>

    <div class="dataInfo" :class="{'error':form.dataError.materia}">
      <div class="lab">Materia</div>
      <div class="valor" v-show="!isEdit">{{grupo.materia}}</div>
      <div  class="valoredit " v-show="isEdit">
        <div class="form-group" >
          <input v-model="form.data.materia" class="form-control" required title="Materia"/>
        </div>
      </div>
    </div>


    <div class="dataInfo" :class="{'error':form.dataError.escuela}">
      <div class="lab">Escuela</div>
      <div class="valor" v-show="!isEdit">{{grupo.escuela}}</div>
      <div  class="valoredit " v-show="isEdit">
        <div class="form-group" >
          <input v-model="form.data.escuela" class="form-control" required title="Escuela"/>
        </div>
      </div>
    </div>

    <div class="dataInfo" :class="{'error':form.dataError.ciclo}">
      <div class="lab">Ciclo Escolar</div>
      <div class="valor" v-show="!isEdit ">{{getCicloEscolar}}</div>
      <div  class="valoredit " v-show="isEdit">
        <div class="form-group" >
          <input v-model="form.data.yini" class="form-control"
                 required title="Año inicial" style="width: 90px; display: inline-block"/> -
          <input v-model="form.data.yfin" class="form-control"
                 required title="Año Final" style="width: 90px; display: inline-block"/>

        </div>
      </div>
    </div>

    <div class="dataInfo">
      <div class="lab">Comentario</div>
      <div class="valor" v-show="!isEdit">{{grupo.comentarios}}</div>
      <div  class="valoredit " v-show="isEdit">
        <div class="form-group" >
          <textarea v-model="form.data.comentarios"
                    class="form-control"
                    required title="Comentarios"></textarea>
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
  export default {
    name: 'GrupoInfo',
    props: {
      grupo: Object
    },
    data() {
      return {
        listaCampos: ['nombre', 'materia', 'escuela', 'ycicloini', 'yciclofin', 'comentarios'],
        isEdit: false,
        form: {
          data: {},
          dataError: {},
          isEnProceso: false,
          isShow: false
        },
      }
    },
    computed: {
      getCicloEscolar() {
        const t = this.grupo.tipo_ciclo;

        if (t) {
          return t.ciclo;
        } else {
          return '';
        }
      }
    },
    methods: {
      onShowEdit() {

        this.listaCampos
            .forEach(c => {
              this.form.data[c] = this.grupo[c];
            });

        this.isEdit = true;
      },
      exe() {

      },
      cancel() {
        this.isEdit = false;
      },
    },
    beforeMount(){
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

  .valoredit{
    flex-grow: 1;
  }
</style>
