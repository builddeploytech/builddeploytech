/* =========================================================
   BUILDDEPLOY TECH - ANIMATIONS JS
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =====================================================
     REVEAL ELEMENTS
  ===================================================== */

  const animatedElements =
  document.querySelectorAll(
    ".hero-content, .hero-visual, .main-service-card, .project-card, .why-feature, .performance-card, .expertise-item, .testimonial-card, .cta-box, .section-header"
  );

  /* =====================================================
     INTERSECTION OBSERVER
  ===================================================== */

  const observer =
  new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

      if(entry.isIntersecting){

        entry.target.classList.add(
          "animate-active"
        );

        observer.unobserve(
          entry.target
        );

      }

    });

  },{
    threshold:0.15
  });

  animatedElements.forEach((element) => {

    observer.observe(element);

  });

  /* =====================================================
     HERO FLOATING EFFECT
  ===================================================== */

  const heroVisual =
  document.querySelector(".hero-visual");

  if(heroVisual){

    window.addEventListener(
      "mousemove",
      (e) => {

        if(window.innerWidth > 992){

          const x =
          (
            window.innerWidth / 2 -
            e.clientX
          ) / 90;

          const y =
          (
            window.innerHeight / 2 -
            e.clientY
          ) / 90;

          heroVisual.style.transform =
          `translate(${x}px, ${y}px)`;

        }

      }
    );

  }

  /* =====================================================
     PARALLAX HERO
  ===================================================== */

  window.addEventListener(
    "scroll",
    () => {

      const heroSection =
      document.querySelector(
        ".hero-section"
      );

      if(heroSection){

        const scrollY =
        window.scrollY;

        heroSection.style.backgroundPositionY =
        `${scrollY * 0.12}px`;

      }

    }
  );

  /* =====================================================
     BUTTON MAGNET EFFECT
  ===================================================== */

  const magneticButtons =
  document.querySelectorAll(
    ".primary-btn, .secondary-btn, .nav-cta"
  );

  magneticButtons.forEach((button) => {

    button.addEventListener(
      "mousemove",
      (e) => {

        if(window.innerWidth > 992){

          const rect =
          button.getBoundingClientRect();

          const x =
          e.clientX -
          rect.left -
          rect.width / 2;

          const y =
          e.clientY -
          rect.top -
          rect.height / 2;

          button.style.transform =
          `translate(${x * 0.08}px,
          ${y * 0.08}px)`;

        }

      }
    );

    button.addEventListener(
      "mouseleave",
      () => {

        button.style.transform =
        "translate(0px,0px)";

      }
    );

  });

  /* =====================================================
     STAGGER CARD EFFECT
  ===================================================== */

  const staggerCards =
  document.querySelectorAll(
    ".main-service-card, .project-card, .expertise-item"
  );

  staggerCards.forEach((card, index) => {

    card.style.transitionDelay =
    `${index * 0.08}s`;

  });

  /* =====================================================
     IMAGE PARALLAX
  ===================================================== */

  const projectCards =
  document.querySelectorAll(
    ".project-card"
  );

  projectCards.forEach((card) => {

    const image =
    card.querySelector("img");

    if(!image) return;

    card.addEventListener(
      "mousemove",
      (e) => {

        if(window.innerWidth > 992){

          const rect =
          card.getBoundingClientRect();

          const x =
          e.clientX - rect.left;

          const y =
          e.clientY - rect.top;

          const moveX =
          (
            x - rect.width / 2
          ) / 30;

          const moveY =
          (
            y - rect.height / 2
          ) / 30;

          image.style.transform =
          `scale(1.08)
           translate(${moveX}px,
           ${moveY}px)`;

        }

      }
    );

    card.addEventListener(
      "mouseleave",
      () => {

        image.style.transform =
        "scale(1) translate(0px,0px)";

      }
    );

  });

  /* =====================================================
     NUMBER COUNTER
  ===================================================== */

  const statNumbers =
  document.querySelectorAll(
    ".strip-box h3"
  );

  const countObserver =
  new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

      if(entry.isIntersecting){

        const counter =
        entry.target;

        const originalText =
        counter.innerText;

        const target =
        parseInt(
          originalText.replace(/\D/g,"")
        );

        let current = 0;

        const increment =
        target / 70;

        function updateCounter(){

          current += increment;

          if(current < target){

            counter.innerText =
            Math.floor(current) + "+";

            requestAnimationFrame(
              updateCounter
            );

          }else{

            counter.innerText =
            originalText;

          }

        }

        updateCounter();

        countObserver.unobserve(
          counter
        );

      }

    });

  },{
    threshold:0.6
  });

  statNumbers.forEach((counter) => {

    countObserver.observe(counter);

  });

  /* =====================================================
     SCROLL PROGRESS BAR
  ===================================================== */

  if(
    !document.querySelector(
      ".scroll-progress"
    )
  ){

    const progressBar =
    document.createElement("div");

    progressBar.classList.add(
      "scroll-progress"
    );

    document.body.appendChild(
      progressBar
    );

    window.addEventListener(
      "scroll",
      () => {

        const scrollTop =
        window.scrollY;

        const docHeight =
        document.body.scrollHeight -
        window.innerHeight;

        const progress =
        (scrollTop / docHeight) * 100;

        progressBar.style.width =
        progress + "%";

      }
    );

  }

  /* =====================================================
     CURSOR GLOW EFFECT
  ===================================================== */

  if(window.innerWidth > 768){

    const cursorGlow =
    document.createElement("div");

    cursorGlow.classList.add(
      "cursor-glow"
    );

    document.body.appendChild(
      cursorGlow
    );

    window.addEventListener(
      "mousemove",
      (e) => {

        cursorGlow.style.left =
        e.clientX + "px";

        cursorGlow.style.top =
        e.clientY + "px";

      }
    );

  }

  /* =====================================================
     FADE UP EFFECT
  ===================================================== */

  const fadeElements =
  document.querySelectorAll(
    ".section-header, .footer-top"
  );

  const fadeObserver =
  new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

      if(entry.isIntersecting){

        entry.target.classList.add(
          "fade-up-active"
        );

        fadeObserver.unobserve(
          entry.target
        );

      }

    });

  },{
    threshold:0.2
  });

  fadeElements.forEach((element) => {

    fadeObserver.observe(element);

  });

  /* =====================================================
     PAGE LOADED
  ===================================================== */

  window.addEventListener(
    "load",
    () => {

      document.body.classList.add(
        "loaded"
      );

    }
  );

});