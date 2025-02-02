<template>
  <form class="form flex" @submit.prevent="submitForm">
    <div class="flex-column">
      <label for="correo">Correo</label>
    </div>
    <div class="inputForm flex">
      <img src="../assets/img/ico/arroba.svg" alt="Icono de arroba" />
      <input
        v-model="correo"
        id="correo"
        class="input"
        type="text"
        placeholder="Correo electrónico"
        required
      />
    </div>

    <div class="flex-column">
      <label for="contrasenia">Contraseña</label>
    </div>
    <div class="inputForm flex">
      <img src="../assets/img/ico/candado.svg" alt="Icono de candado" />
      <input
        v-model="contrasenia"
        id="contrasenia"
        class="input"
        type="password"
        placeholder="Contraseña"
        required
      />
    </div>

    <div class="flex-row flex">
      <label class="switch">
        <input v-model="recordarme" type="checkbox" id="recordarme" />
        <span class="slider"></span>
      </label>
      <label for="recordarme">Recordarme</label>
    </div>

    <!-- Contenedor para mostrar errores -->
    <div v-if="errores.length" class="errorMensaje">
      <ul>
        <li v-for="error in errores" :key="error">{{ error }}</li>
      </ul>
    </div>

    <button class="button-submit" type="submit">Iniciar Sesión</button>
    <p class="p">
      ¿No tienes una cuenta?
      <a class="span" href="?mostrar=registro">Regístrate</a>
    </p>
    <p class="p line">o entra con</p>

  </form>
  <div class="centrado-flex">
    <button class="btn google flex">
      <img src="../assets/img/ico/google.svg" alt="Icono de Google" />
      Google
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      correo: "",
      contrasenia: "",
      recordarme: false,
      errores: [],
    };
  },
  methods: {
    submitForm() {
      this.errores = [];

      // Validaciones simples
      if (!this.correo || !this.contrasenia) {
        this.errores.push("Todos los campos son obligatorios.");
      }

      // Aquí puedes agregar más validaciones o enviar el formulario al backend
      if (this.errores.length === 0) {
        // Lógica para enviar los datos (por ejemplo, usando axios o fetch)
        console.log("Formulario enviado:", {
          correo: this.correo,
          contrasenia: this.contrasenia,
          recordarme: this.recordarme,
        });
      }
    },
  },
};
</script>

<style scoped>
/* Puedes mantener los estilos tal como están o migrarlos aquí */
</style>
