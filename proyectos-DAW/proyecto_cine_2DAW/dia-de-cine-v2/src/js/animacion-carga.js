// Array con las rutas que usan la animación
const rutasConAnimacion = ["/","/temporal", "/nosotros", "/peliculas", "/series", "/mi-espacio", "/inicio-sesion"];

/**
 * Muestra una animación de carga y oculta el contenido mientras la vista correspondiente se carga.
 * 
 * - Oculta el loader y muestra el contenido con un tiempo de retraso.
 * - Solo se ejecuta si la ruta actual está en el array de rutas.
 */
export function mostrarAnimacionYCargarVue() {
    // Obtener la ruta actual
    const rutaActual = window.location.pathname;

    // Comprobar si la ruta actual está en el array
    if (rutasConAnimacion.includes(rutaActual)) {
        const loader = document.getElementById("loader");
        const contenido = document.getElementById("contenido-mostrar");

        // Mostrar el contenido cuando se haya cargado el DOM al completo
        document.addEventListener('DOMContentLoaded', () => {
            // Asegurar la carga del contenido
            setTimeout(() => {
                loader.style.display = 'none'; // ocultar la animación de carga
                contenido.style.display = 'block';  // mostrar el contenido
            }, 300); // tiempo de retraso
        });
    }
}
