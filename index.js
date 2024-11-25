document.querySelectorAll(".tab-link").forEach((tab) => {
    tab.addEventListener("click", (e) => {
        e.preventDefault();

        // Actualizar pestaña activa
        document.querySelectorAll(".tab-link").forEach((link) => link.classList.remove("active"));
        tab.classList.add("active");

        // Mostrar contenido relacionado
        const target = tab.getAttribute("href").substring(1);
        document.querySelectorAll(".tab-content").forEach((content) => content.classList.remove("active"));
        document.getElementById(target).classList.add("active");
    });
});
