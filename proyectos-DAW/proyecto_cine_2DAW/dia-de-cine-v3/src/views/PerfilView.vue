<template>
  <div>
    <!-- Header común -->
    <Header />

    <!-- Contenido principal -->
    <div class="main-content centrado-flex">
      <section class="contenedor-inicio-sesion centrado-flex">
        <!-- Animación de carga -->
        <div id="loader" class="loader" v-if="loading"></div>

        <!-- Contenido dinámico según la ruta -->
        <div id="contenido-mostrar" class="contenido-mostrar flex" v-show="!loading">
          <div class="form-container">

            <router-view />
          </div>
        </div>
      </section>
    </div>

    <!-- Footer común -->
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      loading: true, // Controla si mostramos el loader o el contenido
    };
  },
  mounted() {
    this.cargarContenido();
  },
  methods: {
    cargarContenido() {
      setTimeout(() => {
        this.loading = false;
      }, 300);
    },
  },
};
</script>
