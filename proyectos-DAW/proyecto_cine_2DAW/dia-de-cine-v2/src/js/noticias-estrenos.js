// noticias.js

// Clave de la API de NewsAPI 
const NEWS_API_KEY = '12d3de27068f4d33bf495c62d24a5fc8';

// URL de la API para obtener noticias sobre cine (filtradas por categoría de entretenimiento)
const url = `https://newsapi.org/v2/everything?q=cine%20estrenos%20actores&apiKey=${NEWS_API_KEY}&language=es`;

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
 * @param {Array} noticias - El array de noticias que se va a barajar.
 * @returns {Array} El array de noticias barajado.
 */
function barajarArray(noticias) {
  for (let i = noticias.length - 1; i > 0; i--) {
    // Elegir un índice aleatorio entre 0 y i
    const j = Math.floor(Math.random() * (i + 1));

    // Intercambiar elementos en las posiciones i y j
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
  const noticiasOriginal = await obtenerNoticias(); // Usar await aquí ya que no sabemos cuanto tardará en obtener todas las noticias

  // Barajamos el array para que no salgan las noticias en el mismo orden
  const noticias = barajarArray(noticiasOriginal);

  // Array que almacena los tamaños de pantalla y el número de noticias a mostrar
  const tamaños = [
    { ancho: 1440, noticias: 36 },
    { ancho: 1024, noticias: 24 },
    { ancho: 425, noticias: 18 },
    { ancho: 375, noticias: 12 },
    { ancho: 320, noticias: 6 },
  ];

  // Número de noticias a mostrar según el tamaño de la pantalla del usuario
  let NUM_NOTICIAS = tamaños.find(t => window.innerWidth > t.ancho)?.noticias || 6;

  // Seleccionamos el contenedor donde se mostrarán las noticias
  const contenedorNoticias = document.getElementById('noticias-container');

  // Limpiamos cualquier contenido previo
  contenedorNoticias.innerHTML = '';

  // Limitamos el número de noticias que se mostrarán 
  const noticiasLimitadas = noticias.slice(0, NUM_NOTICIAS);

  noticiasLimitadas.forEach(noticia => {
    const card = document.createElement('div');
    card.classList.add('card', 'card-hover');
  
    // Redirigir a la notica completa al hacer clic en la card
    card.addEventListener('click', () => {
      window.open(noticia.url, '_blank'); // Abrir en nueva pestaña
    });
  
    const titulo = document.createElement('h3');
    titulo.textContent = noticia.title || 'Título de la noticia';
  
    const descripcion = document.createElement('p');
    descripcion.textContent = noticia.description || 'Descripción no disponible';
  
    const imagen = document.createElement('img');
    imagen.src = noticia.urlToImage || 'https://via.placeholder.com/150';
    imagen.alt = noticia.title || 'Imagen de la noticia';
    imagen.classList.add('img-noticia');
  
    card.appendChild(imagen);
    card.appendChild(titulo);
    card.appendChild(descripcion);
  
    contenedorNoticias.appendChild(card);
  });
  
  
}

export function recargarNoticias() {
  location.reload();  // Recargar la página actual, el array de noticias se reordenará
}

import { estrenos2025 } from "./lista-estrenos";

// Mostrar los estrenos de 2025
export function mostrarEstrenos() {
  const contenedorEstrenos = document.getElementById('estrenos-container');

  //Barajamos el array de estrenos y seleccionamos los 9 primeros
  const estrenos2025Barajados = barajarArray(estrenos2025);
  const estrenos2025Limitados = estrenos2025Barajados.slice(0, 9);

  estrenos2025Limitados.forEach(pelicula => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.classList.add('estreno');


    const imagen = document.createElement('img');
    imagen.src = pelicula.cartelera || 'https://via.placeholder.com/150';
    imagen.alt = pelicula.titulo || 'Imagen de la película';
    imagen.classList.add('img-estreno');

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
