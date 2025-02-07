<template>
  <footer>
    <section class="contacto">
      <div
        class="socialContainer containerOne"
        tabindex="0"
        @click="mostrarModal()"
        aria-label="Mostrar dirección de correo"
      >
        <img
          src="/src/assets/img/ico/mail.svg"
          alt="Icono de correo electrónico"
          class="socialSvg"
        />
      </div>

      <div class="socialContainer containerTwo" tabindex="0">
        <a
          href="https://www.linkedin.com/in/hugossanchezz/"
          target="_blank"
          aria-label="Ir al perfil de LinkedIn (se abre en nueva ventana)"
        >
          <img
            src="/src/assets/img/ico/linkedin.svg"
            alt="LinkedIn Icon"
            class="socialSvg"
          />
        </a>
      </div>
    </section>

    <hr />

    <section class="copyright">
      <p>
        © 2022 Dia de Cine.
        <a class="autor" href="https://github.com/hugossanchezz" target="_blank"
          >Hugo Sánchez Ciudad</a
        >.
      </p>
    </section>

    <!-- Modal -->
    <div
      v-if="modalVisible"
      class="overlay centrado-flex"
      @click="cerrarModal"
      tabindex="-1"
    >
      <div class="modal flex" @click.stop>
        <div class="email-container flex">
          <!-- Icono del email -->
          <div class="icon-container">
            <img src="/src/assets/img/ico/mail.svg" alt="Icono de email" />
          </div>
          <!-- Correo electrónico -->

          <p v-if="!esMovil" class="centrado-flex">hugosanchezciudad23@gmail.com</p>
          <p v-if="esMovil" class="centrado-flex">Copiar mail</p>
        </div>

        <!-- Botón de copiar -->
        <div class="copy-container centrado-flex" @click="copiarEmail">
          <img
            src="/src/assets/img/ico/copy.svg"
            alt="Copiar dirección de correo"
          />
        </div>
        <button @click="cerrarModal" class="btn-cerrar centrado-flex">
          <img src="/src/assets/img/ico/close.svg" alt="Cerrar tarjeta" />
        </button>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      modalVisible: false,
    };
  },
  computed: {
    esMovil() {
      return window.innerWidth <= 1024; // Detecta si es móvil/tablet
    },
  },
  methods: {
    mostrarModal() {
      this.modalVisible = true;
    },
    cerrarModal() {
      this.modalVisible = false;
    },
    copiarEmail() {
      navigator.clipboard
        .writeText("hugosanchezciudad23@gmail.com")
        .then(console.log("Correo copiado al portapapeles."));
    },
  },
};
</script>
