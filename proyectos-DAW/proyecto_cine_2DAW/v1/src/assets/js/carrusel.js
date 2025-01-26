// carrusel.js

// Importar la función obtenerLogoFranquicia desde api.js
import { obtenerLogoFranquicia } from './api.js';

/**
 * Carga el carrusel de franquicias en el contenedor que se pasa como parámetro.
 * El carrusel se llena con los logos de las franquicias que se encuentran en la lista
 * y se repite dos veces, para el efecto inifinito con css.
 * 
 * @param {HTMLElement} carruselContainer - El contenedor que debe contener el carrusel.
 */
export async function cargarCarrusel(carruselContainer) {
    // Lista de franquicias que se mostrarán en el carrusel
    const franquicias = [
        'los juegos del hambre',
        'harry potter',
        'el padrino',
        'rápido y furioso',
        'parque jurásico',
        'piratas del caribe',
        'james bond',
        'shrek',
        'el señor de los anillos',
        'la guerra de las galaxias',
        'matrix',
        'deadpool',
        'los guardianes de la galaxia',
        'la liga de la justicia',
        'escuadrón suicida',
        'buscando a nemo',
        'toy story',
        'monstruos, inc.',
    ];

    // Repetir el carrusel dos veces (esto es para hacer que el carrusel sea más largo)
    for (let i = 0; i < 2; i++) {
        // Iterar sobre cada franquicia de la lista
        for (const franquicia of franquicias) {
            // Llamamos a la función para obtener el logo de la franquicia
            const logoUrl = await obtenerLogoFranquicia(franquicia);

            // Si conseguimos un logo (la URL no es null), procedemos a mostrarlo
            if (logoUrl) {
                // Crear un nuevo div que contendrá la imagen del logo
                const itemDiv = document.createElement('div');
                // Añadimos clases para dar formato, como 'carrusel__item' para el estilo y 'flex' para organizar los elementos
                itemDiv.classList.add('carrusel__item');
                itemDiv.classList.add('flex');

                // Crear un elemento <img> para la imagen del logo
                const imgElement = document.createElement('img');
                // Asignamos la URL del logo a la propiedad 'src' de la imagen
                imgElement.src = logoUrl;
                // Asignamos un texto alternativo para la imagen (esto es bueno para accesibilidad)
                imgElement.alt = franquicia;

                // Agregamos la imagen al div
                itemDiv.appendChild(imgElement);
                // Finalmente, añadimos el div con la imagen al contenedor del carrusel
                carruselContainer.appendChild(itemDiv);
            }
        }
    }
}