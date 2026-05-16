/* =========================================================
   BUILDDEPLOY TECH - MAIN JS
========================================================= */

/* =========================================================
   LOAD HEADER
========================================================= */

fetch("includes/header.html")
.then((response) => response.text())
.then((data) => {

  const header =
  document.getElementById("header");

  if(header){

    header.innerHTML = data;

    initNavbar();

  }

})
.catch((error) => {

  console.log(
    "Header Load Error:",
    error
  );

});

/* =========================================================
   LOAD FOOTER
========================================================= */

fetch("includes/footer.html")
.then((response) => response.text())
.then((data) => {

  const footer =
  document.getElementById("footer");

  if(footer){

    footer.innerHTML = data;

  }

})
.catch((error) => {

  console.log(
    "Footer Load Error:",
    error
  );

});

/* =========================================================
   NAVBAR
========================================================= */

function initNavbar(){

  const siteHeader =
  document.getElementById("siteHeader");

  const menuToggle =
  document.getElementById("menuToggle");

  const navMenu =
  document.getElementById("navMenu");

  const navDropdowns =
  document.querySelectorAll(".nav-dropdown");

  /* =========================================
     MOBILE MENU
  ========================================= */

  if(menuToggle && navMenu){

    menuToggle.addEventListener("click", () => {

      navMenu.classList.toggle("active");

      if(navMenu.classList.contains("active")){

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

  /* =========================================
     MOBILE DROPDOWN
  ========================================= */

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

  /* =========================================
     HEADER SCROLL EFFECT
  ========================================= */

  window.addEventListener("scroll", () => {

    if(siteHeader){

      if(window.scrollY > 40){

        siteHeader.classList.add("scrolled");

      }else{

        siteHeader.classList.remove("scrolled");

      }

    }

  });

  /* =========================================
     ACTIVE PAGE LINK
  ========================================= */

  const navLinks =
  document.querySelectorAll(".nav-menu a");

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

  /* =========================================
     CLOSE MENU ON LINK CLICK
  ========================================= */

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

  /* =========================================
     RESET ON RESIZE
  ========================================= */

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

}

/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements =
document.querySelectorAll(
  ".main-service-card, .project-card, .why-feature, .performance-card, .expertise-item, .testimonial-card, .cta-card, .strip-box"
);

function revealOnScroll(){

  const triggerBottom =
  window.innerHeight * 0.88;

  revealElements.forEach((element) => {

    const elementTop =
    element.getBoundingClientRect().top;

    if(elementTop < triggerBottom){

      element.classList.add("show-reveal");

    }

  });

}

window.addEventListener(
  "scroll",
  revealOnScroll
);

window.addEventListener(
  "load",
  revealOnScroll
);

/* =========================================================
   COUNTER ANIMATION
========================================================= */

const counters =
document.querySelectorAll(
  ".strip-box h3, .analytics-card h3"
);

function animateCounter(counter){

  const target =
  counter.innerText;

  const numericValue =
  parseInt(
    target.replace(/\D/g, "")
  );

  let current = 0;

  const increment =
  numericValue / 60;

  function updateCounter(){

    current += increment;

    if(current < numericValue){

      counter.innerText =
      Math.floor(current) + "+";

      requestAnimationFrame(updateCounter);

    }else{

      counter.innerText = target;

    }

  }

  updateCounter();

}

const counterObserver =
new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if(entry.isIntersecting){

      animateCounter(entry.target);

      counterObserver.unobserve(
        entry.target
      );

    }

  });

},{
  threshold:0.5
});

counters.forEach((counter) => {

  counterObserver.observe(counter);

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

document.body.appendChild(scrollBtn);

window.addEventListener("scroll", () => {

  if(window.scrollY > 400){

    scrollBtn.classList.add(
      "show-scroll"
    );

  }else{

    scrollBtn.classList.remove(
      "show-scroll"
    );

  }

});

scrollBtn.addEventListener("click", () => {

  window.scrollTo({

    top:0,

    behavior:"smooth"

  });

});

/* =========================================================
   PAGE LOADED
========================================================= */

window.addEventListener("load", () => {

  document.body.classList.add(
    "loaded"
  );

});