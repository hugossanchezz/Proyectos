<template>
  <header class="flex">
    <section class="section-logo centrado-flex">
      <router-link to="/">
        <img class="logo" src="../assets/img/logo-no-cd.png" alt="Logo" />
      </router-link>
    </section>

    <nav class="flex">
      <div class="nav__item">
        <router-link to="/nosotros" class="font-size-pequenio"
          >Nosotros</router-link
        >
      </div>
      <div class="nav__item">
        <router-link to="/temporal" class="font-size-pequenio"
          >Películas</router-link
        >
      </div>
      <div class="nav__item">
        <router-link to="/temporal" class="font-size-pequenio"
          >Series</router-link
        >
      </div>
      <div class="nav__item">
        <router-link to="/temporal" class="font-size-pequenio flex">
          Mi espacio
          <img src="../assets/img/ico/bookmark.svg" alt="Icono de guardado" />
        </router-link>
      </div>
    </nav>

    <section class="acciones flex">
      <div class="acciones__busqueda">
        <img
          class="busqueda__icono"
          src="../assets/img/ico/lupa.svg"
          alt="Icono de búsqueda"
        />
      </div>
      <div class="acciones__login">
        <router-link to="/inicio-sesion">
          <img
            class="login__icono"
            src="../assets/img/ico/user-naranja.svg"
            alt="Icono de inicio de sesión"
          />
        </router-link>
      </div>
    </section>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
/* Puedes mantener los estilos tal como están o migrarlos aquí */
</style>
