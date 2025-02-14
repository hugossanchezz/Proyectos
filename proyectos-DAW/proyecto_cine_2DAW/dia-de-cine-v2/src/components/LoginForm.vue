<template>
  <form class="form flex" @submit.prevent="submitForm">
    <h1 class="centrado-flex">Inicia sesión en tu cuenta</h1>
    <hr />
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
    <!-- Error específico para el correo -->
    <div v-if="errorCorreo" class="errorMensaje">{{ errorCorreo }}</div>

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
      <img
        class="input-visibilidad"
        :src="iconoVisibilidad"
        alt="Mostrar y ocultar contraseña"
        @click="visibilidadContrasenia = !visibilidadContrasenia"
      />
    </div>
    <!-- Lista de requisitos para la contraseña -->
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

    <div class="flex-row flex">
      <label class="switch">
        <input v-model="recordarme" type="checkbox" id="recordarme" />
        <span class="slider"></span>
      </label>
      <label for="recordarme">Recordarme</label>
    </div>

    <button class="button-submit" type="submit" :disabled="tieneErrores">
      Iniciar Sesión
    </button>
    <p class="p">
      ¿No tienes una cuenta?
      <router-link to="/perfil/registro" class="span"
        >Regístrate</router-link
      >
    </p>

    <p class="p line">o entra con</p>
  </form>
  <div class="centrado-flex">
    <button class="btn google flex">
      <img src="/img/ico/google.svg" alt="Icono de Google" />
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
      errorCorreo: "",
      correoPattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, // Patron correo
      visibilidadContrasenia: false,
    };
  },
  computed: {
    // Propiedades computadas para verificar las características de la contraseña
    tieneMinuscula() {
      return /[a-z]/.test(this.contrasenia);
    },
    tieneMayuscula() {
      return /[A-Z]/.test(this.contrasenia);
    },
    tieneNumero() {
      return /\d/.test(this.contrasenia);
    },
    tieneCaracterEspecial() {
      return /[!@#$%^&*]/.test(this.contrasenia);
    },
    tieneLongitudMinima() {
      return this.contrasenia.length >= 8;
    },
    // Propiedad computada para comprobar si hay errores
    tieneErrores() {
      return this.errorCorreo || !this.contraseniaValida;
    },
    contraseniaValida() {
      return (
        this.tieneMinuscula &&
        this.tieneMayuscula &&
        this.tieneNumero &&
        this.tieneCaracterEspecial &&
        this.tieneLongitudMinima
      );
    },
    iconoVisibilidad() {
      if (this.visibilidadContrasenia) {
        return "/img/ico/visibilidad-off.svg";
      } else {
        return "/img/ico/visibilidad-on.svg";
      }
    },
    tipoInput() {
      return this.visibilidadContrasenia ? "text" : "password";
    },
  },
  watch: {
    // Watcher para validar el correo en tiempo real
    correo() {
      if (this.correoPattern.test(this.correo)) {
        this.errorCorreo = "";
      } else {
        this.errorCorreo = "Correo electrónico inválido";
      }
    },
  },
  methods: {
    submitForm() {
      // Validación antes de enviar el formulario
      if (this.contraseniaValida && !this.errorCorreo) {
        console.log("Inicio de sesión correcto");
      } else {
        console.log("Formulario con errores");
      }
    },
  },
};
</script>
