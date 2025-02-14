const TMDB_API_KEY = 'c365316d4b5cda699202511cd0f0c9fe';

// Función para obtener películas mejor valoradas (top-rated) con filtros (género o nombre)
export async function obtenerPeliculasConFiltro(generoId, nombre, pagina) {
  try {
    let url = `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&language=es-ES&page=${pagina}&without_genres=10749`;

    if (generoId) {
      url += `&with_genres=${generoId}`;
    }

    if (nombre) {
      url += `&query=${encodeURIComponent(nombre)}`;
    }

    const response = await fetch(url);
    const data = await response.json();

    if (data.results) {
      const peliculas = data.results.map(pelicula => ({
        id: pelicula.id,
        title: pelicula.title || pelicula.original_title,
        vote_average: pelicula.vote_average,
        poster_path: pelicula.poster_path,
        overview: pelicula.overview,
        release_date: pelicula.release_date,
      }));

      // Ordenar las películas por puntuación (vote_average) de mayor a menor
      peliculas.sort((a, b) => b.vote_average - a.vote_average);

      return peliculas;
    } else {
      throw new Error("No se obtuvieron resultados");
    }
  } catch (error) {
    console.error("Error al obtener películas con filtro:", error);
    throw error;
  }
}

// Función para obtener películas mejor valoradas (top-rated) sin filtro
export async function obtenerPeliculasSinFiltro(pagina) {
  try {
    const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${TMDB_API_KEY}&language=es-ES&page=${pagina}&include_adult=false`;
    const response = await fetch(url);
    const data = await response.json();

    if (data.results) {
      const peliculas = data.results.map(pelicula => ({
        id: pelicula.id,
        title: pelicula.title || pelicula.original_title,
        vote_average: pelicula.vote_average,
        poster_path: pelicula.poster_path,
        overview: pelicula.overview,
        release_date: pelicula.release_date,
      }));

      // Ordenar las películas por puntuación (vote_average) de mayor a menor
      peliculas.sort((a, b) => b.vote_average - a.vote_average);

      return peliculas;
    } else {
      throw new Error("No se obtuvieron resultados");
    }
  } catch (error) {
    console.error("Error al obtener películas mejor valoradas:", error);
    throw error;
  }
}

// Función para obtener películas mejor valoradas (top-rated) con paginación
export async function obtenerPaginacion(pagina) {
  try {
    const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${TMDB_API_KEY}&language=es-ES&page=${pagina}&include_adult=false`;
    const response = await fetch(url);
    const data = await response.json();

    if (data.results) {
      const peliculas = data.results.map(pelicula => ({
        id: pelicula.id,
        title: pelicula.title || pelicula.original_title,
        vote_average: pelicula.vote_average,
        poster_path: pelicula.poster_path,
        overview: pelicula.overview,
        release_date: pelicula.release_date,
      }));

      // Ordenar las películas por puntuación (vote_average) de mayor a menor
      peliculas.sort((a, b) => b.vote_average - a.vote_average);

      return peliculas;
    } else {
      throw new Error("No se obtuvieron resultados");
    }
  } catch (error) {
    console.error("Error al obtener paginación de películas:", error);
    throw error;
  }
}
