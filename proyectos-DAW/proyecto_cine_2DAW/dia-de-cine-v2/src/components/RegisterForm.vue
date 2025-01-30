<template>
  <form class="form flex" @submit.prevent="submitForm">
    <div class="flex-column">
      <label for="usuario">Nombre de usuario</label>
    </div>
    <div class="inputForm flex">
      <img src="../assets/img/ico/user.svg" alt="Icono de usuario" />
      <input
        v-model="usuario"
        id="usuario"
        class="input"
        type="text"
        placeholder="Sin caracteres especiales"
        required
      />
    </div>

    <div class="flex-column">
      <label for="correo">Correo</label>
    </div>
    <div class="inputForm flex">
      <img src="../assets/img/ico/arroba.svg" alt="Icono de correo" />
      <input
        v-model="correo"
        id="correo"
        class="input"
        type="email"
        placeholder="Correo electrónico"
        required
      />
    </div>

    <div class="flex-column">
      <label for="contrasenia">Contraseña</label>
    </div>
    <div class="inputForm flex">
      <img src="../assets/img/ico/candado.svg" alt="Icono de contraseña" />
      <input
        v-model="contrasenia"
        id="contrasenia"
        class="input"
        type="password"
        placeholder="Contraseña"
        required
      />
    </div>

    <div class="flex-column">
      <label for="confirmarContrasenia">Confirma tu Contraseña</label>
    </div>
    <div class="inputForm flex">
      <img src="../assets/img/ico/candado.svg" alt="Icono de contraseña" />
      <input
        v-model="confirmarContrasenia"
        id="confirmarContrasenia"
        class="input"
        type="password"
        placeholder="Confirma tu contraseña"
        required
      />
    </div>

    <div class="flex-column">
      <label for="fechaNacimiento">Fecha de Nacimiento</label>
    </div>
    <div class="inputForm flex">
      <img src="../assets/img/ico/calendario.svg" alt="Icono de calendario" />
      <input
        v-model="fechaNacimiento"
        id="fechaNacimiento"
        class="input"
        type="date"
        required
      />
    </div>

    <div class="flex-column">
      <label for="generoFavorito">Género favorito</label>
    </div>
    <div class="inputForm flex">
      <select
        v-model="generoFavorito"
        id="generoFavorito"
        name="generoFavorito"
        class="input flex"
        required
      >
        <option value="accion">Acción</option>
        <option value="comedia">Comedia</option>
        <option value="drama">Drama</option>
        <option value="cienciaFiccion">Ciencia Ficción</option>
        <option value="terror">Terror</option>
        <option value="romance">Romance</option>
        <option value="documental">Documental</option>
      </select>
    </div>

    <div class="flex-row flex">
      <label class="switch">
        <input
          v-model="aceptarTerminos"
          type="checkbox"
          id="aceptarTerminos"
          required
        />
        <span class="slider"></span>
      </label>
      <label for="aceptarTerminos">
        Acepto los
        <a class="span" href="?mostrar=terminos">términos y condiciones</a>
      </label>
    </div>

    <!-- Campo para mostrar errores -->
    <div v-if="errores.length" class="error-message" style="color: red">
      <ul>
        <li v-for="error in errores" :key="error">{{ error }}</li>
      </ul>
    </div>

    <button class="button-submit" type="submit">Registrarse</button>

    <p class="p">
      ¿Ya tienes una cuenta?
      <a class="span" href="?mostrar=login">Inicia sesión</a>
    </p>
  </form>
</template>

<script>
export default {
  data() {
    return {
      usuario: "",
      correo: "",
      contrasenia: "",
      confirmarContrasenia: "",
      fechaNacimiento: "",
      generoFavorito: "",
      aceptarTerminos: false,
      errores: [],
    };
  },
  methods: {
    submitForm() {
      this.errores = [];

      // Validaciones simples
      if (
        !this.usuario ||
        !this.correo ||
        !this.contrasenia ||
        !this.confirmarContrasenia ||
        !this.fechaNacimiento ||
        !this.generoFavorito ||
        !this.aceptarTerminos
      ) {
        this.errores.push("Todos los campos son obligatorios.");
      }
      if (this.contrasenia !== this.confirmarContrasenia) {
        this.errores.push("Las contraseñas no coinciden.");
      }

      // Aquí puedes agregar más validaciones o enviar el formulario al backend
      if (this.errores.length === 0) {
        // Lógica para enviar los datos (por ejemplo, usando axios o fetch)
        console.log("Formulario enviado:", {
          usuario: this.usuario,
          correo: this.correo,
          contrasenia: this.contrasenia,
          fechaNacimiento: this.fechaNacimiento,
          generoFavorito: this.generoFavorito,
          aceptarTerminos: this.aceptarTerminos,
        });
      }
    },
  },
};
</script>

<style scoped>
/* Puedes mantener los estilos tal como están o migrarlos aquí */
</style>
