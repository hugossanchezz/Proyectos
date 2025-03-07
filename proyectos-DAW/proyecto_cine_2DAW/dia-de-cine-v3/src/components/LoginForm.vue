<template>
  <!-- Formulario de inicio de sesión -->
  <form class="form flex" @submit.prevent="submitForm">
    <h1 class="centrado-flex">
      <span v-if="idioma === 'es'">Inicia sesión en tu cuenta</span>
      <span v-if="idioma === 'en'">Log in to your account</span>
    </h1>
    <hr />

    <!-- Campo de entrada para el correo electrónico -->
    <div class="flex-column">
      <label class="label-form" for="correo">
        <span v-if="idioma === 'es'">Correo</span>
        <span v-if="idioma === 'en'">Email</span>
      </label>
    </div>
    <div class="inputForm flex">
      <img src="/img/ico/arroba.svg" alt="Icono de arroba" />
      <input
        v-model="correo"
        id="correo"
        class="input"
        type="text"
        :placeholder="idioma === 'es' ? 'Correo electrónico' : 'Email'"
        required
      />
    </div>
    <div v-if="errorCorreo" class="errorMensaje">{{ errorCorreo }}</div>

    <!-- Campo de entrada para la contraseña -->
    <div class="flex-column">
      <label class="label-form" for="contrasenia">
        <span v-if="idioma === 'es'">Contraseña</span>
        <span v-if="idioma === 'en'">Password</span>
      </label>
    </div>
    <div class="inputForm flex">
      <img src="/img/ico/candado.svg" alt="Icono de candado de contraseña" />
      <input
        v-model="contrasenia"
        id="contrasenia"
        class="input"
        :type="tipoInput"
        :placeholder="idioma === 'es' ? 'Contraseña' : 'Password'"
        required
      />
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
        <span v-if="idioma === 'es'"
          >Debe tener al menos una letra minúscula</span
        >
        <span v-if="idioma === 'en'"
          >Must have at least one lowercase letter</span
        >
      </li>
      <li :class="{ correcto: tieneMayuscula }">
        <span v-if="idioma === 'es'"
          >Debe tener al menos una letra mayúscula</span
        >
        <span v-if="idioma === 'en'"
          >Must have at least one uppercase letter</span
        >
      </li>
      <li :class="{ correcto: tieneNumero }">
        <span v-if="idioma === 'es'">Debe tener al menos un número</span>
        <span v-if="idioma === 'en'">Must have at least one number</span>
      </li>
      <li :class="{ correcto: tieneCaracterEspecial }">
        <span v-if="idioma === 'es'"
          >Debe tener al menos un carácter especial (!@#$%^&*)</span
        >
        <span v-if="idioma === 'en'"
          >Must have at least one special character (!@#$%^&*)</span
        >
      </li>
      <li :class="{ correcto: tieneLongitudMinima }">
        <span v-if="idioma === 'es'">Debe tener al menos 8 caracteres</span>
        <span v-if="idioma === 'en'">Must have at least 8 characters</span>
      </li>
    </ul>

    <!-- Opción para recordar sesión -->
    <div class="flex-row flex">
      <label class="switch">
        <input v-model="recordarme" type="checkbox" id="recordarme" />
        <span class="slider"></span>
      </label>
      <label for="recordarme">
        <span v-if="idioma === 'es'">Recordarme</span>
        <span v-if="idioma === 'en'">Remember me</span>
      </label>
    </div>

    <!-- Botón de envío del formulario -->
    <button class="button-submit" type="submit" :disabled="tieneErrores">
      <span v-if="idioma === 'es'">Iniciar Sesión</span>
      <span v-if="idioma === 'en'">Login</span>
    </button>

    <!-- Enlace para registrarse -->
    <p class="p">
      <span v-if="idioma === 'es'">¿No tienes una cuenta? </span>
      <span v-if="idioma === 'en'">Don't have an account? </span>
      <router-link to="/perfil/registro" class="span">
        <span v-if="idioma === 'es'">Regístrate</span>
        <span v-if="idioma === 'en'">Sign up</span>
      </router-link>
    </p>

    <!-- Alternativa de inicio de sesión con Google -->
    <p class="p line">
      <span v-if="idioma === 'es'">o entra con</span>
      <span v-if="idioma === 'en'">or log in with</span>
    </p>
    <div class="centrado-flex">
      <button class="btn google flex">
        <img src="/img/ico/google.svg" alt="Icono de Google" />
        Google
      </button>
    </div>
  </form>
</template>

<script>
import { cargarIdioma } from "/src/js/idioma.js";

export default {
  data() {
    return {
      correo: "", // Almacena el correo ingresado por el usuario
      contrasenia: "", // Almacena la contraseña ingresada
      recordarme: false, // Indica si el usuario seleccionó "Recordarme"
      errorCorreo: "", // Guarda el mensaje de error si el correo no es válido
      correoPattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, // Expresión regular para validar correo
      visibilidadContrasenia: false, // Controla la visibilidad de la contraseña
      idioma: cargarIdioma(), // Cargar idioma desde la cookie
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
