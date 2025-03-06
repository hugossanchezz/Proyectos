// Importar la función para obtener el idioma desde la cookie
import { cargarIdioma } from "/src/js/idioma.js";

// Clave de la API de NewsAPI
const NEWS_API_KEY = '12d3de27068f4d33bf495c62d24a5fc8';

// Función para construir la URL con el idioma dinámico
function construirUrl() {
  const idioma = cargarIdioma(); // Obtener el idioma desde la cookie
  const baseUrl = 'https://newsapi.org/v2/everything';
  const query = 'q=cine%20estrenos%20actores'; // Consulta de ejemplo
  const apiKey = `apiKey=${NEWS_API_KEY}`;
  const language = `language=${idioma}`;

  if (import.meta.env.MODE === 'development') {
    return `/api/v2/everything?q=cine%20estrenos%20actores&apiKey=${NEWS_API_KEY}&language=${idioma}`;
  } else {
    return `${baseUrl}?${query}&${apiKey}&${language}`;
  }
}

// Función para obtener las noticias
async function obtenerNoticias() {
  const url = construirUrl();

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Error en la conexión con la API');
    }
    const data = await response.json();
    return data.articles && data.articles.length > 0 ? data.articles : [];
  } catch (error) {
    console.error('Error obteniendo noticias:', error);
    return []; // Retorna un array vacío si ocurre un error
  }
}

// Función para barajar el array de noticias
export function barajarArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Intercambiar elementos
  }
  return array;
}

// Función para mostrar las noticias en la página
export async function mostrarNoticias(numNoticias) {
  const noticiasOriginal = await obtenerNoticias();
  if (noticiasOriginal.length === 0) {
    document.getElementById('noticias-container').innerHTML = '<p class="no-noticias">No se encontraron noticias. <strong>No disponemos de noticias en Inglés. We don\'t have news in English</strong></p>';
    return; // Si no hay noticias, mostrar un mensaje
  }

  const noticias = barajarArray(noticiasOriginal);
  const contenedorNoticias = document.getElementById('noticias-container');
  contenedorNoticias.innerHTML = ''; // Limpiar contenido previo
  const noticiasLimitadas = noticias.slice(0, numNoticias); // Limitar a las primeras "numNoticias"

  noticiasLimitadas.forEach(noticia => {
    const card = document.createElement('div');
    card.classList.add('card-noticia-estreno', 'card-hover');
    card.addEventListener('click', () => {
      window.open(noticia.url, '_blank'); // Abrir noticia en nueva pestaña
    });

    const titulo = document.createElement('h3');
    titulo.textContent = noticia.title || 'Título de la noticia';

    const imagen = document.createElement('img');
    imagen.src = noticia.urlToImage || '/img/noticias/noticia-stock.jpg';
    imagen.onerror = () => {
      imagen.src = '/img/noticias/noticia-stock.jpg'; // Imagen por defecto si hay error
    };
    imagen.alt = noticia.title || 'Imagen de la noticia';
    imagen.classList.add('img-noticia');

    const descripcion = document.createElement('p');
    descripcion.textContent = noticia.description || 'Descripción no disponible';

    card.appendChild(imagen);
    card.appendChild(titulo);
    card.appendChild(descripcion);
    contenedorNoticias.appendChild(card);
  });
}
