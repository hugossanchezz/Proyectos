<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Dia de Cine - Inicio</title>

  <link rel="icon" type="image/png" sizes="32x32" href="../src/assets/img/ico/logo-favicon.ico" />
  <link rel="stylesheet" href="src/assets/css/normalize.css" />
  <link rel="stylesheet" href="src/assets/css/global.css" />

</head>

<body class="body-grid-index">
  <!-- Template del header -->
  <?php include 'src/assets/include/templates/header.php'; ?>

  <section class="carrusel flex">
    <div id="carrusel__items" class="carrusel__items flex">

      <!-- Espacio para el carrusel que se cargará dinámicamente con JavaScript -->
    </div>
  </section>
  <main class="main-grid centrado-flex">
    <!-- Animáción de carga para el grid de noticias -->
    <div id="loader" class="loader"></div>

    <div id="contenido-mostrar" class="contenido-mostrar flex" style="display: none;">
      <div id="noticias-container" class="noticias-container">
        <!-- Espacio de las noticias con el Api NewsAPI -->
      </div>

      <!-- Boton de recargar noticias -->
      <div class="noticias-boton-container centrado-flex">
        <!-- Clase reutilizada de _inicio-sesion.scss, línea 79 -->
        <button id="recargar-noticias" class="button-submit button-submit-pequenio">Recargar noticias</button>
      </div>
    </div>

  </main>
  <aside>
    <section>
      aside
    </section>
  </aside>

  <!-- Template del footer -->
  <?php include 'src/assets/include/templates/footer.php'; ?>

  <!-- Cargar el carrusel solo en index.php -->
  <script type="module" src="./src/main.js"></script>

</body>

</html>