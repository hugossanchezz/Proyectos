// Lógica para alternar las pestañas de la sección de inicio de sesión

export function gestionarPaneles() {
    document.querySelectorAll('.panel').forEach(panel => {
        panel.addEventListener('click', () => {
            // Quitar la clase "active" de todos los paneles
            document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
            // Agregar la clase "active" al panel clickeado
            panel.classList.add('active');
        });
    });
}

