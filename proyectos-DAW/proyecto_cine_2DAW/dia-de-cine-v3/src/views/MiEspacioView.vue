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
        <div class="mi-espacio-container flex-column">
          <!-- Películas guardadas -->
          <h1>Películas guardadas</h1>
          <div class="contenedor-titulos">
            <div v-if="peliculasFavoritas.length === 0">
              No hay películas guardadas.
            </div>
            <div v-else class="mi-espacio__titulos grid">
              <div
                v-for="pelicula in peliculasFavoritas"
                :key="pelicula.id"
                class="catalogo__titulo flex-column"
              >
                <img
                  :src="
                    'https://image.tmdb.org/t/p/w500/' + pelicula.poster_path
                  "
                  alt="Poster de la película"
                  class="catalogo__titulo__poster"
                />
                <p class="catalogo__titulo__nombre centrado-flex">
                  {{ pelicula.title }}
                </p>
                <!-- Botón para guardar la película -->
                <button
                  class="titulo__boton"
                  @click="toggleGuardarTitulo(pelicula, 'movie')"
                >
                  <img
                    :src="iconoTituloGuardado(pelicula, 'movie')"
                    alt="Añadir o quitar título de guardados"
                  />
                </button>
              </div>
            </div>
          </div>

          <!-- Series guardadas -->
          <h1>Series guardadas</h1>
          <div class="contenedor-titulos">
            <div v-if="seriesFavoritas.length === 0">
              No hay series guardadas.
            </div>
            <div v-else class="mi-espacio__titulos grid">
              <div
                v-for="serie in seriesFavoritas"
                :key="serie.id"
                class="catalogo__titulo flex-column"
              >
                <img
                  :src="'https://image.tmdb.org/t/p/w500/' + serie.poster_path"
                  alt="Poster de la serie"
                  class="catalogo__titulo__poster"
                />
                <p class="catalogo__titulo__nombre centrado-flex">
                  {{ serie.title }}
                </p>
                <!-- Botón para guardar la serie -->
                <button
                  class="titulo__boton"
                  @click="toggleGuardarTitulo(serie, 'tv')"
                >
                  <img
                    :src="iconoTituloGuardado(serie, 'tv')"
                    alt="Añadir o quitar título de guardados"
                  />
                </button>
              </div>
            </div>
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
  obtenerTitulosGuardados,
  esTituloGuardado,
  guardarTitulo,
  eliminarTituloGuardado,
} from "/src/js/peliculas-series.js";

export default {
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      loading: true, // Controla si mostramos el loader o el contenido
      peliculasFavoritas: [],
      seriesFavoritas: [],
    };
  },
  mounted() {
    this.cargarContenido();
    this.cargarTitulosGuardados();
  },
  methods: {
    cargarContenido() {
      setTimeout(() => {
        this.loading = false; // ocultamos el loader y mostramos el contenido
      }, 300); // aseguramos que cargue
    },

    cargarTitulosGuardados() {
      const { peliculas, series } = obtenerTitulosGuardados();
      this.peliculasFavoritas = peliculas;
      this.seriesFavoritas = series;
    },

    toggleGuardarTitulo(titulo, tipo) {
      if (esTituloGuardado(tipo, titulo)) {
        eliminarTituloGuardado(tipo, titulo);
      } else {
        guardarTitulo(tipo, titulo);
      }
      this.cargarTitulosGuardados(); // Recargar los títulos guardados
    },

    iconoTituloGuardado(titulo, tipo) {
      return esTituloGuardado(tipo, titulo)
        ? "/img/ico/remove.svg"
        : "/img/ico/plus.svg";
    },
  },
};
</script>
