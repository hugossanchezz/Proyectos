document.addEventListener("DOMContentLoaded", function () {
  const miBoton = document.getElementById("miBoton");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 330) {
      miBoton.style.opacity = 1;
    } else {
      miBoton.style.opacity = 0;
    }
  });
});
