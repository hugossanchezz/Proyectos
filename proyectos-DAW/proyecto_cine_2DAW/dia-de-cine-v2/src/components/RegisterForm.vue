<template>
  <!-- Formulario de registro -->
  <form class="form flex" @submit.prevent="submitForm">
    <h1 class="centrado-flex">Crea tu cuenta</h1>
    <hr />
    <div id="progress-container">
      <div id="progress-bar" :style="{ width: progreso + '%' }"></div>
    </div>

    <div class="flex-column">
      <label for="usuario">Nombre de usuario</label>
    </div>
    <div class="inputForm flex">
      <img src="/img/ico/user.svg" alt="Icono de usuario" />
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
      <img src="/img/ico/arroba.svg" alt="Icono de correo" />
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
      <img src="/img/ico/candado.svg" alt="Icono de contraseña" />
      <input
        v-model="contrasenia"
        id="contrasenia"
        class="input"
        :type="tipoInputContrasenia"
        placeholder="Contraseña"
        required
      />
      <img
        class="input-visibilidad"
        :src="iconoVisibilidadContrasenia"
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

    <div class="flex-column">
      <label for="confirmarContrasenia">Confirma tu Contraseña</label>
    </div>
    <div class="inputForm flex">
      <img src="/img/ico/candado.svg" alt="Icono de contraseña" />

      <input
        v-model="confirmarContrasenia"
        id="confirmarContrasenia"
        class="input"
        :type="tipoInputConfirmarContrasenia"
        placeholder="Confirma tu contraseña"
        required
      />
      <img
        class="input-visibilidad"
        :src="iconoVisibilidadConfirmarContrasenia"
        alt="Mostrar y ocultar contraseña"
        @click="
          visibilidadConfirmarContrasenia = !visibilidadConfirmarContrasenia
        "
      />
    </div>
    <div id="error-confirmarContrasenia" class="errorMensaje">
      {{ errores.confirmarContrasenia }}
    </div>

    <div class="flex-column">
      <label for="fechaNacimiento">Fecha de Nacimiento</label>
    </div>
    <div class="inputForm flex">
      <img src="/img/ico/calendario.svg" alt="Icono de calendario" />
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
        <router-link to="/perfil/registro/terminos" class="span"
          >términos y condiciones</router-link
        >
      </label>
    </div>
    <div id="error-aceptarTerminos" class="errorMensaje">
      {{ errores.aceptarTerminos }}
    </div>

    <button class="button-submit" type="submit">Registrarse</button>

    <p class="p">
      ¿Ya tienes una cuenta?
      <router-link to="/perfil/iniciar-sesion" class="span"
        >Inicia sesión</router-link
      >
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
      visibilidadContrasenia: false,
      visibilidadConfirmarContrasenia: false,
      progreso: 0,
      incremento: 100 / 6, // 1/6 del 100%
      validado: {
        // Objeto de validación para que el decremento o incremento de la barra de progreso del formulario no sea acumulativa en cada campo
        usuario: false,
        correo: false,
        contrasenia: false,
        confirmarContrasenia: false,
        fechaNacimiento: false,
        aceptarTerminos: false,
      },
    };
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
    // Visibilidad del campo contraseña
    iconoVisibilidadContrasenia() {
      if (this.visibilidadContrasenia) {
        return "/img/ico/visibilidad-off.svg";
      } else {
        return "/img/ico/visibilidad-on.svg";
      }
    },
    tipoInputContrasenia() {
      return this.visibilidadContrasenia ? "text" : "password";
    },
    // Visibilidad del campo confirmar contraseña
    iconoVisibilidadConfirmarContrasenia() {
      if (this.visibilidadConfirmarContrasenia) {
        return "/img/ico/visibilidad-off.svg";
      } else {
        return "/img/ico/visibilidad-on.svg";
      }
    },
    tipoInputConfirmarContrasenia() {
      return this.visibilidadConfirmarContrasenia ? "text" : "password";
    },
  },
  watch: {
    // Observa el cambio en el campo 'usuario'
    usuario() {
      // Si el campo 'usuario' está vacío, asigna un mensaje de error
      if (!this.usuario) {
        this.errores.usuario = "El nombre de usuario es requerido";
        // Si ya se había validado previamente, se decrementa la barra de progreso
        if (this.validado.usuario) {
          this.decrementarBarraProgreso();
          this.validado.usuario = false; // Se marca como no validado
        }
        // Si el campo 'usuario' contiene caracteres especiales (no alfanuméricos), muestra un error
      } else if (/[^a-zA-Z0-9]/.test(this.usuario)) {
        this.errores.usuario = "No se permiten caracteres especiales";
        // Si ya se había validado previamente, se decrementa la barra de progreso
        if (this.validado.usuario) {
          this.decrementarBarraProgreso();
          this.validado.usuario = false; // Se marca como no validado
        }
        // Si el campo 'usuario' es válido (no está vacío y no tiene caracteres especiales)
      } else {
        this.errores.usuario = ""; // Se limpia el mensaje de error
        // Si no estaba validado antes, se incrementa la barra de progreso
        if (!this.validado.usuario) {
          this.incrementarBarraProgreso();
          this.validado.usuario = true; // Se marca como validado
        }
      }
    },

    // Observa el cambio en el campo 'correo'
    correo() {
      // Si el campo 'correo' está vacío, asigna un mensaje de error
      if (!this.correo) {
        this.errores.correo = "El correo es requerido";
        // Si ya se había validado previamente, se decrementa la barra de progreso
        if (this.validado.correo) {
          this.decrementarBarraProgreso();
          this.validado.correo = false; // Se marca como no validado
        }
        // Si el correo no coincide con el patrón definido (expresión regular), muestra un error
      } else if (!this.correoPattern.test(this.correo)) {
        this.errores.correo = "Correo no válido";
        // Si ya se había validado previamente, se decrementa la barra de progreso
        if (this.validado.correo) {
          this.decrementarBarraProgreso();
          this.validado.correo = false; // Se marca como no validado
        }
        // Si el correo es válido (no está vacío y coincide con el patrón)
      } else {
        this.errores.correo = ""; // Se limpia el mensaje de error
        // Si no estaba validado antes, se incrementa la barra de progreso
        if (!this.validado.correo) {
          this.incrementarBarraProgreso();
          this.validado.correo = true; // Se marca como validado
        }
      }
    },

    // Observa el cambio en el campo 'contrasenia'
    contrasenia() {
      // Si la contraseña está vacía, asigna un mensaje de error
      if (!this.contrasenia) {
        this.errores.contrasenia = "La contraseña es requerida";
        // Si ya se había validado previamente, se decrementa la barra de progreso
        if (this.validado.contrasenia) {
          this.decrementarBarraProgreso();
          this.validado.contrasenia = false; // Se marca como no validado
        }
        // Si la contraseña no cumple con los requisitos de seguridad (minúsculas, mayúsculas, número, etc.)
      } else if (
        !this.tieneMinuscula ||
        !this.tieneMayuscula ||
        !this.tieneNumero ||
        !this.tieneCaracterEspecial ||
        !this.tieneLongitudMinima
      ) {
        this.errores.contrasenia = "La contraseña no cumple con los requisitos";
        // Si ya se había validado previamente, se decrementa la barra de progreso
        if (this.validado.contrasenia) {
          this.decrementarBarraProgreso();
          this.validado.contrasenia = false; // Se marca como no validado
        }
        // Si la contraseña es válida (cumple con los requisitos)
      } else {
        this.errores.contrasenia = ""; // Se limpia el mensaje de error
        // Si no estaba validado antes, se incrementa la barra de progreso
        if (!this.validado.contrasenia) {
          this.incrementarBarraProgreso();
          this.validado.contrasenia = true; // Se marca como validado
        }
      }
    },

    // Observa el cambio en el campo 'confirmarContrasenia'
    confirmarContrasenia() {
      // Si las contraseñas no coinciden, muestra un error
      if (this.confirmarContrasenia !== this.contrasenia) {
        this.errores.confirmarContrasenia = "Las contraseñas no coinciden";
        // Si ya se había validado previamente, se decrementa la barra de progreso
        if (this.validado.confirmarContrasenia) {
          this.decrementarBarraProgreso();
          this.validado.confirmarContrasenia = false; // Se marca como no validado
        }
        // Si las contraseñas coinciden
      } else {
        this.errores.confirmarContrasenia = ""; // Se limpia el mensaje de error
        // Si no estaba validado antes, se incrementa la barra de progreso
        if (!this.validado.confirmarContrasenia) {
          this.incrementarBarraProgreso();
          this.validado.confirmarContrasenia = true; // Se marca como validado
        }
      }
    },

    // Observa el cambio en el campo 'fechaNacimiento'
    fechaNacimiento() {
      // Si la persona no tiene al menos 13 años, muestra un error
      if (!this.esMayorDe13) {
        this.errores.fechaNacimiento = "Debes tener al menos 13 años";
        // Si ya se había validado previamente, se decrementa la barra de progreso
        if (this.validado.fechaNacimiento) {
          this.decrementarBarraProgreso();
          this.validado.fechaNacimiento = false; // Se marca como no validado
        }
        // Si la persona tiene al menos 13 años
      } else {
        this.errores.fechaNacimiento = ""; // Se limpia el mensaje de error
        // Si no estaba validado antes, se incrementa la barra de progreso
        if (!this.validado.fechaNacimiento) {
          this.incrementarBarraProgreso();
          this.validado.fechaNacimiento = true; // Se marca como validado
        }
      }
    },

    // Observa el cambio en el campo 'aceptarTerminos'
    aceptarTerminos() {
      // Si no se han aceptado los términos y condiciones, muestra un error
      if (!this.aceptarTerminos) {
        this.errores.aceptarTerminos =
          "Debes aceptar los términos y condiciones";
        // Si ya se había validado previamente, se decrementa la barra de progreso
        if (this.validado.aceptarTerminos) {
          this.decrementarBarraProgreso();
          this.validado.aceptarTerminos = false; // Se marca como no validado
        }
        // Si se han aceptado los términos y condiciones
      } else {
        this.errores.aceptarTerminos = ""; // Se limpia el mensaje de error
        // Si no estaba validado antes, se incrementa la barra de progreso
        if (!this.validado.aceptarTerminos) {
          this.incrementarBarraProgreso();
          this.validado.aceptarTerminos = true; // Se marca como validado
        }
      }
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
    incrementarBarraProgreso() {
      if (this.progreso < 100) {
        this.progreso += this.incremento;
        console.log(this.progreso);
      }
    },
    decrementarBarraProgreso() {
      if (this.progreso < 100) {
        this.progreso -= this.incremento;
        console.log(this.progreso);
      }
    },
  },
};
</script>
