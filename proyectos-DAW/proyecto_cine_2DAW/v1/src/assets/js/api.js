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
 * @param {string} franquicia - El nombre de la franquicia a buscar.
 * @returns {Promise<string|null>} La URL completa del logo de la franquicia,
 * o null si no se encuentra ningún logo o si ocurre un error.
 */

export async function obtenerLogoFranquicia(franquicia) {

    // Se crea la URL de la solicitud con la clave API y la franquicia, codificando el nombre de la franquicia para que sea válido en la URL
    const url = `https://api.themoviedb.org/3/search/collection?api_key=${TMDB_API_KEY}&language=es&query=${encodeURIComponent(franquicia)}`;

    try {
        // Realizamos la solicitud HTTP a la API de TMDb usando fetch
        const response = await fetch(url);

        // Si la respuesta no es correcta (código de estado 200), lanzamos un error
        if (!response.ok) {
            throw new Error('Error en la conexión con la API');
        }

        // Convertimos la respuesta en formato JSON
        const data = await response.json();

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
