// Estrenos del aside

import { estrenos2025 } from "./lista-estrenos";
import { barajarArray } from "./noticias.js";

// Mostrar los estrenos de 2025
export function mostrarEstrenos(numEstrenos) {
  const contenedorEstrenos = document.getElementById('estrenos-container');

  //Barajamos el array de estrenos y seleccionamos los 9 primeros
  const estrenos2025Barajados = barajarArray(estrenos2025);
  const estrenos2025Limitados = estrenos2025Barajados.slice(0, numEstrenos);

  estrenos2025Limitados.forEach(pelicula => {
    const card = document.createElement('div');
    card.classList.add('card-noticia-estreno');
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