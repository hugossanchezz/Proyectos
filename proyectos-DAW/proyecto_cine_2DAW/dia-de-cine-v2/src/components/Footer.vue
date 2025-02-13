<template>
  <footer>
    <section class="contacto centrado-flex">
      <div class="contacto__mail-linkedin flex">
        <div
        class="socialContainer containerOne"
        tabindex="0"
        @click="mostrarModalCorreo()"
        aria-label="Mostrar dirección de correo"
      >
        <img
          src="/img/ico/mail.svg"
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
            src="/img/ico/linkedin.svg"
            alt="LinkedIn Icon"
            class="socialSvg"
          />
        </a>
      </div>
      </div>
      
      <div class="contacto__donaciones" @click="mostrarModalDonaciones()">
        <img
          src="https://cdn.buymeacoffee.com/buttons/v2/default-white.png"
          alt="Buy Me a Coffee"
          style="height: 50px; width: 200px"
        />
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

    <!-- Modales del footer -->
    <div
      v-if="modalCorreoVisible || modalDonacionVisible"
      class="overlay centrado-flex"
      @click="cerrarModales"
      tabindex="-1"
    >
      <div
        v-if="modalCorreoVisible"
        class="modal modal-correo flex-column"
        @click="copiarEmail"
        @click.stop
      >
        <h2>Haz <strong>click</strong> para copiar mi correo</h2>
        <hr class="modal__hr" />
        <div class="modal__div flex">
          <div class="email-container flex">
            <!-- Icono del email -->
            <div class="icon-container">
              <img src="/img/ico/mail.svg" alt="Icono de email" />
            </div>
            <!-- Correo electrónico -->

            <p v-if="!esMovil" class="centrado-flex">
              hugosanchezciudad23@gmail.com
            </p>
            <p v-if="esMovil" class="centrado-flex">Copiar mail</p>
          </div>

          <!-- Botón de copiar -->
          <div class="copy-container centrado-flex">
            <img src="/img/ico/copy.svg" alt="Copiar dirección de correo" />
          </div>
        </div>

        <button @click="cerrarModales" class="btn-cerrar centrado-flex">
          <img src="/img/ico/close.svg" alt="Cerrar tarjeta" />
        </button>
      </div>

      <!-- Modal de donaciones -->
      <div
        v-if="modalDonacionVisible"
        class="modal modal-donaciones flex-column"
        @click.stop
      >
        <div class="modal-donaciones__titulos flex-column">
          <h2>¿Quieres apoyar a <strong>Dia de Cine</strong>?</h2>
          <div class="p">Puedes hacernos un <strong>donativo</strong> para motivarnos a siguir creciendo y ofreciendo nuevos contenidos.</div>
        </div>

        <hr class="modal__hr" />
        <div class="modal-donaciones__cantidad flex">
          <label for="cantidad" class="cantidad-label">Introduce la cantidad que te gustaría donar</label>
          <input id="cantidad" class="cantidad-input" type="number" placeholder="€">
        </div>
        <div class="modal__div centrado-flex">
          <div class="visa-card flex-column">
            <div class="logoContainer">
              <img
                class="svgLogo"
                src="/img/ico/mastercard.svg"
                alt="Icono de Mastercard"
              />
            </div>
            <div class="number-container">
              <label class="input-label" for="cardNumber"
                >NUMERO DE LA TARJETA</label
              >
              <input
                class="inputstyle"
                id="cardNumber"
                placeholder="XXXX XXXX XXXX XXXX"
                name="cardNumber"
                type="text"
              />
            </div>

            <div class="name-date-cvv-container">
              <div class="name-wrapper">
                <label class="input-label" for="holderName"
                  >TITULAR DE LA TARJETA</label
                >
                <input
                  class="inputstyle"
                  id="holderName"
                  placeholder="NOMBRE"
                  type="text"
                />
              </div>

              <div class="expiry-wrapper">
                <label class="input-label" for="expiry"
                  >FECHA DE CADUCIDAD</label
                >
                <input
                  class="inputstyle"
                  id="expiry"
                  placeholder="MM/AA"
                  type="text"
                />
              </div>
              <div class="cvv-wrapper">
                <label class="input-label" for="cvv">CVV</label>
                <input
                  class="inputstyle"
                  placeholder="***"
                  maxlength="3"
                  id="cvv"
                  type="password"
                />
              </div>
            </div>
          </div>
        </div>
        <button class="button-submit">Hacer donación</button>

        <button @click="cerrarModales" class="btn-cerrar centrado-flex">
          <img src="/img/ico/close.svg" alt="Cerrar tarjeta de donaciones" />
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
      modalCorreoVisible: false,
      modalDonacionVisible: false,
    };
  },
  computed: {
    esMovil() {
      return window.innerWidth <= 1024; // Detecta si es móvil/tablet
    },
  },
  methods: {
    mostrarModalCorreo() {
      this.modalCorreoVisible = true;
    },

    mostrarModalDonaciones() {
      this.modalDonacionVisible = true;
    },
    cerrarModales() {
      this.modalCorreoVisible = false;
      this.modalDonacionVisible = false;
    },
    copiarEmail() {
      navigator.clipboard
        .writeText("hugosanchezciudad23@gmail.com")
        .then(console.log("Correo copiado al portapapeles."));
    },
  },
};
</script>
