document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");
    const overlay = document.getElementById("overlay");
    const navLinks = document.querySelectorAll("#nav-menu li a");

    // Función para abrir/cerrar el menú hamburguesa
    hamburger.addEventListener("click", function () {
        this.classList.toggle("active");
        navMenu.classList.toggle("show");
        overlay.classList.toggle("active");
    });

    // Cerrar el menú al hacer clic en cualquier enlace
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            hamburger.classList.remove("active");
            navMenu.classList.remove("show");
            overlay.classList.remove("active");
        });
    });

    

    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("modalImage");
    var closeBtn = document.getElementsByClassName("close")[0];

    // Selecciona todas las imágenes dentro de .image-grid
    var images = document.querySelectorAll(".image-grid img, .centered2");

    images.forEach(function (img) {
        img.addEventListener("click", function () {
            modal.style.display = "flex"; // Mostrar modal
            modalImg.src = this.src; // Asignar la imagen seleccionada
        });
    });

    // Cierra el modal al hacer clic en la "X"
    closeBtn.onclick = function () {
        modal.style.display = "none";
    };

    // Cierra el modal si se hace clic fuera de la imagen
    modal.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
});

// Función para copiar el correo
function copyToClipboard() {
    var textToCopy = "samy040902@gmail.com"; // Correo a copiar

    navigator.clipboard.writeText(textToCopy).then(function () {
        alert("Correo copiado: " + textToCopy);
    }).catch(function (err) {
        console.error("Error al copiar el correo: ", err);
    });
}