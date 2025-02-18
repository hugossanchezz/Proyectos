<template>
  <section class="content">
    <div class="encabezado">
      <h1>Política de Cookies</h1>
      <p><strong>Última actualización:</strong> 23/01/2025</p>
    </div>
    <p>
      En <strong>Dia de Cine</strong>, utilizamos cookies y tecnologías
      similares para mejorar tu experiencia en nuestro sitio web. Esta Política
      de Cookies explica qué son las cookies, cómo las usamos y cómo puedes
      gestionarlas.
    </p>

    <h2 class="flex">
      <img
        src="/img/ico/categoria.svg"
        alt="Icono de categoría"
      />¿Qué son las cookies?
    </h2>
    <p>
      Las cookies son pequeños archivos de texto que se almacenan en tu
      dispositivo (ordenador, tablet, smartphone) cuando visitas un sitio web.
      Estas cookies permiten que el sitio recuerde tus preferencias, acciones y
      otra información útil para mejorar tu experiencia de navegación.
    </p>

    <h2 class="flex">
      <img
        src="/img/ico/categoria.svg"
        alt="Icono de categoría"
      />Tipos de cookies que utilizamos
    </h2>
    <p>Utilizamos los siguientes tipos de cookies en nuestro sitio:</p>
    <ul>
      <li>
        <strong>Cookies esenciales:</strong> Son necesarias para el
        funcionamiento básico del sitio, como permitir la navegación y acceder a
        áreas seguras. Sin estas cookies, el sitio no funcionaría correctamente.
      </li>
      <li>
        <strong>Cookies de rendimiento:</strong> Recopilan información sobre
        cómo los visitantes usan el sitio, como las páginas más visitadas o los
        mensajes de error. Estas cookies no recopilan información personal y se
        utilizan para mejorar el rendimiento del sitio.
      </li>
      <li>
        <strong>Cookies de funcionalidad:</strong> Permiten que el sitio
        recuerde tus preferencias (como tu nombre de usuario o idioma) para
        ofrecerte una experiencia más personalizada.
      </li>
      <li>
        <strong>Cookies de publicidad:</strong> Se utilizan para mostrarte
        anuncios relevantes basados en tus intereses. También limitan el número
        de veces que ves un anuncio y ayudan a medir la eficacia de las campañas
        publicitarias.
      </li>
    </ul>

    <h2 class="flex">
      <img
        src="/img/ico/categoria.svg"
        alt="Icono de categoría"
      />¿Cómo utilizamos las cookies?
    </h2>
    <p>Utilizamos cookies para:</p>
    <ul>
      <li>Mejorar la funcionalidad y el rendimiento del sitio.</li>
      <li>Recordar tus preferencias y configuraciones.</li>
      <li>
        Analizar cómo los usuarios interactúan con el sitio para identificar
        áreas de mejora.
      </li>
      <li>Mostrar anuncios personalizados basados en tus intereses.</li>
    </ul>

    <h2 class="flex">
      <img
        src="/img/ico/categoria.svg"
        alt="Icono de categoría"
      />Control de cookies
    </h2>
    <p>
      Puedes gestionar o desactivar las cookies a través de la configuración de
      tu navegador. A continuación, te indicamos cómo hacerlo en los navegadores
      más populares:
    </p>
    <ul>
      <li>
        <strong>Google Chrome:</strong> Ve a Configuración > Privacidad y
        seguridad > Cookies y otros datos del sitio.
      </li>
      <li>
        <strong>Mozilla Firefox:</strong> Ve a Opciones > Privacidad y seguridad
        > Cookies y datos del sitio.
      </li>
      <li>
        <strong>Safari:</strong> Ve a Preferencias > Privacidad > Gestión de
        datos del sitio web.
      </li>
      <li>
        <strong>Microsoft Edge:</strong> Ve a Configuración > Privacidad,
        búsqueda y servicios > Cookies y permisos del sitio.
      </li>
    </ul>
    <p>
      Ten en cuenta que desactivar las cookies puede afectar la funcionalidad
      del sitio y limitar tu experiencia de usuario.
    </p>

    <h2 class="flex">
      <img
        src="/img/ico/categoria.svg"
        alt="Icono de categoría"
      />Cookies de terceros
    </h2>
    <p>
      Algunas cookies en nuestro sitio son gestionadas por terceros, como
      proveedores de análisis o redes publicitarias. Estas cookies están sujetas
      a las políticas de privacidad de dichos terceros. Te recomendamos revisar
      sus políticas para obtener más información.
    </p>

    <h2 class="flex">
      <img
        src="/img/ico/categoria.svg"
        alt="Icono de categoría"
      />Cambios en la Política de Cookies
    </h2>
    <p>
      Nos reservamos el derecho de actualizar esta Política de Cookies en
      cualquier momento. Te notificaremos sobre cambios significativos a través
      de nuestro sitio o por correo electrónico. Te recomendamos revisar esta
      política periódicamente para estar informado sobre cómo utilizamos las
      cookies.
    </p>

    <h2 class="flex">
      <img
        src="/img/ico/categoria.svg"
        alt="Icono de categoría"
      />Contacto
    </h2>
    <p>
      Si tienes preguntas o inquietudes sobre esta Política de Cookies, puedes
      contactarnos a través del desarrollador de este sitio web.
    </p>

    <hr />

    <div class="final">
      <p>
        &copy; {{ currentYear }} Dia de Cine. Todos los derechos reservados.
      </p>
    </div>
    <!-- Botón de volver a Terminos y Condiciones -->
    <div class="btn-accept centrado-flex">
      <router-link to="/perfil/registro/terminos">Volver</router-link>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    // Obtener el año actual
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>
