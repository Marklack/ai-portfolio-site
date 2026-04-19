// Highlight active nav link based on scroll position
(function () {
  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll(".nav-links a");

  function setActiveLink() {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 80;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", setActiveLink, { passive: true });
  setActiveLink();
})();

// Add .active style inline so no extra CSS file is needed
(function () {
  const style = document.createElement("style");
  style.textContent = ".nav-links a.active { color: var(--color-accent); }";
  document.head.appendChild(style);
})();
