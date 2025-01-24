/**
 * Muestra una animación de carga y oculta el contenido mientras la página "inicio-sesion.php" se carga.
 * 
 * - Oculta el loader y muestra el contenido con un retraso de 500 ms.
 * - Solo se ejecuta si el archivo actual es "inicio-sesion.php".
 */
export function mostrarAnimacionYCargarPHP() {
    // Comprobar si estamos en el archivo "inicio-sesion.php"
    if (window.location.pathname.endsWith('inicio-sesion.php')) {
        const loader = document.getElementById("loader");
        const contenido = document.getElementById("contenido-mostrar");

        // Mostrar el contenido cuando se haya cargado el DOM al completo
        document.addEventListener('DOMContentLoaded', () => {
            // Asegurar la carga del contenido con medio segundo de retraso
            setTimeout(() => {
                loader.style.display = 'none'; // ocultar la animación de carga
                contenido.style.display = 'block';  // mostrar el contenido
            }, 500); // medio segundo
        });
    }
}

