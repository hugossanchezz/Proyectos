<template>
  <div class="body-grid-index">
    <!-- Header común -->
    <Header />

    <!-- Carrusel -->
    <section class="carrusel flex">
      <div id="carrusel__items" class="carrusel__items flex">
        <!-- Espacio para el carrusel que se cargará dinámicamente con JavaScript -->
      </div>
    </section>

    <!-- Contenido principal -->
    <section class="main-grid centrado-flex">
      <!-- Animación de carga -->
      <div id="loader" class="loader" v-if="loading"></div>

      <!-- Contenido principal -->
      <div
        id="contenido-mostrar"
        class="contenido-mostrar flex-column"
        v-show="!loading"
      >
        <div id="noticias-container" class="noticias-container">
          <!-- Espacio de las noticias con el Api NewsAPI -->
        </div>

        <div class="noticias-boton-container centrado-flex">
          <button
            id="recargar-noticias"
            class="button-submit button-submit-pequenio"
            @click="recargarNoticias"
          >
            Recargar noticias
          </button>
        </div>
      </div>
    </section>

    <!-- Estrenos -->
    <aside>
      <section id="estrenos-container" class="estrenos-container flex-column">
        <!-- Espacio de los estrenos de 2025 -->
      </section>
    </aside>

    <!-- Footer común -->
    <Footer />
  </div>
</template>

<script>
// Importar los scripts JavaScript con la lógica
import { mostrarCarrusel } from "/src/js/carrusel.js";
import { mostrarEstrenos } from "/src/js/estrenos.js";
import { mostrarNoticias } from "/src/js/noticias.js";

// Importar los componentes de Vue
import Header from "/src/components/Header.vue";
import Footer from "/src/components/Footer.vue";

export default {
  name: "IndexView",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      loading: true, // Esta propiedad controla si mostramos el loader o el contenido
    };
  },
  async mounted() {
    // Cargar el carrusel
    mostrarCarrusel();

    // Mostrar los estrenos en el aside
    mostrarEstrenos();

    // Mostrar las noticias mediante la función asíncrona
    await mostrarNoticias();

    // Llamar a la función para ocultar el loader y mostrar el contenido
    this.mostrarContenido();
  },
  methods: {
    mostrarContenido() {
      setTimeout(() => {
        this.loading = false; // Después de un tiempo, ocultamos el loader y mostramos el contenido
      }, 300); // 300 ms de retraso
    },
    recargarNoticias() {
      location.reload(); // Recargar la página actual, el array de noticias se reordenará
    },
  },
};
</script>
