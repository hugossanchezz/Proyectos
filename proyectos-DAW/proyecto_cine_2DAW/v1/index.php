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
  <main class="main-grid">

    <section class="noticias">
      <!-- tarjetas con informacion/noticias de peliculas -->
    </section>

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