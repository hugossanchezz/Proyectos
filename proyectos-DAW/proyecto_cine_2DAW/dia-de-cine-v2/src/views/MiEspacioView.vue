<template>
    <div>
      <!-- Header común -->
      <Header />
  
      <!-- Contenido principal -->
      <main class="main-content centrado-flex">
        <!-- Animación de carga -->
        <div id="loader" class="loader" v-if="loading"></div>
  
        <!-- Contenido principal -->
        <div
          id="contenido-mostrar"
          class="contenido-mostrar flex"
          v-show="!loading"
        >
          mi espacio
        </div>
      </main>
  
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
        loading: true, // controla si mostramos el loader o el contenido
      };
    },
    mounted() {
      this.cargarContenido(); // Llamamos a la función para cargar el contenido
    },
    methods: {
      cargarContenido() {
        setTimeout(() => {
          this.loading = false; // ocultamos el loader y mostramos el contenido
        }, 300); // aseguramos que cargue
      },
    },
  };
  </script>
  