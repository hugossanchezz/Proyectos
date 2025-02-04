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
    <div id="error-usuario" class="errorMensaje">{{ errores.usuario }}</div>

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
    <div id="error-correo" class="errorMensaje">{{ errores.correo }}</div>

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
    <div id="error-confirmarContrasenia" class="errorMensaje">
      {{ errores.confirmarContrasenia }}
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
    <div id="error-fechaNacimiento" class="errorMensaje">
      {{ errores.fechaNacimiento }}
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
    <div id="error-generoFavorito" class="errorMensaje">
      {{ errores.generoFavorito }}
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
    <div id="error-aceptarTerminos" class="errorMensaje">
      {{ errores.aceptarTerminos }}
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
      correoPattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, // Patron correo
      correo: "",
      contrasenia: "",
      confirmarContrasenia: "",
      fechaNacimiento: "",
      generoFavorito: "",
      aceptarTerminos: false,
      errores: {
        usuario: "",
        correo: "",
        contrasenia: "",
        confirmarContrasenia: "",
        fechaNacimiento: "",
        generoFavorito: "",
        aceptarTerminos: "",
      },
    };
  },
  watch: {
    // Validar el usuario en tiempo real
    usuario() {
      if (!this.usuario) {
        this.errores.usuario = "El nombre de usuario es requerido";
      } else if (/[^a-zA-Z0-9]/.test(this.usuario)) {
        this.errores.usuario = "No se permiten caracteres especiales";
      } else {
        this.errores.usuario = "";
      }
    },
    // Validar el correo en tiempo real
    correo() {
      if (!this.correo) {
        this.errores.correo = "El correo es requerido";
      } else if (!this.correoPattern.test(this.correo)) {
        this.errores.correo = "Correo no válido";
      } else {
        this.errores.correo = "";
      }
    },
    // Validar la contraseña en tiempo real
    watch: {
      contrasenia() {
        if (!this.contrasenia) {
          this.errores.contrasenia = "La contraseña es requerida";
        } else if (
          !this.tieneMinuscula ||
          !this.tieneMayuscula ||
          !this.tieneNumero ||
          !this.tieneCaracterEspecial ||
          !this.tieneLongitudMinima
        ) {
          this.errores.contrasenia =
            "La contraseña no cumple con los requisitos";
        } else {
          this.errores.contrasenia = "";
        }
      },
    },

    // Verificar las contraseñas coincidentes
    confirmarContrasenia() {
      if (this.confirmarContrasenia !== this.contrasenia) {
        this.errores.confirmarContrasenia = "Las contraseñas no coinciden";
      } else {
        this.errores.confirmarContrasenia = "";
      }
    },
    // Verificar la fecha de nacimiento
    fechaNacimiento() {
      if (!this.esMayorDe13) {
        this.errores.fechaNacimiento = "Debes tener al menos 13 años";
      } else {
        this.errores.fechaNacimiento = "";
      }
    },
    // Verificar los términos y condiciones
    aceptarTerminos() {
      if (!this.aceptarTerminos) {
        this.errores.aceptarTerminos =
          "Debes aceptar los términos y condiciones";
      } else {
        this.errores.aceptarTerminos = "";
      }
    },
  },
  computed: {
    // Propiedades computadas para la contraseña
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
  },

  methods: {
    submitForm() {
      if (
        !this.errores.usuario &&
        !this.errores.correo &&
        !this.errores.contrasenia &&
        !this.errores.confirmarContrasenia &&
        !this.errores.fechaNacimiento &&
        !this.errores.generoFavorito &&
        this.aceptarTerminos
      ) {
        console.log("Usuario registrado");
        // Redirigir o procesar el formulario
      } else {
        console.log("Formulario con errores");
      }
    },
  },
};
</script>
