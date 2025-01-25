// Array con el nombre de los archivos que usan la animación
const archivos = ["inicio-sesion.php", "nosotros.php"];

/**
 * Muestra una animación de carga y oculta el contenido mientras la página correspondiente se carga.
 * 
 * - Oculta el loader y muestra el contenido con un retraso de 500 ms.
 * - Solo se ejecuta si el archivo actual está en el array de archivos.
 */
export function mostrarAnimacionYCargarPHP() {
    // Obtener el nombre del archivo actual
    const archivoActual = window.location.pathname.split('/').pop(); // Extrae el nombre del archivo de la URL

    // Comprobar si el archivo actual está en el array
    if (archivos.includes(archivoActual)) {
        const loader = document.getElementById("loader");
        const contenido = document.getElementById("contenido-mostrar");

        // Mostrar el contenido cuando se haya cargado el DOM al completo
        document.addEventListener('DOMContentLoaded', () => {
            // Asegurar la carga del contenido con medio segundo de retraso
            setTimeout(() => {
                loader.style.display = 'none'; // ocultar la animación de carga
                contenido.style.display = 'block';  // mostrar el contenido
            }, 500); // medio segundo
        });
    }
}
