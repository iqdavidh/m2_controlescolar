<template>
  <div>


    <div class="row" style="margin-top: 20px">
      <div class="col-md-4 col-xs-12">

        <div class="card">
          <router-link to="/grupos">
            <img class="card-img-top" src="http://via.placeholder.com/640x360" alt="Card image cap">
          </router-link>
          <div class="card-body">
            <h5 class="card-title">Grupos</h5>
            <p class="card-text">Administra los grupos, con información del curso y la lista de alumnos.</p>

            <router-link to="/grupos">
              <a href="#" class="btn btn-primary"><i class="fa fa-arrow-circle-right "></i></a>
            </router-link>


          </div>
        </div>

      </div>


      <div class="col-md-4 col-xs-12">
        <div class="card">
          <router-link to="/asistencia">
            <img class="card-img-top" src="http://via.placeholder.com/640x360" alt="Card image cap">
          </router-link>
          <div class="card-body">
            <h5 class="card-title">Asistencia</h5>
            <p class="card-text">Administra la lista de asistencia. Indicando Presente,
              Falta, Retardo y Falta con Justificante de un grupo en una fecha seleccionada
            </p>
            <router-link to="/asistencia">
              <a href="#" class="btn btn-primary"><i class="fa fa-arrow-circle-right "></i></a>
            </router-link>
          </div>
        </div>
      </div>


      <div class="col-md-4 col-xs-12">
        <div class="card">
          <router-link to="/actividades">
            <img class="card-img-top" src="http://via.placeholder.com/640x360" alt="Card image cap">
          </router-link>
          <div class="card-body">
            <h5 class="card-title">Actividades</h5>
            <p class="card-text">Administra la las calificaciones de las tareas, examenes y otras actividades
              escolares.</p>
            <router-link to="/actividades">
              <a href="#" class="btn btn-primary"><i class="fa fa-arrow-circle-right "></i></a>
            </router-link>
          </div>
        </div>
      </div>

    </div>


  </div>
</template>

<script>
  // @ is an alias to /src
  import HelloWorld from '@/components/HelloWorld.vue'

  export default {
    name: 'home',
    components: {
      HelloWorld
    },
    data() {
      return {}
    },
    computed: {},
    methods: {},
    beforeMount() {

    },
    mounted() {

    }
  }
</script>
