<template>
  <!-- Formulario de inicio de sesión -->
  <form class="form flex" @submit.prevent="submitForm">
    <h1 class="centrado-flex">Inicia sesión en tu cuenta</h1>
    <hr />

    <!-- Campo de entrada para el correo electrónico -->
    <div class="flex-column">
      <label class="label-form" for="correo">Correo</label>
    </div>
    <div class="inputForm flex">
      <img src="/img/ico/arroba.svg" alt="Icono de arroba" />
      <input
        v-model="correo"
        id="correo"
        class="input"
        type="text"
        placeholder="Correo electrónico"
        required
      />
    </div>
    <!-- Mensaje de error si el correo no es válido -->
    <div v-if="errorCorreo" class="errorMensaje">{{ errorCorreo }}</div>

    <!-- Campo de entrada para la contraseña -->
    <div class="flex-column">
      <label class="label-form" for="contrasenia">Contraseña</label>
    </div>
    <div class="inputForm flex">
      <img src="/img/ico/candado.svg" alt="Icono de candado de contraseña" />
      <input
        v-model="contrasenia"
        id="contrasenia"
        class="input"
        :type="tipoInput"
        placeholder="Contraseña"
        required
      />
      <!-- Botón para alternar visibilidad de la contraseña -->
      <img
        class="input-visibilidad"
        :src="iconoVisibilidad"
        alt="Mostrar y ocultar contraseña"
        @click="visibilidadContrasenia = !visibilidadContrasenia"
      />
    </div>

    <!-- Lista de requisitos de seguridad de la contraseña -->
    <ul v-if="contrasenia.length" class="errorMensaje">
      <li :class="{ correcto: tieneMinuscula }">
        Debe tener al menos una letra minúscula
      </li>
      <li :class="{ correcto: tieneMayuscula }">
        Debe tener al menos una letra mayúscula
      </li>
      <li :class="{ correcto: tieneNumero }">Debe tener al menos un número</li>
      <li :class="{ correcto: tieneCaracterEspecial }">
        Debe tener al menos un carácter especial (!@#$%^&*)
      </li>
      <li :class="{ correcto: tieneLongitudMinima }">
        Debe tener al menos 8 caracteres
      </li>
    </ul>

    <!-- Opción para recordar sesión -->
    <div class="flex-row flex">
      <label class="switch">
        <input v-model="recordarme" type="checkbox" id="recordarme" />
        <span class="slider"></span>
      </label>
      <label for="recordarme">Recordarme</label>
    </div>

    <!-- Botón de envío del formulario, deshabilitado si hay errores -->
    <button class="button-submit" type="submit" :disabled="tieneErrores">
      Iniciar Sesión
    </button>

    <!-- Enlace para registrarse -->
    <p class="p">
      ¿No tienes una cuenta?
      <router-link to="/perfil/registro" class="span">Regístrate</router-link>
    </p>

    <!-- Alternativa de inicio de sesión con Google -->
    <p class="p line">o entra con</p>
    <div class="centrado-flex">
      <button class="btn google flex">
        <img src="/img/ico/google.svg" alt="Icono de Google" />
        Google
      </button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      correo: "", // Almacena el correo ingresado por el usuario
      contrasenia: "", // Almacena la contraseña ingresada
      recordarme: false, // Indica si el usuario seleccionó "Recordarme"
      errorCorreo: "", // Guarda el mensaje de error si el correo no es válido
      correoPattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, // Expresión regular para validar correo
      visibilidadContrasenia: false, // Controla la visibilidad de la contraseña
    };
  },
  computed: {
    // Verifica si la contraseña contiene al menos una letra minúscula
    tieneMinuscula() {
      return /[a-z]/.test(this.contrasenia);
    },
    // Verifica si la contraseña contiene al menos una letra mayúscula
    tieneMayuscula() {
      return /[A-Z]/.test(this.contrasenia);
    },
    // Verifica si la contraseña contiene al menos un número
    tieneNumero() {
      return /\d/.test(this.contrasenia);
    },
    // Verifica si la contraseña contiene al menos un carácter especial
    tieneCaracterEspecial() {
      return /[!@#$%^&*]/.test(this.contrasenia);
    },
    // Verifica si la contraseña tiene al menos 8 caracteres
    tieneLongitudMinima() {
      return this.contrasenia.length >= 8;
    },
    // Verifica si hay errores en el formulario
    tieneErrores() {
      return this.errorCorreo || !this.contraseniaValida;
    },
    // Comprueba si la contraseña cumple con todos los requisitos
    contraseniaValida() {
      return (
        this.tieneMinuscula &&
        this.tieneMayuscula &&
        this.tieneNumero &&
        this.tieneCaracterEspecial &&
        this.tieneLongitudMinima
      );
    },
    // Define el icono de visibilidad de la contraseña
    iconoVisibilidad() {
      return this.visibilidadContrasenia
        ? "/img/ico/visibilidad-off.svg"
        : "/img/ico/visibilidad-on.svg";
    },
    // Alterna entre "password" y "text" para mostrar u ocultar la contraseña
    tipoInput() {
      return this.visibilidadContrasenia ? "text" : "password";
    },
  },
  watch: {
    // Validar en tiempo real el correo
    correo() {
      this.errorCorreo = this.correoPattern.test(this.correo)
        ? ""
        : "Correo electrónico inválido";
    },
  },
  methods: {
    // Método para manejar el envío del formulario
    submitForm() {
      if (this.contraseniaValida && !this.errorCorreo) {
        console.log("Inicio de sesión correcto");
      } else {
        console.log("Credenciales con errores");
      }
    },
  },
};
</script>
