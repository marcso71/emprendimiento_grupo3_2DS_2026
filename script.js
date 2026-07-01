document.addEventListener("DOMContentLoaded", () => {
    const enlacesNav = document.querySelectorAll("nav ul li a");
    const secciones = document.querySelectorAll("main .seccion, main section");

    enlacesNav.forEach(enlace => {
        enlace.addEventListener("click", (e) => {
            e.preventDefault();
            const pestañaDestino = enlace.textContent.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

            secciones.forEach(seccion => {
                seccion.style.display = "none";
            });

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

    const btnHero = document.querySelector(".btn-principal");
    if (btnHero) {
        btnHero.addEventListener("click", () => {
            const enlaceMenu = Array.from(enlacesNav).find(link => 
                link.textContent.trim().toLowerCase().includes("men")
            );
            if (enlaceMenu) {
                enlaceMenu.click();
            }
        });
    }
});