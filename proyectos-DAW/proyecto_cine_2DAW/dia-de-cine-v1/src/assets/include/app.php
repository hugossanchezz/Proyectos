<?php

/**
 * Función que permite elegir el formulario a cargar en la página de inicio de sesión, o los términos y         condiciones	del registro.
 * 
 * @param string $mostrar El tipo de contenido a cargar. Puede ser "login", "registro" o "terminos". Si no se proporciona o no es válido, se carga el formulario de login por defecto.
 */
function elegirContenido($mostrar = "login")
{
    // Verificar el valor del parámetro $formulario
    if ($mostrar == "login") {
        include 'src/assets/include/templates/form-login.php';
    } elseif ($mostrar == "registro") {
        include 'src/assets/include/templates/form-registro.php';
    } elseif ($mostrar == "terminos") {
        include 'src/assets/include/templates/terminos.php';
    } else {
        // En caso de que el parámetro no sea válido, se carga el formulario de login por defecto
        include 'src/assets/include/templates/form-login.php';
    }
}
