// Cargar el archivo JSON con Fetch API
fetch("js/lang.json")
  .then(response => response.json())
  .then(json => {
    // Lenguaje por defecto
    if (!localStorage.getItem("lang")) {
      localStorage.setItem("lang", "en");
    }

    let lang = localStorage.getItem("lang");
    actualizarTexto(json, lang);

    // Agregar eventos de traducción a los botones
    document.querySelectorAll(".translate").forEach(button => {
      button.addEventListener("click", function () {
        let lang = this.id; // Obtener el idioma del botón
        localStorage.setItem("lang", lang);
        actualizarTexto(json, lang);
      });
    });
  })
  .catch(error => console.error("Error cargando el archivo JSON:", error));

// Función para actualizar los textos
function actualizarTexto(json, lang) {
  document.querySelectorAll(".lang").forEach(element => {
    let key = element.getAttribute("key");
    element.textContent = json[lang][key];
  });
}
