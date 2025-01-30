// Animación de carga
import { mostrarAnimacionYCargarPHP } from './assets/js/animacion-carga.js';

mostrarAnimacionYCargarPHP();

//----------------------------------------------

// Carrusel con efecto de bucle inifinito
import { cargarCarrusel } from './assets/js/carrusel.js';

document.addEventListener('DOMContentLoaded', () => {
    const carruselContainer = document.getElementById('carrusel__items');
    if (carruselContainer) {
        cargarCarrusel(carruselContainer);
    }
});

//----------------------------------------------

// Apartado de noticias del index
import { mostrarNoticias,mostrarPeliculasEstrenos2025 } from './assets/js/noticias-estrenos.js';

document.addEventListener('DOMContentLoaded', () => {
    mostrarNoticias();  
    mostrarPeliculasEstrenos2025();
});

//----------------------------------------------