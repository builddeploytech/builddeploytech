/* =========================================================
   BUILDDEPLOY TECH - NAVBAR JS
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =====================================================
     ELEMENTS
  ===================================================== */

  const siteHeader =
  document.getElementById("siteHeader");

  const menuToggle =
  document.getElementById("menuToggle");

  const navMenu =
  document.getElementById("navMenu");

  const navDropdowns =
  document.querySelectorAll(".nav-dropdown");

  const navLinks =
  document.querySelectorAll(".nav-menu a");

  /* =====================================================
     MOBILE MENU TOGGLE
  ===================================================== */

  if(menuToggle && navMenu){

    menuToggle.addEventListener("click", () => {

      navMenu.classList.toggle("active");

      /* MENU OPEN */

      if(navMenu.classList.contains("active")){

        menuToggle.innerHTML = "✕";

        document.body.style.overflow =
        "hidden";

      }

      /* MENU CLOSE */

      else{

        menuToggle.innerHTML = "☰";

        document.body.style.overflow =
        "auto";

      }

    });

  }

  /* =====================================================
     MOBILE DROPDOWN
  ===================================================== */

  navDropdowns.forEach((dropdown) => {

    const parent =
    dropdown.querySelector(".nav-parent");

    if(parent){

      parent.addEventListener("click", (e) => {

        if(window.innerWidth <= 992){

          e.preventDefault();

          dropdown.classList.toggle("active");

        }

      });

    }

  });

  /* =====================================================
     HEADER SCROLL EFFECT
  ===================================================== */

  window.addEventListener("scroll", () => {

    if(siteHeader){

      if(window.scrollY > 40){

        siteHeader.classList.add("scrolled");

      }

      else{

        siteHeader.classList.remove("scrolled");

      }

    }

  });

  /* =====================================================
     ACTIVE PAGE LINK
  ===================================================== */

  const currentPage =
  window.location.pathname
  .split("/")
  .pop();

  navLinks.forEach((link) => {

    const href =
    link.getAttribute("href");

    if(href === currentPage){

      link.classList.add("active");

    }

  });

  /* =====================================================
     CLOSE MENU ON LINK CLICK
  ===================================================== */

  navLinks.forEach((link) => {

    link.addEventListener("click", () => {

      if(window.innerWidth <= 992){

        if(navMenu){

          navMenu.classList.remove("active");

        }

        if(menuToggle){

          menuToggle.innerHTML = "☰";

        }

        document.body.style.overflow =
        "auto";

      }

    });

  });

  /* =====================================================
     CLICK OUTSIDE CLOSE
  ===================================================== */

  document.addEventListener("click", (e) => {

    if(
      window.innerWidth <= 992 &&
      navMenu &&
      navMenu.classList.contains("active")
    ){

      if(
        !navMenu.contains(e.target) &&
        !menuToggle.contains(e.target)
      ){

        navMenu.classList.remove("active");

        if(menuToggle){

          menuToggle.innerHTML = "☰";

        }

        document.body.style.overflow =
        "auto";

      }

    }

  });

  /* =====================================================
     WINDOW RESIZE RESET
  ===================================================== */

  window.addEventListener("resize", () => {

    if(window.innerWidth > 992){

      if(navMenu){

        navMenu.classList.remove("active");

      }

      if(menuToggle){

        menuToggle.innerHTML = "☰";

      }

      document.body.style.overflow =
      "auto";

    }

  });

});