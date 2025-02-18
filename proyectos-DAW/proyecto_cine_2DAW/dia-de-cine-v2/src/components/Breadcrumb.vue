<template>
  <nav class="breadcrumb">
    <ul class="flex">
      <!-- Recorremos el array breadcrumbs y generamos los elementos de la lista -->
      <li v-for="(crumb, index) in breadcrumbs" :key="index">
        <!-- Si no es el último breadcrumb, lo mostramos como enlace -->
        <router-link v-if="index < breadcrumbs.length - 1" :to="crumb.path">
          {{ crumb.label }}
        </router-link>
        <!-- Si es el último breadcrumb (ruta actual), lo mostramos como texto sin enlace -->
        <span v-else>{{ crumb.label }}</span>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Breadcrumb",
  computed: {
    breadcrumbs() {
      /**
       * Mapeo de rutas a nombres legibles por el usuario.
       * Cada clave representa una URL y el valor es el nombre que se mostrará en el breadcrumb.
       */
      const routes = {
        "/": "Inicio",
        "/peliculas": "Películas",
        "/series": "Series",
        "/comunidad": "Comunidad",
        "/nosotros": "Nosotros",
        "/mi-espacio": "Mi Espacio",
        "/perfil": "Perfil",
        "/perfil/registro": "Registro",
        "/perfil/registro/terminos": "Términos",
        "/perfil/registro/privacidad": "Política de Privacidad",
        "/perfil/registro/cookies": "Política de Cookies",
        "/perfil/iniciar-sesion": "Iniciar Sesión",
      };

      /**
       * Se obtiene la ruta actual desde Vue Router y se divide en segmentos.
       * Se usa `filter(Boolean)` para eliminar cualquier valor vacío que pueda quedar.
       * 
       * Ejemplo: "/perfil/registro/terminos" → ["perfil", "registro", "terminos"]
       */
      const pathArray = this.$route.path.split("/").filter(Boolean);

      /**
       * Se inicializa el array de breadcrumbs con la página de inicio.
       * Siempre se muestra "Inicio" como el primer breadcrumb.
       */
      const breadcrumbs = [{ path: "/", label: "Inicio" }];

      // Variable para construir progresivamente la ruta completa en cada iteración
      let path = "";

      /**
       * Se recorre cada segmento de la ruta y se construye la URL acumulativa.
       * Cada iteración añade un nuevo breadcrumb con su ruta y etiqueta correspondiente.
       */
      pathArray.forEach((segment) => {
        path += `/${segment}`; // Se va formando la ruta completa paso a paso
        breadcrumbs.push({ 
          path, 
          label: routes[path] || segment // Se usa el nombre definido en 'routes', o el segmento si no está definido
        });
      });

      // Se devuelve la lista de breadcrumbs que se mostrará en el template
      return breadcrumbs;
    },
  },
};
</script>
