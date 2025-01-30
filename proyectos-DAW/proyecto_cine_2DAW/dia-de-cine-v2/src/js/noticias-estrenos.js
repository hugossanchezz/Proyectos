const NEWS_API_KEY = '12d3de27068f4d33bf495c62d24a5fc8';
const url = `https://newsapi.org/v2/everything?q=cine%20estrenos%20actores&apiKey=${NEWS_API_KEY}&language=es`;

async function obtenerNoticias() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Error en la conexión con la API');
    }
    const data = await response.json();
    return data.articles || [];
  } catch (error) {
    console.error('Error obteniendo noticias:', error);
    return [];
  }
}

function barajarArray(noticias) {
  for (let i = noticias.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [noticias[i], noticias[j]] = [noticias[j], noticias[i]];
  }
  return noticias;
}

/**
 * Muestra las noticias en el contenedor con id noticias-container.
 * Obtendremos las noticias de la API News API y las mostraremos en un
 * contenedor con una limitación de 30 noticias.
 * Las noticias se mostrarán en orden aleatorio.
 * Se utiliza la función obtenerNoticias para obtener las noticias de la API.
 * Se utiliza la función barajarArray para barajar las noticias y
 * mostrarlas en orden aleatorio.
 */
export async function mostrarNoticias() {
  // Obtener las noticias en un array
  const noticiasOriginal = await obtenerNoticias(); // Usar await aquí

  // Barajamos el array para que no salgan las noticias en el mismo orden
  const noticias = barajarArray(noticiasOriginal);

  const NUM_NOTICIAS = 21; // Número de noticias a mostrar

  // Seleccionamos el contenedor donde se mostrarán las noticias
  const contenedorNoticias = document.getElementById('noticias-container');

  // Limitamos el número de noticias que se mostrarán 
  const noticiasLimitadas = noticias.slice(0, NUM_NOTICIAS);

  noticiasLimitadas.forEach(noticia => {
    const card = document.createElement('div');
    card.classList.add('card');

    const titulo = document.createElement('h3');
    titulo.textContent = noticia.title || 'Título de la noticia';

    const descripcion = document.createElement('p');
    descripcion.textContent = noticia.description || 'Descripción no disponible';

    const imagen = document.createElement('img');
    imagen.src = noticia.urlToImage || 'https://via.placeholder.com/150';
    imagen.alt = noticia.title || 'Imagen de la noticia';

    card.appendChild(imagen);
    card.appendChild(titulo);
    card.appendChild(descripcion);

    contenedorNoticias.appendChild(card);
  });

  // Mostrar el contenido
  document.getElementById('loader').style.display = 'none';
  document.getElementById('contenido-mostrar').style.display = 'flex';
}

export function recargarNoticias() {
  location.reload();  // Recargar la página actual, el array de noticias se reordenará
}

import { estrenos2025 } from "./lista-estrenos";

// Mostrar los estrenos de 2025
export function mostrarEstrenos() {
  const contenedorEstrenos = document.getElementById('estrenos-container');

  estrenos2025.forEach(pelicula => {
    const card = document.createElement('div');
    card.classList.add('card');

    const imagen = document.createElement('img');
    imagen.src = pelicula.cartelera || 'https://via.placeholder.com/150';
    imagen.alt = pelicula.titulo || 'Imagen de la película';

    const titulo = document.createElement('h3');
    titulo.textContent = pelicula.titulo || 'Título de la película';

    const fechaEstreno = document.createElement('p');
    fechaEstreno.textContent = pelicula.fechaEstreno || 'Fecha de estreno no disponible';

    const descripcion = document.createElement('p');
    descripcion.textContent = pelicula.descripcion || 'Descripción no disponible';

    card.appendChild(imagen);
    card.appendChild(titulo);
    card.appendChild(fechaEstreno);
    card.appendChild(descripcion);

    contenedorEstrenos.appendChild(card);
  });
}
