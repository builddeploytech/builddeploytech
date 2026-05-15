// ================= NAVBAR SCROLL EFFECT =================
function handleNavbarScroll() {

  const header =
    document.querySelector(".site-header");

  if (!header) return;

  if (window.scrollY > 40) {

    header.classList.add("navbar-scrolled");

  } else {

    header.classList.remove("navbar-scrolled");

  }

}

// ================= MOBILE MENU =================
function initializeMobileMenu() {

  const menuToggle =
    document.getElementById("menuToggle");

  const navMenu =
    document.getElementById("nav-menu");

  if (!menuToggle || !navMenu) return;

  menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

    menuToggle.classList.toggle("active");

    document.body.classList.toggle("menu-open");

  });

}

// ================= MOBILE DROPDOWN =================
function initializeDropdown() {

  const dropdownBtn =
    document.getElementById("servicesDropdownBtn");

  const dropdown =
    document.querySelector(".nav-dropdown");

  if (!dropdownBtn || !dropdown) return;

  dropdownBtn.addEventListener("click", () => {

    if (window.innerWidth <= 992) {

      dropdown.classList.toggle("active");

    }

  });

}

// ================= CLOSE MOBILE MENU =================
function closeMenuOnLinkClick() {

  const navLinks =
    document.querySelectorAll(".nav-menu a");

  const navMenu =
    document.getElementById("nav-menu");

  const menuToggle =
    document.getElementById("menuToggle");

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

// ================= ACTIVE NAVIGATION LINK =================
function setActiveNavLink() {

  const currentPage =
    window.location.pathname;

  const navLinks =
    document.querySelectorAll(".nav-menu a");

  navLinks.forEach((link) => {

    const href =
      link.getAttribute("href");

    if (href === currentPage) {

      link.classList.add("active-link");

    }

  });

}

// ================= ESC KEY CLOSE =================
function escCloseMenu() {

  document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

      const navMenu =
        document.getElementById("nav-menu");

      const menuToggle =
        document.getElementById("menuToggle");

      navMenu.classList.remove("active");

      menuToggle.classList.remove("active");

      document.body.classList.remove("menu-open");

    }

  });

}

// ================= CLICK OUTSIDE =================
function outsideClickClose() {

  document.addEventListener("click", (e) => {

    const navMenu =
      document.getElementById("nav-menu");

    const menuToggle =
      document.getElementById("menuToggle");

    const header =
      document.querySelector(".site-header");

    if (
      window.innerWidth <= 992 &&
      navMenu.classList.contains("active")
    ) {

      if (!header.contains(e.target)) {

        navMenu.classList.remove("active");

        menuToggle.classList.remove("active");

        document.body.classList.remove("menu-open");

      }

    }

  });

}

// ================= WINDOW RESIZE =================
function handleResize() {

  window.addEventListener("resize", () => {

    const navMenu =
      document.getElementById("nav-menu");

    const menuToggle =
      document.getElementById("menuToggle");

    if (window.innerWidth > 992) {

      navMenu.classList.remove("active");

      menuToggle.classList.remove("active");

      document.body.classList.remove("menu-open");

    }

  });

}

// ================= INIT NAVBAR =================
function initNavbar() {

  initializeMobileMenu();

  initializeDropdown();

  closeMenuOnLinkClick();

  setActiveNavLink();

  escCloseMenu();

  outsideClickClose();

  handleResize();

  handleNavbarScroll();

}

// ================= EVENTS =================
window.addEventListener(
  "scroll",
  handleNavbarScroll
);

document.addEventListener(
  "DOMContentLoaded",
  initNavbar
);