<template>
  <footer>
    <section class="contacto">
      <a class="socialContainer containerOne" href="#">
        <img
          src="../assets/img/ico/mail.svg"
          alt="Email Icon"
          class="socialSvg mailSvg"
        />
      </a>

      <a class="socialContainer containerTwo" href="#">
        <img
          src="../assets/img/ico/linkedin.svg"
          alt="LinkedIn Icon"
          class="socialSvg linkdinSvg"
        />
      </a>
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
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
/* Puedes mantener los estilos tal como están o migrarlos aquí */
</style>
