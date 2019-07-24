<template>
  <div>


    <h2>Home</h2>
    <p>Descripción del proyecto - para que sirve que hace , imagenes, al final tiene link para ver la página de Login</p>
    <p>Al estar autenticado esta pagina no se ve</p>


    <HelloWorld msg="Ejemplo para uasr componente"/>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
