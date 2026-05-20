/* =========================================================
   BUILDDEPLOY TECH - OPTIMIZED MAIN JS
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =========================================================
     BASE PATH
  ========================================================= */

  const basePath = "/";

  /* =========================================================
     LOAD HEADER
  ========================================================= */

  const header =
  document.getElementById("header");

  if(header){

    fetch(basePath + "includes/header.html")

      .then((response) => {

        if(!response.ok){

          throw new Error(
            "Header not found"
          );

        }

        return response.text();

      })

      .then((data) => {

        header.innerHTML = data;

        initNavbar();

      })

      .catch((error) => {

        console.error(
          "Header Load Error:",
          error
        );

      });

  }

  /* =========================================================
     LOAD FOOTER
  ========================================================= */

  const footer =
  document.getElementById("footer");

  if(footer){

    fetch(basePath + "includes/footer.html")

      .then((response) => {

        if(!response.ok){

          throw new Error(
            "Footer not found"
          );

        }

        return response.text();

      })

      .then((data) => {

        footer.innerHTML = data;

      })

      .catch((error) => {

        console.error(
          "Footer Load Error:",
          error
        );

      });

  }

  /* =========================================================
     REVEAL ANIMATION
     OPTIMIZED WITH INTERSECTION OBSERVER
  ========================================================= */

  const revealElements =
  document.querySelectorAll(

    ".main-service-card,\
    .project-card,\
    .why-feature,\
    .performance-card,\
    .expertise-item,\
    .testimonial-card,\
    .cta-card,\
    .strip-box,\
    .feature-card,\
    .process-card,\
    .blog-card,\
    .faq-card,\
    .pricing-card"

  );

  const revealObserver =
  new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

      if(entry.isIntersecting){

        entry.target.classList.add(
          "show-reveal"
        );

        revealObserver.unobserve(
          entry.target
        );

      }

    });

  },{
    threshold:0.12
  });

  revealElements.forEach((element) => {

    revealObserver.observe(
      element
    );

  });

  /* =========================================================
     COUNTER ANIMATION
  ========================================================= */

  const counters =
  document.querySelectorAll(

    ".strip-box h3,\
    .analytics-card h3"

  );

  function animateCounter(counter){

    const target =
    counter.innerText;

    const numericValue =
    parseInt(
      target.replace(/\D/g, "")
    );

    if(isNaN(numericValue)) return;

    let current = 0;

    const increment =
    numericValue / 60;

    function updateCounter(){

      current += increment;

      if(current < numericValue){

        counter.innerText =
        Math.floor(current) + "+";

        requestAnimationFrame(
          updateCounter
        );

      }else{

        counter.innerText =
        target;

      }

    }

    updateCounter();

  }

  const counterObserver =
  new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

      if(entry.isIntersecting){

        animateCounter(
          entry.target
        );

        counterObserver.unobserve(
          entry.target
        );

      }

    });

  },{
    threshold:0.5
  });

  counters.forEach((counter) => {

    counterObserver.observe(
      counter
    );

  });

  /* =========================================================
     SCROLL TO TOP BUTTON
  ========================================================= */

  const scrollBtn =
  document.createElement("button");

  scrollBtn.innerHTML = "↑";

  scrollBtn.classList.add(
    "scroll-top-btn"
  );

  document.body.appendChild(
    scrollBtn
  );

  scrollBtn.addEventListener("click", () => {

    window.scrollTo({

      top:0,

      behavior:"smooth"

    });

  });

  /* =========================================================
     GLOBAL SCROLL OPTIMIZATION
  ========================================================= */

  let ticking = false;

  function handleScroll(){

    const scrollY =
    window.scrollY;

    /* =========================
       SCROLL TOP BUTTON
    ========================= */

    if(scrollY > 400){

      scrollBtn.classList.add(
        "show-scroll"
      );

    }else{

      scrollBtn.classList.remove(
        "show-scroll"
      );

    }

    /* =========================
       HEADER EFFECT
    ========================= */

    const siteHeader =
    document.getElementById(
      "siteHeader"
    );

    if(siteHeader){

      if(scrollY > 40){

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

  window.addEventListener("scroll", () => {

    if(!ticking){

      window.requestAnimationFrame(() => {

        handleScroll();

      });

      ticking = true;

    }

  });

  /* =========================================================
     PAGE LOADED
  ========================================================= */

  window.addEventListener("load", () => {

    document.body.classList.add(
      "loaded"
    );

  });

});

/* =========================================================
   NAVBAR
========================================================= */

function initNavbar(){

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

  /* =========================================================
     MOBILE MENU
  ========================================================= */

  if(menuToggle && navMenu){

    menuToggle.addEventListener("click", () => {

      navMenu.classList.toggle(
        "active"
      );

      if(
        navMenu.classList.contains(
          "active"
        )
      ){

        menuToggle.innerHTML = "✕";

        document.body.style.overflow =
        "hidden";

      }else{

        menuToggle.innerHTML = "☰";

        document.body.style.overflow =
        "auto";

      }

    });

  }

  /* =========================================================
     MOBILE DROPDOWN
  ========================================================= */

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

  /* =========================================================
     ACTIVE PAGE LINK
  ========================================================= */

  const navLinks =
  document.querySelectorAll(
    ".nav-menu a"
  );

  const currentPath =
  window.location.pathname;

  navLinks.forEach((link) => {

    const href =
    link.getAttribute("href");

    if(
      href &&
      currentPath === href
    ){

      link.classList.add(
        "active"
      );

    }

  });

  /* =========================================================
     CLOSE MENU ON LINK CLICK
  ========================================================= */

  navLinks.forEach((link) => {

    link.addEventListener("click", () => {

      if(window.innerWidth <= 992){

        if(navMenu){

          navMenu.classList.remove(
            "active"
          );

        }

        if(menuToggle){

          menuToggle.innerHTML = "☰";

        }

        document.body.style.overflow =
        "auto";

      }

    });

  });

  /* =========================================================
     RESET ON RESIZE
  ========================================================= */

  window.addEventListener("resize", () => {

    if(window.innerWidth > 992){

      if(navMenu){

        navMenu.classList.remove(
          "active"
        );

      }

      if(menuToggle){

        menuToggle.innerHTML = "☰";

      }

      document.body.style.overflow =
      "auto";

    }

  });

}