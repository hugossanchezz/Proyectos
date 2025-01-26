// Animación de carga
import { mostrarAnimacionYCargarPHP } from './assets/js/animacion-carga.js';

mostrarAnimacionYCargarPHP();

// Importa la función cargarCarrusel desde el archivo carrusel.js
import { cargarCarrusel } from './assets/js/carrusel.js';

// Llamada para cargar el carrusel al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    const carruselContainer = document.getElementById('carrusel__items');
    if (carruselContainer) {
        cargarCarrusel(carruselContainer);
    }
});