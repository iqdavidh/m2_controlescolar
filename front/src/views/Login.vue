<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <h1  id="tituloSeccion">Login</h1>
      </div>
    </div>
    <form>
  <div class="form-group row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Escribe tu email</label>
    <div class="col-sm-10">
      <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="email@example.com">
    </div>
  </div>
  <div class="form-group row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword" placeholder="Password">
    </div>
  </div>
</form>
  </div>

</template>


<script>



  export default {
    name: 'login',
    props:{},
    components: { },
    data(){
      return {}
    },
    methods:{

    },mounted() {

    }


  }
</script>


<style scoped>

</style>
