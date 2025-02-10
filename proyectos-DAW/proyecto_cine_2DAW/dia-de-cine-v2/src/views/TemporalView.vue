<template>
    <div class="body-desarrollo centrado-flex">
      <section class="borde-naranja">
        <div class="en-desarrollo flex">
          <img class="warning" src="/img/ico/warning.svg" alt="Warning En Desarrollo" />
          <h1>Este apartado se encuentra en desarrollo, pero pronto estará disponible.</h1>
        </div>
        <button @click="goBack">
          <a href="#">Volver al inicio</a>
        </button>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TemporalView',
    methods: {
      goBack() {
        // Redirige a la página de inicio
        this.$router.push('/');
      }
    }
  };
  </script>
  
  <style scoped>
  /* Estilos aquí, ajustados a tus necesidades */
  </style>
  