<template>
  <section class="content">
    <div class="encabezado">
      <h1>Política de Privacidad</h1>
      <p><strong>Última actualización:</strong> 23/01/2025</p>
    </div>
    <p>
      En <strong>Dia de Cine</strong>, valoramos y respetamos tu privacidad.
      Esta Política de Privacidad explica cómo recopilamos, utilizamos,
      compartimos y protegemos tu información personal cuando visitas nuestro
      sitio web o utilizas nuestros servicios. Al utilizar nuestro sitio,
      aceptas las prácticas descritas en esta política.
    </p>

    <h2 class="flex">
      <img
        src="/img/ico/categoria.svg"
        alt="Icono de categoría"
      />Información que Recopilamos
    </h2>
    <p>
      Recopilamos información que nos proporcionas directamente, así como datos
      que se generan automáticamente cuando interactúas con nuestro sitio. Esto
      incluye:
    </p>
    <ul>
      <li>
        <strong>Información personal:</strong> Nombre, dirección de correo
        electrónico, fecha de nacimiento y otros datos que nos proporcionas al
        crear una cuenta o contactarnos.
      </li>
      <li>
        <strong>Datos de uso:</strong> Información sobre cómo interactúas con
        nuestro sitio, como las páginas que visitas, el tiempo que pasas en
        ellas y los enlaces en los que haces clic.
      </li>
      <li>
        <strong>Datos técnicos:</strong> Dirección IP, tipo de navegador,
        sistema operativo y detalles del dispositivo que utilizas para acceder a
        nuestro sitio.
      </li>
    </ul>

    <h2 class="flex">
      <img
        src="/img/ico/categoria.svg"
        alt="Icono de categoría"
      />Uso de la Información
    </h2>
    <p>Utilizamos la información recopilada para:</p>
    <ul>
      <li>Proporcionar, mantener y mejorar nuestros servicios.</li>
      <li>
        Personalizar tu experiencia en el sitio, mostrándote contenido
        relevante.
      </li>
      <li>
        Enviarte actualizaciones, noticias y promociones relacionadas con
        películas y series.
      </li>
      <li>Responder a tus consultas y brindarte soporte técnico.</li>
      <li>Proteger la seguridad e integridad de nuestro sitio y usuarios.</li>
    </ul>

    <h2 class="flex">
      <img
        src="/img/ico/categoria.svg"
        alt="Icono de categoría"
      />Compartición de Información
    </h2>
    <p>
      No compartimos tu información personal con terceros, excepto en las
      siguientes circunstancias:
    </p>
    <ul>
      <li>
        <strong>Con tu consentimiento:</strong> Si nos autorizas a compartir tu
        información con socios o servicios específicos.
      </li>
      <li>
        <strong>Proveedores de servicios:</strong> Trabajamos con terceros que
        nos ayudan a operar el sitio (por ejemplo, hosting, análisis de datos).
        Estos proveedores solo tienen acceso a la información necesaria para
        realizar sus funciones.
      </li>
      <li>
        <strong>Requerimientos legales:</strong> Podemos divulgar información si
        es necesario para cumplir con la ley o proteger nuestros derechos.
      </li>
    </ul>

    <h2 class="flex">
      <img
        src="/img/ico/categoria.svg"
        alt="Icono de categoría"
      />Protección de Datos
    </h2>
    <p>
      Implementamos medidas de seguridad técnicas y organizativas para proteger
      tu información contra el acceso no autorizado, la alteración o la
      destrucción. Sin embargo, ningún sistema es completamente seguro, por lo
      que no podemos garantizar la seguridad absoluta de tus datos.
    </p>

    <h2 class="flex">
      <img
        src="/img/ico/categoria.svg"
        alt="Icono de categoría"
      />Tus Derechos
    </h2>
    <p>Tienes derecho a:</p>
    <ul>
      <li>Acceder a la información personal que tenemos sobre ti.</li>
      <li>Solicitar la corrección o eliminación de tus datos.</li>
      <li>Oponerte al uso de tu información para fines de marketing.</li>
      <li>Retirar tu consentimiento en cualquier momento.</li>
    </ul>
    <p>
      Para ejercer estos derechos, puedes contactarnos a través de los medios
      proporcionados al final de esta política.
    </p>

    <h2 class="flex">
      <img
        src="/img/ico/categoria.svg"
        alt="Icono de categoría"
      />Cookies y Tecnologías Similares
    </h2>
    <p>
      Utilizamos cookies y tecnologías similares para mejorar tu experiencia en
      el sitio. Las cookies nos ayudan a recordar tus preferencias, analizar el
      tráfico y personalizar el contenido. Puedes gestionar o desactivar las
      cookies a través de la configuración de tu navegador.
    </p>

    <h2 class="flex">
      <img
        src="/img/ico/categoria.svg"
        alt="Icono de categoría"
      />Enlaces a Terceros
    </h2>
    <p>
      Nuestro sitio puede contener enlaces a sitios web de terceros. No somos
      responsables de las prácticas de privacidad o el contenido de estos
      sitios. Te recomendamos revisar sus políticas de privacidad antes de
      proporcionarles cualquier información.
    </p>

    <h2 class="flex">
      <img
        src="/img/ico/categoria.svg"
        alt="Icono de categoría"
      />Cambios en la Política de Privacidad
    </h2>
    <p>
      Nos reservamos el derecho de actualizar esta Política de Privacidad en
      cualquier momento. Te notificaremos sobre cambios significativos a través
      de nuestro sitio o por correo electrónico. Te recomendamos revisar esta
      política periódicamente para estar informado sobre cómo protegemos tu
      información.
    </p>

    <h2 class="flex">
      <img
        src="/img/ico/categoria.svg"
        alt="Icono de categoría"
      />Contacto
    </h2>
    <p>
      Si tienes preguntas o inquietudes sobre esta Política de Privacidad,
      puedes contactarnos a través del desarrollador de este sitio web.
    </p>

    <hr />

    <div class="final">
      <p>
        &copy; {{ currentYear }} Dia de Cine. Todos los derechos reservados.
      </p>
    </div>
    <div class="btn-accept centrado-flex">
      <router-link to="/perfil/registro/terminos">Volver</router-link>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      // Obtener el año actual
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>
