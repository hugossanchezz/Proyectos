// Función para establecer una cookie con una duración en días
function setCookie(nombre, valor, dias) {
    let fecha = new Date();
    fecha.setTime(fecha.getTime() + dias * 24 * 60 * 60 * 1000);
    document.cookie = `${nombre}=${valor};expires=${fecha.toUTCString()};path=/`;
}

// Función para obtener el valor de una cookie
function getCookie(nombre) {
    let cookies = document.cookie.split('; ');
    for (let cookie of cookies) {
        let [clave, valor] = cookie.split('=');
        if (clave === nombre) return valor;
    }
    return null;
}

// Función para manejar el cambio de idioma
function cambiarIdioma(idioma) {
    setCookie("idioma", idioma, 7); // Guarda el idioma por 7 días
    location.reload();
}

// Función para cargar el idioma guardado en la cookie al iniciar
function cargarIdioma() {
    return getCookie("idioma") || "es"; // Si no hay cookie, devuelve "es"
}

// Exportar funciones para usarlas en el componente Vue
export { cambiarIdioma, cargarIdioma };


