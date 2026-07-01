document.addEventListener("DOMContentLoaded", () => {
    const enlacesNav = document.querySelectorAll("nav ul li a");
    const secciones = document.querySelectorAll("main .seccion, main section");

    enlacesNav.forEach(enlace => {
        enlace.addEventListener("click", (e) => {
            // ELIMINADO e.preventDefault() para que los enlaces HTML sí cambien de página

            const pestañaDestino = enlace.textContent.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

            // Oculta secciones solo si existen en la página actual
            if (secciones.length > 0) {
                secciones.forEach(seccion => {
                    seccion.style.display = "none";
                });
            }

            enlacesNav.forEach(link => {
                link.classList.remove("activo");
            });

            const seccionActiva = document.getElementById(pestañaDestino);
            if (seccionActiva) {
                seccionActiva.style.display = "block";
            }

            enlace.classList.add("activo");
        });
    });

    // Código para el botón principal (si existe en la página)
    const btnHero = document.querySelector(".btn-principal");
    if (btnHero) {
        btnHero.addEventListener("click", () => {
            const enlaceMenu = Array.from(enlacesNav).find(link => 
                link.textContent.trim().toLowerCase().includes("men")
            );
            if (enlaceMenu) {S
                enlaceMenu.click();
            }
        });
    }
});