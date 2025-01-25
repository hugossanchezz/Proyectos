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

<body class="body-grid">

  <!-- Template del header -->
  <?php include 'src/assets/include/templates/header.php'; ?>

  <main class="main-grid">
    main

    <section class="carrusel flex">
      <!-- carrusel en horizontal de franquicias -->
      <div class="carrusel__items flex">
        <?php
        // Repetir 2 veces las imagenes para el efecto infinito del carrusel
        for ($i = 0; $i < 2; $i++) {
          echo '
          <div class="carrusel__item">
            <img src="./src/assets/img/franquicias/batman.jpg" alt="Logo de batman" srcset="">
          </div>
          <div class="carrusel__item">
            <img src="./src/assets/img/franquicias/caza-fantasmas.jpg" alt="Logo de los caza fantasmas" srcset="">
          </div>
          <div class="carrusel__item">
            <img src="./src/assets/img/franquicias/el-padrino.jpg" alt="Logo del padrino" srcset="">
          </div>
          <div class="carrusel__item">
            <img src="./src/assets/img/franquicias/harry-potter.jpg" alt="Logo de harry potter" srcset="">
          </div>
          <div class="carrusel__item">
            <img src="./src/assets/img/franquicias/jurassic-park.jpg" alt="Logo de jurassic park" srcset="">
          </div>
          <div class="carrusel__item">
            <img src="./src/assets/img/franquicias/marvel.jpg" alt="Logo de marvel" srcset="">
          </div>
          <div class="carrusel__item">
            <img src="./src/assets/img/franquicias/piratas-caribe.jpg" alt="Logo de piratas del caribe" srcset="">
          </div>
          <div class="carrusel__item">
            <img src="./src/assets/img/franquicias/senior-anillos.png" alt="Logo del señor de los anillos" srcset="">
          </div>
          <div class="carrusel__item">
            <img src="./src/assets/img/franquicias/shrek.jpg" alt="Logo de shrek" srcset="">
          </div>
          <div class="carrusel__item">
            <img src="./src/assets/img/franquicias/star-wars.jpg" alt="Logo de star wars" srcset="">
          </div>
          <div class="carrusel__item">
            <img src="./src/assets/img/franquicias/007.webp" alt="Logo de 007" srcset="">
          </div>
          <div class="carrusel__item">
            <img src="./src/assets/img/franquicias/fast-furious.jpg" alt="Logo de fast and furious" srcset="">
          </div>
          ';
        }
        ?>

      </div>

    </section>
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

  <script type="module" src="./src/main.js"></script>

</body>

</html>