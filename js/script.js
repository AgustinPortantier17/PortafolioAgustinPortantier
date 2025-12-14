// Navegación entre sections
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll(".zona-principal section");

// Función para cambiar de sección
function cambiarSeccion(targetId) {
  // Ocultar todas las secciones
  sections.forEach((section) => section.classList.remove("active"));

  // Mostrar la sección objetivo
  const targetSection = document.getElementById(targetId);
  if (targetSection) {
    targetSection.classList.add("active");
  }

  // Desactivar todos los links
  navLinks.forEach((link) => link.classList.remove("active"));

  // Activar el link correspondiente en el navbar
  const correspondingNavLink = document.querySelector(
    `.panel-nav .nav-link[href="#${targetId}"]`
  );
  if (correspondingNavLink) {
    correspondingNavLink.classList.add("active");
  }

  // Guardar la sección activa en localStorage
  localStorage.setItem("currentSection", targetId);
}

// Event listeners para nav-links
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    cambiarSeccion(targetId);
  });
});

// Event listeners para botones CTA del hero
const heroButtons = document.querySelectorAll(".hero-buttons .btn");
heroButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = button.getAttribute("href").substring(1);
    cambiarSeccion(targetId);
  });
});

// Activar sección guardada o "Inicio" por defecto al cargar la página
window.addEventListener("DOMContentLoaded", () => {
  const savedSection = localStorage.getItem("currentSection");
  const sectionToLoad = savedSection || "inicio";
  cambiarSeccion(sectionToLoad);
});

// Modal de Certificados
const certModal = document.getElementById("certModal");
const modalImage = certModal.querySelector(".modal-cert-image");
const modalClose = certModal.querySelector(".modal-close");
const modalOverlay = certModal.querySelector(".modal-overlay");

// Mapeo de certificados a imágenes
const certificados = {
  "desarrollo-web": "assets/img/Certificado Desarrollo Web.png",
  javascript: "assets/img/Certificado Javascript.png",
  react: "assets/img/Certificado React.png",
};

// Event listeners para botones de certificados
document.querySelectorAll(".cert-button").forEach((button) => {
  button.addEventListener("click", () => {
    const certCard = button.closest(".cert-card");
    const certType = certCard.getAttribute("data-cert");
    const certImage = certificados[certType];

    if (certImage) {
      modalImage.src = certImage;
      certModal.classList.add("active");
      document.body.style.overflow = "hidden"; // Evitar scroll del body
    }
  });
});

// Cerrar modal
function closeCertModal() {
  certModal.classList.remove("active");
  document.body.style.overflow = ""; // Restaurar scroll
}

modalClose.addEventListener("click", closeCertModal);
modalOverlay.addEventListener("click", closeCertModal);

// Cerrar con tecla ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && certModal.classList.contains("active")) {
    closeCertModal();
  }
});
