<template>
  <div>
    <!-- Header común -->
    <Header />

    <!-- Contenido principal -->
    <main class="main-content centrado-flex">
      <!-- Animación de carga -->
      <div id="loader" class="loader" v-if="loading"></div>

      <!-- Contenido a mostrar despues del tiempo de carga -->
      <div
        id="contenido-mostrar"
        class="contenido-mostrar flex"
        v-show="!loading"
      >
        <div class="contenedor-titulos">
          <nav class="nav__filtros">
            <form
              id="filtros-form"
              class="flex-column"
              @submit.prevent="filtrarContenido"
            >
              <div class="filtros__generos grid">
                <div
                  v-for="genero in generos"
                  :key="genero.id"
                  class="genero centrado-flex"
                  :class="{
                    'genero-seleccionado': generoSeleccionado === genero.id,
                  }"
                  @click="cambiarGenero(genero.id)"
                >
                  {{ genero.nombre }}
                </div>
              </div>

              <div class="filtros__busqueda flex">
                <label for="busqueda-titulo">
                  <img src="/img/ico/lupa.svg" alt="Buscar película por nombre">
                </label>
                <input
                  type="text"
                  id="busqueda-titulo"
                  class="busqueda__input"
                  v-model="query"
                  @input="filtrarContenido"
                />
              </div>
            </form>
          </nav>

          <section id="peliculas-catalogo" class="titulos__catalogo grid">
            <div
              v-for="pelicula in peliculas"
              :key="pelicula.id"
              class="catalogo__titulo flex-column"
            >
              <img
                :src="'https://image.tmdb.org/t/p/w500/' + pelicula.poster_path"
                alt="Poster de la película"
                class="catalogo__titulo__poster"
              />
              <p class="catalogo__titulo__nombre centrado-flex">
                {{ pelicula.title }}
              </p>

              <!-- Botón para guardar la pelicula -->
              <button
                class="titulo__boton"
                @click="toggleGuardarTitulo(pelicula)"
              >
                <img
                  :src="iconoTituloGuardado(pelicula)"
                  alt="Añadir o quitar título de guardados"
                />
              </button>
            </div>
          </section>

          <div id="pagina-controles" class="pagina-controles centrado-flex">
            <button
              class="button-submit"
              @click="cambiarPagina(paginaActual - 1)"
              :disabled="paginaActual <= 1"
            >
              < Anterior
            </button>
            <div>Página {{ paginaActual }}</div>
            <button
              class="button-submit"
              @click="cambiarPagina(paginaActual + 1)"
            >
              Siguiente >
            </button>
          </div>
        </div>
      </div>
    </main>

    <!-- Footer común -->
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import {
  obtenerTitulos,
  guardarTitulo,
  eliminarTituloGuardado,
  esTituloGuardado,
} from "/src/js/peliculas-series.js";

export default {
  components: { Header, Footer },

  data() {
    return {
      loading: true, // Controla si mostramos el loader o el contenido
      tipo: "movie",
      query: "",
      generoSeleccionado: 0,
      peliculas: [],
      paginaActual: 1,
      generos: [
        { id: 0, nombre: "Todos" },
        { id: 28, nombre: "Acción" },
        { id: 12, nombre: "Aventura" },
        { id: 16, nombre: "Animación" },
        { id: 35, nombre: "Comedia" },
        { id: 80, nombre: "Crimen" },
        { id: 18, nombre: "Drama" },
        { id: 10751, nombre: "Familia" },
        { id: 14, nombre: "Fantasía" },
        { id: 36, nombre: "Historia" },
        { id: 27, nombre: "Terror" },
        { id: 10402, nombre: "Musical" },
        { id: 9648, nombre: "Misterio" },
        { id: 878, nombre: "Ciencia Ficción" },
        { id: 53, nombre: "Suspense" },
        { id: 10752, nombre: "Bélica" },
        { id: 37, nombre: "Western" },
      ],
    };
  },

  methods: {
    async cambiarPagina(pagina) {
      this.paginaActual = pagina;
      window.scrollTo(0, 0);
      await this.cargarContenido();
    },

    async cargarContenido() {
      try {
        this.peliculas = await obtenerTitulos(
          this.tipo,
          this.generoSeleccionado || null,
          this.query || null,
          this.paginaActual,
          this.generoSeleccionado !== 0 || !!this.query
        );
      } catch (error) {
        console.error("Error al cargar las películas", error);
      } finally {
        this.loading = false;
      }
    },

    async cambiarGenero(generoId) {
      this.query = "";
      this.generoSeleccionado = generoId;
      this.paginaActual = 1;
      await this.cargarContenido();
    },

    filtrarContenido() {
      this.paginaActual = 1;
      this.cargarContenido();
    },

    toggleGuardarTitulo(pelicula) {
      if (esTituloGuardado(this.tipo, pelicula)) {
        eliminarTituloGuardado(this.tipo, pelicula);
      } else {
        guardarTitulo(this.tipo, pelicula);
      }
      this.$forceUpdate(); // Fuerza la actualización del icono
    },

    iconoTituloGuardado(pelicula) {
      return esTituloGuardado(this.tipo, pelicula)
        ? "/img/ico/remove.svg"
        : "/img/ico/plus.svg";
    },
  },

  async mounted() {
    await this.cargarContenido();
  },
};
</script>
