<template>

  
  <header class="header-movil flex">
    <section class="section-logo flex-column">
      <router-link to="/">
        <img id="logo" :src="iconoLogo" alt="Logo" />
      </router-link>
      <Breadcrumb />
    </section>

    <nav class="centrado-flex">
      <section
        class="container-nav-items flex"
        :class="{ 'menu-abierto': menuAbierto }"
      >
        <div class="nav__item">
          <router-link to="/peliculas" class="centrado-flex font-size-pequenio"
            >Películas</router-link
          >
        </div>
        <div class="nav__item">
          <router-link to="/series" class="centrado-flex font-size-pequenio"
            >Series</router-link
          >
        </div>
        <div class="nav__item">
          <router-link to="/comunidad" class="centrado-flex font-size-pequenio"
            >Comunidad</router-link
          >
        </div>
        <div class="nav__item">
          <router-link to="/nosotros" class="centrado-flex font-size-pequenio"
            >Nosotros</router-link
          >
        </div>
        <div class="nav__item">
          <router-link to="/mi-espacio" class="centrado-flex font-size-pequenio">
            Mi espacio
            <img
              class="item__bookmark"
              src="/img/ico/bookmark.svg"
              alt="Icono de guardado"
            />
          </router-link>
        </div>
      </section>
    </nav>

    <section id="acciones" class="acciones flex">
      <div v-if="esMovil" class="menu-hamburguesa flex" @click="toggleMenu">
        <img class="menu-icono" :src="iconoMenu" alt="Icono de menú" />
      </div>
      <input
        v-if="buscar"
        id="input-busqueda"
        class="input-busqueda inputForm input"
        type="text"
        placeholder="Buscar..."
      />
      <div class="acciones__container centrado-flex">
        <div class="container__busqueda">
          <img
            class="busqueda__icono"
            :src="iconoLupa"
            alt="Icono de búsqueda"
            @click="buscar = !buscar"
          />
        </div>

        <div v-if="!(esMovil && buscar)" class="container__login">
          <div v-show="!registrado" class="boton-registrarse">
            <router-link to="/perfil/registro" class="centrado-flex">
              Registrarse
            </router-link>
          </div>
          <router-link v-show="registrado" to="/perfil">
            <img
              class="login__icono"
              src="/img/ico/user-naranja.svg"
              alt="Icono de inicio de sesión"
            />
          </router-link>
        </div>
      </div>
    </section>
  </header>
  
</template>

<script>
import Breadcrumb from "/src/components/Breadcrumb.vue";

export default {
  name: "Header",
  components: {
    Breadcrumb,
  },
  data() {
    return {
      menuAbierto: false,
      esMovil: window.innerWidth <= 1024,
      buscar: false,
      registrado: false,
    };
  },
  computed: {
    iconoLogo() {
      if (this.esMovil) {
        return "/img/logo-no-cd.png";
      } else {
        return "/img/logo-no-subtitulo.png";
      }
    },
    iconoMenu() {
      if (this.menuAbierto) {
        return "/img/ico/close.svg";
      } else {
        return "/img/ico/menu-hamburguesa.svg";
      }
    },
    iconoLupa() {
      if (this.buscar) {
        return "/img/ico/close.svg";
      } else {
        return "/img/ico/lupa.svg";
      }
    },
  },
  methods: {
    toggleMenu() {
      this.menuAbierto = !this.menuAbierto;
    },
    actualizarTamano() {
      this.esMovil = window.innerWidth <= 1024;
      if (!this.esMovil) {
        this.menuAbierto = false;
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
