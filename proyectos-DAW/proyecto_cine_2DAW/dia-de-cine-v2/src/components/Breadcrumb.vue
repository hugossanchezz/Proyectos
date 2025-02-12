<template>
  <nav class="breadcrumb">
    <ul class="flex">
      <li v-for="(crumb, index) in breadcrumbs" :key="index">
        <router-link v-if="index < breadcrumbs.length - 1" :to="crumb.path">
          {{ crumb.label }}
        </router-link>
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
      const routes = {
        "/": "Inicio",
        "/peliculas": "Películas",
        "/series": "Series",
        "/comunidad": "Comunidad",
        "/nosotros": "Nosotros",
        "/mi-espacio": "Mi Espacio",
        "/perfil": "Perfil",
        "/perfil/registro": "Registro",
        "/perfil/registro/terminos": "Terminos",
        "/perfil/registro/privacidad": "Política de Privacidad",
        "/perfil/registro/cookies": "Política de Cookies",
        "/perfil/iniciar-sesion": "Iniciar Sesión",
      };

      const pathArray = this.$route.path.split("/").filter(Boolean);
      let path = "";
      return [
        { path: "/", label: "Inicio" },
        ...pathArray.map((segment) => {
          path += `/${segment}`;
          return { path, label: routes[path] || segment };
        }),
      ];
    },
  },
};
</script>
