// ================= HEADER LOAD =================
async function loadHeader() {

  const headerPlaceholder =
    document.getElementById("header-placeholder");

  if (!headerPlaceholder) return;

  try {

    const response =
      await fetch("/includes/header.html");

    const data = await response.text();

    headerPlaceholder.innerHTML = data;

    initializeNavbar();

  } catch (error) {

    console.error("Header Load Error:", error);

  }

}

// ================= FOOTER LOAD =================
async function loadFooter() {

  const footerPlaceholder =
    document.getElementById("footer-placeholder");

  if (!footerPlaceholder) return;

  try {

    const response =
      await fetch("/includes/footer.html");

    const data = await response.text();

    footerPlaceholder.innerHTML = data;

  } catch (error) {

    console.error("Footer Load Error:", error);

  }

}

// ================= NAVBAR =================
function initializeNavbar() {

  const menuToggle =
    document.getElementById("menuToggle");

  const navMenu =
    document.getElementById("nav-menu");

  const dropdownBtn =
    document.getElementById("servicesDropdownBtn");

  const dropdown =
    document.querySelector(".nav-dropdown");

  // ================= MOBILE MENU =================
  if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {

      navMenu.classList.toggle("active");

      menuToggle.classList.toggle("active");

      document.body.classList.toggle("menu-open");

    });

  }

  // ================= DROPDOWN MOBILE =================
  if (dropdownBtn && dropdown) {

    dropdownBtn.addEventListener("click", () => {

      if (window.innerWidth <= 992) {

        dropdown.classList.toggle("active");

      }

    });

  }

  // ================= CLOSE MENU ON LINK CLICK =================
  const navLinks =
    document.querySelectorAll(".nav-menu a");

  navLinks.forEach((link) => {

    link.addEventListener("click", () => {

      if (window.innerWidth <= 992) {

        navMenu.classList.remove("active");

        menuToggle.classList.remove("active");

        document.body.classList.remove("menu-open");

      }

    });

  });

}

// ================= STICKY HEADER =================
function stickyHeader() {

  const header =
    document.querySelector(".site-header");

  if (!header) return;

  if (window.scrollY > 50) {

    header.classList.add("sticky");

  } else {

    header.classList.remove("sticky");

  }

}

// ================= SCROLL ANIMATION =================
function revealOnScroll() {

  const revealElements =
    document.querySelectorAll(
      ".service-card, .project-card, .why-card, .feature-card, .pricing-card, .blog-card, .faq-card, .process-card"
    );

  revealElements.forEach((element) => {

    const windowHeight =
      window.innerHeight;

    const elementTop =
      element.getBoundingClientRect().top;

    const revealPoint = 100;

    if (elementTop < windowHeight - revealPoint) {

      element.classList.add("active");

    }

  });

}

// ================= ACTIVE NAV LINK =================
function activeNavLink() {

  const currentPath =
    window.location.pathname;

  const navLinks =
    document.querySelectorAll(".nav-menu a");

  navLinks.forEach((link) => {

    const href =
      link.getAttribute("href");

    if (href === currentPath) {

      link.classList.add("active-link");

    }

  });

}

// ================= SMOOTH SCROLL =================
function smoothScroll() {

  const anchorLinks =
    document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach((anchor) => {

    anchor.addEventListener("click", function (e) {

      e.preventDefault();

      const target =
        document.querySelector(
          this.getAttribute("href")
        );

      if (target) {

        target.scrollIntoView({

          behavior: "smooth"

        });

      }

    });

  });

}

// ================= PAGE LOADER =================
window.addEventListener("load", () => {

  document.body.classList.add("loaded");

});

// ================= EVENTS =================
window.addEventListener(
  "scroll",
  stickyHeader
);

window.addEventListener(
  "scroll",
  revealOnScroll
);

// ================= INIT =================
document.addEventListener(
  "DOMContentLoaded",
  () => {

    loadHeader();

    loadFooter();

    activeNavLink();

    smoothScroll();

    revealOnScroll();

  }
);