<template>
  <div>
    <!-- Header común -->
    <Header />

    <!-- Contenido principal -->
    <div class="main-content centrado-flex">
      <section class="contenedor-inicio-sesion centrado-flex">
        <!-- Animación de carga -->
        <div id="loader" class="loader" v-if="loading"></div>

        <!-- Contenido del formulario -->
        <div
          id="contenido-mostrar"
          class="contenido-mostrar flex"
          v-show="!loading"
        >
          <!-- Mostrar el formulario de login, registro o terminos y condiciones -->
          <div v-if="formulario === 'login'" class="form-container">
            <LoginForm /> <!-- Se renderiza el componente LoginForm -->
          </div>
          <div v-if="formulario === 'registro'" class="form-container">
            <RegisterForm /> <!-- Se renderiza el componente RegisterForm -->
          </div>
          <div v-if="formulario === 'terminos'" class="form-container">
            <Terminos /> <!-- Se renderiza el componente Terminos -->
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
import LoginForm from "@/components/LoginForm.vue"; 
import RegisterForm from "@/components/RegisterForm.vue"; 
import Terminos from "@/components/Terminos.vue"; 

export default {
  components: {
    Header,
    Footer,
    LoginForm,
    RegisterForm,
    Terminos
  },
  data() {
    return {
      loading: true, // Para controlar la animación de carga
      formulario: "login", // Se carga el formulario de login por defecto
      email: "",
      password: "",
    };
  },
  mounted() {
    this.cargarContenido(); // Simula el retraso de carga
    this.elegirFormulario(); // Escoge el formulario a mostrar
  },
  methods: {
    cargarContenido() {
      setTimeout(() => {
        this.loading = false; // Después del tiempo de carga, ocultamos el loader y mostramos el contenido
      }, 300);
    },
    elegirFormulario() {
      const urlParams = new URLSearchParams(window.location.search);
      const mostrar = urlParams.get("mostrar") || "login"; // Obtiene el parámetro 'mostrar' de la URL
      this.formulario = mostrar;
    },
  },
};
</script>

<style scoped>
/* Estilos aquí */
</style>
