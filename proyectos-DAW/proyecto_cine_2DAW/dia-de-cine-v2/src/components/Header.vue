<template>
  <header class="flex">
    <section class="section-logo centrado-flex flex">
      <router-link to="/">
        <img id="logo" src="../assets/img/logo-no-cd.png" alt="Logo" />
      </router-link>
    </section>

    <nav class="">
      <!-- Botón menú hamburguesa (solo en móviles/tablets) -->
      <div v-if="esMovil" class="menu-hamburguesa flex" @click="toggleMenu">
        <img
          class="nav__menu__icono"
          src="/src/assets/img/ico/menu-hamburguesa.svg"
          alt="Icono de menu"
        />
      </div>

      <!-- Menú de navegación -->
      <section
        class="container-nav-items centrado-flex"
        :class="{ 'menu-abierto': menuAbierto }"
      >
        <div class="nav__item">
          <router-link to="/nosotros" class="centrado-flex font-size-pequenio"
            >Nosotros</router-link
          >
        </div>
        <div class="nav__item">
          <router-link to="/temporal" class="centrado-flex font-size-pequenio"
            >Películas</router-link
          >
        </div>
        <div class="nav__item">
          <router-link to="/temporal" class="centrado-flex font-size-pequenio"
            >Series</router-link
          >
        </div>
        <div class="nav__item">
          <router-link to="/temporal" class="centrado-flex font-size-pequenio">
            Mi lista
            <img
              class="item__bookmark"
              src="../assets/img/ico/bookmark.svg"
              alt="Icono de guardado"
            />
          </router-link>
        </div>
      </section>
    </nav>

    <section id="acciones" class="acciones centrado-flex flex">
      <div class="acciones__busqueda">
        <img
          class="busqueda__icono"
          src="../assets/img/ico/lupa.svg"
          alt="Icono de búsqueda"
          @click="buscar = !buscar"
        />
      </div>
      <input
        v-show="buscar"
        id="input-busqueda"
        class="input-busqueda inputForm input"
        type="text"
        placeholder="Buscar..."
      />

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
  data() {
    return {
      menuAbierto: false,
      esMovil: window.innerWidth <= 1024, // Detecta si es móvil/tablet
      buscar: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuAbierto = !this.menuAbierto;
    },
    actualizarTamano() {
      this.esMovil = window.innerWidth <= 1024;
      if (!this.esMovil) {
        this.menuAbierto = false; // Asegura que el menú siempre esté visible en escritorio
      }
    },
  },
  mounted() {
    window.addEventListener("resize", this.actualizarTamano);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.actualizarTamano);
  },
};
</script>
