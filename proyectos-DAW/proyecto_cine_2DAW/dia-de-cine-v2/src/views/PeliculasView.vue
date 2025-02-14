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
        <div class="contenedor-peliculas">
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
                <div class="filtros__busqueda__nombre flex">
                  <label for="busqueda-nombre-titulo"
                    >¿Sabes qué película buscar?</label
                  >
                  <input
                    type="text"
                    id="busqueda-nombre-titulo"
                    class="busqueda__input"
                    v-model="query"
                    @input="filtrarContenido"
                  />
                </div>
              </div>
            </form>
          </nav>

          <section id="peliculas-catalogo" class="peliculas__catalogo grid">
            <div
              v-for="pelicula in peliculas"
              :key="pelicula.id"
              class="catalogo__pelicula flex-column"
            >
              <img
                :src="'https://image.tmdb.org/t/p/w500/' + pelicula.poster_path"
                alt="Poster de la película"
                class="catalogo__pelicula__poster"
              />
              <p class="catalogo__pelicula__nombre">{{ pelicula.title }}</p>
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
            <button class="button-submit" @click="cambiarPagina(paginaActual + 1)">
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
  obtenerPeliculasConFiltro,
  obtenerPeliculasSinFiltro,
} from "/src/js/peliculas-series.js";

export default {
  components: { Header, Footer },

  data() {
    return {
      loading: true,
      query: "",
      generoSeleccionado: 0, // "Todos" seleccionado por defecto
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
      await this.cargarContenido();
      // Desplazar a la parte superior de la página
      window.scrollTo(0, 0);
    },

    async cargarContenido() {
      try {
        // Se recarga el contenido dependiendo del filtro activo (género y/o búsqueda)
        this.peliculas = await this.obtenerPeliculas();
      } catch (error) {
        console.error("Error al cargar las películas", error);
      } finally {
        this.loading = false;
      }
    },

    async obtenerPeliculas() {
      // Si hay filtro de género o búsqueda, se obtiene con filtro
      if (this.generoSeleccionado || this.query) {
        return await obtenerPeliculasConFiltro(
          this.generoSeleccionado,
          this.query,
          this.paginaActual
        );
      } else {
        // Si no hay filtro, se obtiene sin filtro
        return await obtenerPeliculasSinFiltro(this.paginaActual);
      }
    },

    async cambiarGenero(generoId) {
      this.generoSeleccionado = generoId;
      this.paginaActual = 1;
      await this.cargarContenido();
    },

    filtrarContenido() {
      // Al filtrar, siempre se vuelve a la primera página
      this.paginaActual = 1;
      this.cargarContenido();
    },
  },

  async mounted() {
    await this.cargarContenido();
  },
};
</script>
