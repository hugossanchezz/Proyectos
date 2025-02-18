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
        class="contenido-mostrar centrado-flex"
        v-show="!loading"
      >
        <section class="sobreNosotros">
          <div class="encabezado">
            <h1>Sobre Nosotros</h1>
          </div>
          <hr />
          <p>
            Bienvenido a <strong>Dia de Cine</strong>, el sitio web creado para
            los amantes del cine y las series. Nuestro objetivo es proporcionar
            una plataforma donde puedas descubrir, disfrutar y compartir
            contenido relacionado con el mundo del entretenimiento. Ya sea que
            busques una película para ver esta noche o quieras conocer las
            últimas noticias sobre tus series favoritas. Estamos aquí para
            ofrecerte lo mejor.
          </p>

          <h2 class="flex">
            <img
              src="/img/ico/categoria.svg"
              alt="Icono de categoría"
            />Nuestra misión
          </h2>
          <p>
            En <strong>Dia de Cine</strong> nos apasiona el cine y las series,
            por eso trabajamos para ofrecerte una experiencia única, con
            contenido actualizado y relevante para todos los gustos. Queremos
            ser tu plataforma de referencia para estar al tanto de los estrenos,
            recomendaciones y todo lo que sucede en el mundo del
            entretenimiento.
          </p>

          <h2 class="flex">
            <img
              src="/img/ico/categoria.svg"
              alt="Icono de categoría"
            />Nuestro Equipo
          </h2>
          <p>
            El equipo de <strong>Dia de Cine</strong> está compuesto por
            profesionales apasionados por el cine y las series, que trabajan
            constantemente para ofrecerte lo mejor. Desde los creadores de
            contenido hasta los desarrolladores, cada miembro de nuestro equipo
            aporta su dedicación para mejorar tu experiencia en la plataforma.
          </p>

          <h2 class="flex">
            <img
              src="/img/ico/categoria.svg"
              alt="Icono de categoría"
            />Contacto
          </h2>
          <p>
            Si tienes alguna pregunta, sugerencia o simplemente quieres saber
            más sobre <strong>Dia de Cine</strong>, no dudes en ponerte en
            contacto con nosotros. Estaremos encantados de escucharte y mejorar
            la experiencia para todos nuestros usuarios.
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
