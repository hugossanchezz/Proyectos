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
        <section class="sobreNosotros">
          <div class="encabezado">
            <h1>Sobre Nosotros</h1>
          </div>
          <hr />
          <p>
            Bienvenido a <strong>Dia de Cine</strong>, el sitio web creado para
            los amantes del cine...
          </p>
          <h2 class="flex">
            <img
              src="../assets/img/ico/categoria.svg"
              alt="Icono de categoría"
            />Nuestra misión
          </h2>
          <p>En <strong>Dia de Cine</strong> nos apasiona el cine...</p>
          <h2 class="flex">
            <img
              src="../assets/img/ico/categoria.svg"
              alt="Icono de categoría"
            />Nuestro Equipo
          </h2>
          <p>
            El equipo de <strong>Dia de Cine</strong> está compuesto por
            profesionales apasionados...
          </p>
          <h2 class="flex">
            <img
              src="../assets/img/ico/categoria.svg"
              alt="Icono de categoría"
            />Contacto
          </h2>
          <p>
            Si tienes alguna pregunta, sugerencia o simplemente quieres saber
            más...
          </p>
          <hr />
        </section>
      </div>
    </main>

    <!-- Footer común -->
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue"; // Ajusta la ruta según corresponda
import Footer from "@/components/Footer.vue"; // Ajusta la ruta según corresponda

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
