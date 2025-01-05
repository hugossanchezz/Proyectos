//Bucle for que recorre todos los iconos y respuestas a mostrar
for (let i = 1; i <= 4; i++) {
    const ico = document.getElementById(`ico${i}`);
    const r = document.getElementById(`r${i}`);

    //Inicialmente ocultos
    r.style.display = "none";

    ico.addEventListener('click', () => {
        if (r.style.display === "none") {
            r.style.display = "block";
            ico.src="./assets/images/icon-minus.svg"
        } else {
            r.style.display = "none";
            ico.src="./assets/images/icon-plus.svg"
        }
    });
}
