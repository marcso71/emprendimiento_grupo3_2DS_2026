function mostrarSeccion(idSeccion) {
    // Ocultar todas las secciones
    document.querySelectorAll('.seccion').forEach(s => s.style.display = 'none');
    // Mostrar la seleccionada
    document.getElementById(idSeccion).style.display = 'block';
}