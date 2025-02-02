// carrusel.js

// Clave de la API de TMDb
const TMDB_API_KEY = 'c365316d4b5cda699202511cd0f0c9fe';

/**
 * Obtiene el logo de una franquicia desde la API de TMDb.
 *
 * Realiza una solicitud a la API de TMDb para buscar la colección
 * asociada al nombre de la franquicia proporcionada. Si existe al menos
 * una colección y contiene una imagen de portada (poster_path), retorna
 * la URL completa de la imagen.
 * 
 * El uso de async se utiliza para indicar que la función asíncrona, lo que permite
 * las conexiones asíncronas (llamadas a la API).
 *
 * @param {string} franquicia - El nombre de la franquicia a buscar.
 * @returns {Promise<string|null>} La URL completa del logo de la franquicia,
 * o null si no se encuentra ningún logo o si ocurre un error.
 */
async function obtenerLogoFranquicia(franquicia) {

    // Se crea la URL de la solicitud con la clave API y la franquicia, codificando el nombre de la franquicia para que sea válido en la URL
    const url = `https://api.themoviedb.org/3/search/collection?api_key=${TMDB_API_KEY}&language=es&query=${encodeURIComponent(franquicia)}`;

    try {
        // Realizamos la solicitud HTTP a la API de TMDb usando fetch
        // await se utiliza para esperar a que la solicitud se complete
        const respuesta = await fetch(url);

        // Si la respuesta no es correcta (código de estado entre 200 y 299), lanzamos un error
        if (!respuesta.ok) {
            throw new Error('Error en la conexión con la API');
        }

        // Convertimos la respuesta en formato JSON
        const data = await respuesta.json();

        // Verificamos si hay resultados en la respuesta y que al menos haya una colección
        if (data.results && data.results.length > 0) {
            // Tomamos la primera colección de la respuesta (si hay más de una, solo se utiliza la primera)
            const collection = data.results[0];

            // Si la colección tiene un 'poster_path' (que es la ruta de la imagen), retornamos la URL completa de la imagen
            if (collection.poster_path) {
                return `https://image.tmdb.org/t/p/w500${collection.poster_path}`;
            }
        }

        // Si no hay imagen o hay algún problema, retornamos null
        return null;
    } catch (error) {
        // Si ocurre algún error (por ejemplo, en la conexión a la API), lo mostramos en la consola y retornamos null
        console.error(error);
        return null;
    }
}

/**
 * Carga el carrusel de franquicias en el contenedor que se pasa como parámetro.
 * El carrusel se llena con los logos de las franquicias que se encuentran en la lista
 * y se repite dos veces, para el efecto inifinito con css.
 */
export async function mostrarCarrusel() {
    // Lista de franquicias que se mostrarán en el carrusel
    const franquicias = [
        'los juegos del hambre',
        'harry potter',
        'el padrino',
        'rápido y furioso',
        'parque jurásico',
        'cars',
        'piratas del caribe',
        'james bond',
        'shrek',
        'john wick',
        'el señor de los anillos',
        'la guerra de las galaxias',
        'matrix',
        'saw',
        'deadpool',
        'los vengadores',
        'los guardianes de la galaxia',
        'escuadrón suicida',
        'el hobbit',
        'buscando a nemo',
        'toy story',
        'monstruos, inc.',
        'kill bill',
        'mad max',
        'misión imposible',
        'el planeta de los simios',
    ];

    const carruselContainer = document.getElementById('carrusel__items');

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