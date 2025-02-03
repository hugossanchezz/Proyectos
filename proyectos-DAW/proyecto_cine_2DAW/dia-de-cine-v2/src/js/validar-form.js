export function validarForm() {

    // Campos
    const usuario = document.getElementById("usuario");
    const correo = document.getElementById("correo");
    const contrasenia = document.getElementById("contrasenia");
    const confirmarContrasenia = document.getElementById("confirmarContrasenia");
    const fechaNacimiento = document.getElementById("fechaNacimiento");
    const generoFavorito = document.getElementById("generoFavorito");
    const aceptarTerminos = document.getElementById("aceptarTerminos");

    // Errores
    const errorUsuario = document.getElementById("error-usuario");
    const errorCorreo = document.getElementById("error-correo");
    const errorContrasenia = document.getElementById("error-contrasenia");
    const errorConfirmarContrasenia = document.getElementById("error-confirmarContrasenia");
    const errorFechaNacimiento = document.getElementById("error-fechaNacimiento");
    const errorGeneroFavorito = document.getElementById("error-generoFavorito");
    const errorAceptarTerminos = document.getElementById("error-aceptarTerminos");


    // Validación de usuario
    usuario.addEventListener("input", () => {
        if (usuario.value.length < 3) {
            errorUsuario.textContent = "Debe tener al menos 3 caracteres";
        } else {
            errorUsuario.textContent = "";
        }
    });

    // Validación de correo
    correo.addEventListener("input", () => {
        const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regexCorreo.test(correo.value)) {
            errorCorreo.textContent = "Correo inválido";
        } else {
            errorCorreo.textContent = "";
        }
    });

    // Validación de contraseña
    contrasenia.addEventListener("input", () => {
        if (contrasenia.value.length < 6) {
            errorContrasenia.textContent = "La contraseña debe tener al menos 6 caracteres";
        } else {
            errorContrasenia.textContent = "";
        }
    });

    // Validación de confirmación de contraseña
    confirmarContrasenia.addEventListener("input", () => {
        if (confirmarContrasenia.value !== contrasenia.value) {
            errorConfirmarContrasenia.textContent = "Las contraseñas no coinciden";
        } else {
            errorConfirmarContrasenia.textContent = "";
        }
    });

    // Validación de fecha de nacimiento
    fechaNacimiento.addEventListener("input", () => {
        const fechaIngresada = new Date(fechaNacimiento.value);
        const fechaActual = new Date();
        const edad = fechaActual.getFullYear() - fechaIngresada.getFullYear();

        if (isNaN(fechaIngresada.getTime())) {
            errorFechaNacimiento.textContent = "Ingrese una fecha válida";
        } else if (edad < 18) {
            errorFechaNacimiento.textContent = "Debes ser mayor de 18 años";
        } else {
            errorFechaNacimiento.textContent = "";
        }
    });

    // Validación de género favorito
    generoFavorito.addEventListener("input", () => {
        if (generoFavorito.value === "") {
            errorGeneroFavorito.textContent = "Selecciona un género";
        } else {
            errorGeneroFavorito.textContent = "";
        }
    });

    // Validación de aceptación de términos
    aceptarTerminos.addEventListener("input", () => {
        if (!aceptarTerminos.checked) {
            errorAceptarTerminos.textContent = "Debes aceptar los términos y condiciones";
        } else {
            errorAceptarTerminos.textContent = "";
        }
    });
}
