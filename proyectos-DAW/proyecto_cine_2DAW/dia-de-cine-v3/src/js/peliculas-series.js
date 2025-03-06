import { cargarIdioma } from "/src/js/idioma.js";

const TMDB_API_KEY = 'c365316d4b5cda699202511cd0f0c9fe';

// Obtener el idioma de la cookie
const idioma = cargarIdioma();

export async function obtenerTitulos(tipoTitulo, generoId = null, nombre = null, pagina = 1, filtrar = false) {

  try {
    let url;

    if (nombre) {
      url = `https://api.themoviedb.org/3/search/${tipoTitulo}?api_key=${TMDB_API_KEY}&language=${idioma}&page=${pagina}&include_adult=false&query=${encodeURIComponent(nombre)}`;
    } else if (filtrar) {
      url = `https://api.themoviedb.org/3/discover/${tipoTitulo}?api_key=${TMDB_API_KEY}&language=${idioma}&page=${pagina}&include_adult=false&without_genres=10749`;
      if (generoId) url += `&with_genres=${generoId}`;
    } else {
      url = `https://api.themoviedb.org/3/${tipoTitulo}/top_rated?api_key=${TMDB_API_KEY}&language=${idioma}&page=${pagina}&include_adult=false`;
    }

    const response = await fetch(url);
    if (!response.ok) throw new Error(`Error en la API: ${response.statusText}`);

    const data = await response.json();
    if (!data.results) throw new Error('No se obtuvieron resultados de la API');

    return data.results.map(({ id, title, name, vote_average, poster_path, overview, release_date, first_air_date }) => ({
      id,
      title: title || name,
      vote_average,
      poster_path,
      overview,
      release_date: release_date || first_air_date,
    }));
  } catch (error) {
    console.error('Error al obtener títulos:', error);
    throw error;
  }
}

// Método para comprobar si el título ya está guardado
export function esTituloGuardado(tipo, titulo) {
  const guardados = JSON.parse(localStorage.getItem('guardados')) || { peliculas: [], series: [] };
  let lista;

  if (tipo === 'movie') {
    lista = guardados.peliculas;
  } else {
    lista = guardados.series;
  }

  // Verifica si el título ya está guardado (devuelve true o false)
  return lista.some(item => item.id === titulo.id);
}

export function guardarTitulo(tipo, titulo) {
  const guardados = JSON.parse(localStorage.getItem('guardados')) || { peliculas: [], series: [] };
  let lista;

  if (tipo === 'movie') {
    lista = guardados.peliculas;
  } else {
    lista = guardados.series;
  }

  // Usa el método independiente para verificar si el título ya está guardado
  if (esTituloGuardado(tipo, titulo)) {
    return console.log('El título ya está en favoritos');
  }

  // Si no está guardado, lo agregamos
  const nuevoTitulo = {
    id: titulo.id,
    title: titulo.title,
    vote_average: titulo.vote_average,
    poster_path: titulo.poster_path,
    overview: titulo.overview,
    release_date: titulo.release_date || titulo.first_air_date,
  };

  lista.push(nuevoTitulo);
  localStorage.setItem('guardados', JSON.stringify(guardados));
}

export function eliminarTituloGuardado(tipo, titulo) {
  const guardados = JSON.parse(localStorage.getItem('guardados')) || { peliculas: [], series: [] };
  let lista;

  if (tipo === 'movie') {
    lista = guardados.peliculas;
  } else {
    lista = guardados.series;
  }

  // Filtramos para eliminar el título seleccionado
  guardados[tipo === 'movie' ? 'peliculas' : 'series'] = lista.filter(item => item.id !== titulo.id);

  localStorage.setItem('guardados', JSON.stringify(guardados));
}

export function obtenerTitulosGuardados() {
  return JSON.parse(localStorage.getItem('guardados')) || { peliculas: [], series: [] };
}
