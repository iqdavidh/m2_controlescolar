<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <h1 id="tituloSeccion">Login</h1>
      </div>
    </div>
    <form>
      <div>
        <label>
          <b>Usurario</b>
        </label>
        <input placeholder="Escriba su correo" />
      </div>
      <div>
        <label>
          <b>Contraseña</b>
        </label>
        <input placeholder="Escriba su contraseña" />
      </div>
      <button>Entrar</button>
      <label>
        <input type="checkbox" checked="checked" name="remember" /> Recordarme
      </label>
    </form>
    <div>
      <button type="button" class="cancelbtn">Cancelar</button>
    </div>
    <span class="psw">
      Olvidaste tu
      <a href="#">contraseña?</a>
    </span>
  </div>
</template>


<script>
export default {
  name: "login",
  props: {},
  components: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {}
};
</script>


<style scoped>
</style>
