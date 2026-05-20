/* =========================================================
   BUILDDEPLOY TECH - OPTIMIZED NAVBAR JS
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =====================================================
     ELEMENTS
  ===================================================== */

  const siteHeader =
  document.getElementById(
    "siteHeader"
  );

  const menuToggle =
  document.getElementById(
    "menuToggle"
  );

  const navMenu =
  document.getElementById(
    "navMenu"
  );

  const navDropdowns =
  document.querySelectorAll(
    ".nav-dropdown"
  );

  const navLinks =
  document.querySelectorAll(
    ".nav-menu a"
  );

  /* =====================================================
     MOBILE MENU TOGGLE
  ===================================================== */

  if(menuToggle && navMenu){

    menuToggle.addEventListener(
      "click",
      () => {

        navMenu.classList.toggle(
          "active"
        );

        const isActive =
        navMenu.classList.contains(
          "active"
        );

        menuToggle.innerHTML =
        isActive ? "✕" : "☰";

        document.body.style.overflow =
        isActive ? "hidden" : "auto";

      }
    );

  }

  /* =====================================================
     MOBILE DROPDOWN
  ===================================================== */

  navDropdowns.forEach((dropdown) => {

    const parent =
    dropdown.querySelector(
      ".nav-parent"
    );

    if(parent){

      parent.addEventListener(
        "click",
        (e) => {

          if(window.innerWidth <= 992){

            e.preventDefault();

            dropdown.classList.toggle(
              "active"
            );

          }

        }
      );

    }

  });

  /* =====================================================
     HEADER SCROLL EFFECT
     OPTIMIZED
  ===================================================== */

  let ticking = false;

  function updateHeader(){

    if(siteHeader){

      if(window.scrollY > 40){

        siteHeader.classList.add(
          "scrolled"
        );

      }else{

        siteHeader.classList.remove(
          "scrolled"
        );

      }

    }

    ticking = false;

  }

  window.addEventListener(
    "scroll",
    () => {

      if(!ticking){

        requestAnimationFrame(() => {

          updateHeader();

        });

        ticking = true;

      }

    }
  );

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

    if(!href) return;

    const cleanHref =
    href.split("/").pop();

    if(cleanHref === currentPage){

      link.classList.add(
        "active"
      );

    }

  });

  /* =====================================================
     CLOSE MENU ON LINK CLICK
  ===================================================== */

  navLinks.forEach((link) => {

    link.addEventListener(
      "click",
      () => {

        if(window.innerWidth <= 992){

          if(navMenu){

            navMenu.classList.remove(
              "active"
            );

          }

          if(menuToggle){

            menuToggle.innerHTML =
            "☰";

          }

          document.body.style.overflow =
          "auto";

        }

      }
    );

  });

  /* =====================================================
     CLICK OUTSIDE CLOSE
  ===================================================== */

  document.addEventListener(
    "click",
    (e) => {

      if(
        window.innerWidth <= 992 &&
        navMenu &&
        menuToggle &&
        navMenu.classList.contains(
          "active"
        )
      ){

        if(
          !navMenu.contains(e.target) &&
          !menuToggle.contains(e.target)
        ){

          navMenu.classList.remove(
            "active"
          );

          menuToggle.innerHTML =
          "☰";

          document.body.style.overflow =
          "auto";

        }

      }

    }
  );

  /* =====================================================
     ESC KEY CLOSE
  ===================================================== */

  document.addEventListener(
    "keydown",
    (e) => {

      if(
        e.key === "Escape" &&
        navMenu &&
        navMenu.classList.contains(
          "active"
        )
      ){

        navMenu.classList.remove(
          "active"
        );

        if(menuToggle){

          menuToggle.innerHTML =
          "☰";

        }

        document.body.style.overflow =
        "auto";

      }

    }
  );

  /* =====================================================
     WINDOW RESIZE RESET
  ===================================================== */

  window.addEventListener(
    "resize",
    () => {

      if(window.innerWidth > 992){

        if(navMenu){

          navMenu.classList.remove(
            "active"
          );

        }

        if(menuToggle){

          menuToggle.innerHTML =
          "☰";

        }

        document.body.style.overflow =
        "auto";

      }

    }
  );

  /* =====================================================
     INITIAL HEADER STATE
  ===================================================== */

  updateHeader();

});