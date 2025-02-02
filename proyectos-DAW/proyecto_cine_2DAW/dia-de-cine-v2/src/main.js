import { createApp } from 'vue';
import App from './App.vue';
import router from './router';  // Importa el router

createApp(App).use(router).mount('#app');  // Usa el router en la aplicación

//----------------------------------------------

// obtener el tamaño de la ventana del navegador
console.log(`${window.innerWidth} x ${window.innerHeight}`);
