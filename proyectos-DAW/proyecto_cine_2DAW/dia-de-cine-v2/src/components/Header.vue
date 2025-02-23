<template>
  <!-- Encabezado -->
  <header class="flex">
    <!-- Sección que contiene el logo y la ruta de navegación (breadcrumb) -->
    <section class="section-logo flex-column">
      <!-- Enlace al inicio con el logo -->
      <router-link to="/">
        <!-- El logo cambia en funcion de la pantalla -->
        <img id="logo" :src="iconoLogo" alt="Logo" />
      </router-link>
      <!-- Componente Breadcrumb para mostrar la navegación -->
      <Breadcrumb />
    </section>

    <!-- Barra de navegación principal -->
    <nav class="header__nav centrado-flex">
      <!-- Contenedor de los elementos del menú, cambia de clase si el menú está abierto 
       (en modo tablet o móvil) -->
      <section
        class="container-nav-items flex"
        :class="{ 'menu-abierto': menuAbierto }"
      >
        <!-- Elementos de navegación a cada sección del sitio web -->
        <div class="nav__item">
          <router-link to="/peliculas" class="centrado-flex font-size-pequenio">
            Películas
          </router-link>
        </div>
        <div class="nav__item">
          <router-link to="/series" class="centrado-flex font-size-pequenio">
            Series
          </router-link>
        </div>
        <div class="nav__item">
          <router-link to="/comunidad" class="centrado-flex font-size-pequenio">
            Comunidad
          </router-link>
        </div>
        <div class="nav__item">
          <router-link to="/nosotros" class="centrado-flex font-size-pequenio">
            Nosotros
          </router-link>
        </div>
        <div class="nav__item">
          <router-link
            to="/mi-espacio"
            class="centrado-flex font-size-pequenio"
          >
            Mi espacio
            <!-- Icono de guardado dentro del enlace -->
            <img
              class="item__bookmark"
              src="/img/ico/bookmark.svg"
              alt="Icono de guardado"
            />
          </router-link>
        </div>
      </section>
    </nav>

    <!-- Sección de acciones (menú móvil, búsqueda y login) -->
    <section id="acciones" class="acciones flex">
      <!-- Menú hamburguesa para dispositivos móviles -->
      <div v-if="esMovil" class="menu-hamburguesa flex" @click="toggleMenu">
        <!-- Icono del menú hamburguesa (cerrar/icono menu) -->
        <img class="menu-icono" :src="iconoMenu" alt="Icono de menú" />
      </div>

      <!-- Campo de búsqueda, se muestra solo si la variable 'buscar' es true -->
      <input
        v-if="buscar"
        id="input-busqueda"
        class="oculto input-busqueda inputForm input"
        type="text"
        placeholder="Buscar..."
      />

      <!-- Contenedor de los iconos de búsqueda e inicio de sesión -->
      <div class="acciones__container centrado-flex">

        <!-- Botón de registro -->
        <div v-if="!buscar" class="container__login">
          <!-- Enlace para registrarse si el usuario no está registrado -->
          <div v-show="!registrado" class="boton-registrarse">
            <router-link to="/perfil/registro" class="centrado-flex">
              Registrarse
            </router-link>
          </div>

          <!-- Icono de usuario si ya está registrado -->
          <router-link v-show="registrado" to="/perfil">
            <img
              class="login__icono"
              src="/img/ico/user-naranja.svg"
              alt="Icono de inicio de sesión"
            />
          </router-link>
        </div>

        <!-- Icono de búsqueda -->
        <div class="oculto container__busqueda">
          <!-- Icono de la lupa (cerrar/buscar) -->
          <img
            class="busqueda__icono"
            :src="iconoLupa"
            alt="Icono de búsqueda"
            @click="buscar = !buscar"
          />
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
      menuAbierto: false, // Menú hamburguesa (abierto/cerrado)
      esMovil: window.innerWidth <= 1024, // Verifica si la pantalla es de un dispositivo móvil
      buscar: false, // Barra de búsqueda (abierta/cerrada)
      registrado: false, // Usuario está registrado o no
    };
  },
  computed: {
    // Cambio del logo según el tipo de pantalla
    iconoLogo() {
      return this.esMovil
        ? "/img/logo-no-cd.png"
        : "/img/logo-no-subtitulo.png";
    },
    // Cambio el icono del menú hamburguesa según su estado
    iconoMenu() {
      return this.menuAbierto
        ? "/img/ico/close.svg"
        : "/img/ico/menu-hamburguesa.svg";
    },
    // Computed property para alternar el icono de la lupa (buscar/cerrar)
    iconoLupa() {
      return this.buscar ? "/img/ico/close.svg" : "/img/ico/lupa.svg";
    },
  },
  methods: {
    // Método para abrir o cerrar el menú hamburguesa
    toggleMenu() {
      this.menuAbierto = !this.menuAbierto;
    },
    // Método que se ejecuta cuando se redimensiona la ventana
    actualizarTamano() {
      this.esMovil = window.innerWidth <= 1024; // Verifica si sigue siendo un dispositivo móvil
      if (!this.esMovil) {
        this.menuAbierto = false; // Cierra el menú si la pantalla es más grande
      }
    },
  },
  mounted() {
    // Se añade un evento 'resize' para detectar cambios en el tamaño de la pantalla
    window.addEventListener("resize", this.actualizarTamano);
  },
  beforeUnmount() {
    // Se elimina el evento 'resize' al desmontar el componente para evitar fugas de memoria
    window.removeEventListener("resize", this.actualizarTamano);
  },
};
</script>
