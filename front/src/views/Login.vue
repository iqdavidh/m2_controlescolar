<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <h2>Signup</h2>
        <form>
          <label>Usuario</label>
          <input type="text" placeholder="Escriba un usuario" />
          <br />
          <br />
          <label>Contraseña</label>
          <input type="password" name="password" placeholder="Escriba una contraseña" />
          <br />
          <br />

          <button>Crear Cuenta</button>
          <p>
            ¿Ya tiene una cuenta registrada?
            <a href="/login">Login</a>
          </p>
        </form>
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
