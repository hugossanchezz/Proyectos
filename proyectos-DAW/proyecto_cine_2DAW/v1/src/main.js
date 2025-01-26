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
import { mostrarNoticias } from './assets/js/noticias.js';

document.addEventListener('DOMContentLoaded', () => {
    mostrarNoticias();  
});

//----------------------------------------------