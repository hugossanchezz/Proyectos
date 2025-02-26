// Importa las funciones necesarias de Node.js
import { fileURLToPath, URL } from "node:url";

// Importa las funciones necesarias de Vite para la configuración
import { defineConfig } from "vite";

// Importa el plugin de Vue para Vite
import vue from "@vitejs/plugin-vue";

// Importa el plugin de herramientas de desarrollo de Vue para Vite
import vueDevTools from "vite-plugin-vue-devtools";

// Exporta la configuración de Vite utilizando la función defineConfig
export default defineConfig({
  plugins: [
    // Activa el plugin de Vue, necesario para procesar archivos .vue
    vue(),
    // Activa el plugin de Vue DevTools, útil para la depuración en desarrollo
    vueDevTools(),
  ],
  resolve: {
    // Configuración de alias para las rutas de importación
    alias: {
      // Crea un alias '@' para que apunte a la carpeta 'src' del proyecto
      // Esto permite importar archivos desde 'src' de manera más sencilla
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    /* Configura un proxy para redirigir peticiones durante el desarrollo 
    necesario para que la API de las noticias del index funcione tanto en 
    desarrollo como en producción (Netlify)\

    proxy es un servidor intermedio que actúa como un intermediario entre el cliente (como tu navegador) y el servidor al que deseas acceder*/
    proxy: {
      "/api": {
        // Define un proxy para la ruta '/api' es decir redirige las peticiones de '/api' hacia 'https://newsapi.org'
        target: "https://newsapi.org",

        changeOrigin: true,//Esto asegura que el origen de la solicitud (el dominio de donde se hace la petición) sea el de la API externa, lo que ayuda a evitar problemas de CORS
        /*CORS (Cross-Origin Resource Sharing) es un mecanismo de seguridad implementado en los navegadores para evitar que un sitio web realice solicitudes a un dominio distinto del suyo propio sin la autorización del servidor de destino.*/
        
        rewrite: (path) => path.replace(/^\/api/, ""),// Reescribe la URL eliminando '/api' antes de enviarla a la API de NewsAPI
      },
    },
  },
});
