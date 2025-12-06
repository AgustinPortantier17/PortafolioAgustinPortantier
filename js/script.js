// Navegacion entre sections
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll(".zona-principal section");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const targetId = link.getAttribute("href").substring(1);
    sections.forEach((section) => section.classList.remove("active"));

    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.classList.add("active");
    }

    navLinks.forEach((link) => link.classList.remove("active"));
    link.classList.add("active");
  });
});
