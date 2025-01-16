// Cuando cargue el html se ejecuta lo que haya dentro
$(document).ready( () => {

    // seleccionar todos los parrafos y cambiar su color
    $("p").css("color", "blue");

    // seleccionar el segundo parrafo por su id y cambiar su color
    $("#segundo-p").css("color", "red");

    // seleccionar el tercer parrafo por su class y cambiar su color
    $(".tercero-p").css("color", "orange");

    // seleccionar el boton y mostrar el alert
    $("#btn-alert").click( () => {
        alert("Botón pulsado");
    });
    
    // seleccionar el boton y ocultar el segundo parrafo
    $("#btn-hide").click( () => {
        // ocultar el segundo parrafo
        $("#segundo-p").hide();
    });

    // seleccionar el boton y mostrar el segundo parrafo
    $("#btn-show").click( () => {
        // mostrar el segundo parrafo
        $("#segundo-p").show();
    });

    // seleccionar el primero parrafo por su id y cambiar su color al hacer doble click
    $(".tercero-p").dblclick( () => {
        // cambiar el color del primero parrafo
        $("#primero-p").css("color", "yellowgreen");
    });

    //mouseover
    //mouseenter
    //mouseleave
    //mousemove

});