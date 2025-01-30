import { createApp } from 'vue';
import App from './App.vue';
import router from './router';  // Importa el router

createApp(App).use(router).mount('#app');  // Usa el router en la aplicación

//----------------------------------------------
// Animación de carga
// import { mostrarAnimacionYCargarVue } from './js/animacion-carga.js';

// mostrarAnimacionYCargarVue();

//----------------------------------------------

// Carrusel con efecto de bucle inifinito
import { cargarCarrusel } from './js/carrusel.js';

document.addEventListener('DOMContentLoaded', () => {
    const carruselContainer = document.getElementById('carrusel__items');
    if (carruselContainer) {
        cargarCarrusel(carruselContainer);
    }
});

