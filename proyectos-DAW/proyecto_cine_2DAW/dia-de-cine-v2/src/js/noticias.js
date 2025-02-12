// noticias.js

// Clave de la API de NewsAPI 
const NEWS_API_KEY = '12d3de27068f4d33bf495c62d24a5fc8';
//const url = `https://newsapi.org/v2/everything?q=cine%20estrenos%20actores&apiKey=${NEWS_API_KEY}&language=es`;

let url;

// el objeto import.meta.env.MODE de Vite nos indica en qué modo está corriendo la aplicación (development o production)
if (import.meta.env.MODE === 'development') {
  // En desarrollo, usa el proxy de Vite
  url = `/api/v2/everything?q=cine%20estrenos%20actores&apiKey=${NEWS_API_KEY}&language=es`;
} else {
  // En producción, usa la URL de la API real
  url = `/api/v2/everything?q=cine%20estrenos%20actores&apiKey=${NEWS_API_KEY}&language=es`;
}

/**
 * Realiza una solicitud a la API de NewsAPI para obtener noticias sobre cine,estrenos...,
 * y si la respuesta es correcta, retorna los artículos en formato de array.
 * Si ocurre algún error en la conexión o el parseo de la respuesta, se lanza un error.
 * @returns {Promise<[]>} Un array de artículos con noticias sobre cine (estrenos).
 */
async function obtenerNoticias() {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Error en la conexión con la API');
    }

    const data = await response.json();

    if (data.articles && data.articles.length > 0) {
      return data.articles;  // Retorna los artículos
    }

    return [];
  } catch (error) {
    console.error('Error obteniendo noticias:', error);
    return [];
  }
}

/**
 * Baraja un array de noticias en su lugar utilizando el algoritmo de Fisher-Yates.
 *
 * Esta función toma un array de noticias como entrada y mezcla aleatoriamente sus elementos
 * iterando a través del array desde el último elemento hasta el primero,
 * intercambiando cada elemento con un elemento aleatorio que venga antes de él,
 * incluyendo el mismo.
 *
 * @param {Array} array - El array de items que se va a barajar.
 * @returns {Array} El array de noticias barajado.
 */
export function barajarArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    // Elegir un índice aleatorio entre 0 y i
    const j = Math.floor(Math.random() * (i + 1));

    // Intercambiar elementos en las posiciones i y j
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
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
export async function mostrarNoticias(numNoticias) {
  // Obtener las noticias en un array
  const noticiasOriginal = await obtenerNoticias(); // Usar await aquí ya que no sabemos cuanto tardará en obtener todas las noticias

  // Barajamos el array para que no salgan las noticias en el mismo orden
  const noticias = barajarArray(noticiasOriginal);

  // Seleccionamos el contenedor donde se mostrarán las noticias
  const contenedorNoticias = document.getElementById('noticias-container');

  // Limpiamos cualquier contenido previo
  contenedorNoticias.innerHTML = '';

  // Limitamos el número de noticias que se mostrarán 
  const noticiasLimitadas = noticias.slice(0, numNoticias);

  noticiasLimitadas.forEach(noticia => {
    const card = document.createElement('div');
    card.classList.add('card', 'card-hover');

    // Redirigir a la notica completa al hacer clic en la card
    card.addEventListener('click', () => {
      window.open(noticia.url, '_blank'); // Abrir en nueva pestaña
    });

    const titulo = document.createElement('h3');
    titulo.textContent = noticia.title || 'Título de la noticia';


    const imagen = document.createElement('img');
    imagen.src = noticia.urlToImage || '/img/noticias/noticia-stock.jpg';

    // Si la imagen no carga, usar la de stock
    imagen.onerror = () => {
      imagen.src = '/img/noticias/noticia-stock.jpg';
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