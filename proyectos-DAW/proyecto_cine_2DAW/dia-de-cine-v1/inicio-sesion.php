<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Dia de Cine v1 - Inicio</title>

  <link rel="icon" type="image/png" sizes="32x32" href="../src/assets/img/ico/logo-favicon.ico" />

  <link rel="stylesheet" href="src/assets/css/normalize.css" />
  <link rel="stylesheet" href="src/assets/css/global.css" />

</head>

<body>
  <!-- Template del header -->
  <?php include 'src/assets/include/templates/header.php'; ?>

  <main class="main-content centrado-flex">
    <section class="contenedor-inicio-sesion centrado-flex">

      <div id="loader" class="loader"></div>
      <div id="contenido-mostrar" class="contenido-mostrar flex" style="display: none;">
        <?php
        // Importar el controlador de templates
        include 'src/assets/include/app.php';

        // Recuperar el valor de 'mostrar' de la URL (contenido a mostrar)
        if (isset($_GET['mostrar'])) {
          $formulario = $_GET['mostrar'];
        } else {
          // Si no se pasa 'form', se usa 'login' por defecto
          $formulario = 'login';
        }

        // Llamar a la función que maneja los formularios, pasando el valor de $formulario
        elegirContenido($formulario);
        ?>
      </div>


    </section>
  </main>

  <!-- Template del footer -->
  <?php include 'src/assets/include/templates/footer.php'; ?>
  
  <script type="module" src="./src/main.js"></script>
</body>

</html>