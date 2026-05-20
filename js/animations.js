/* =========================================================
   BUILDDEPLOY TECH - OPTIMIZED ANIMATIONS JS
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =====================================================
     REVEAL ELEMENTS
  ===================================================== */

  const animatedElements =
  document.querySelectorAll(

    ".hero-content,\
    .hero-visual,\
    .main-service-card,\
    .project-card,\
    .why-feature,\
    .performance-card,\
    .expertise-item,\
    .testimonial-card,\
    .cta-box,\
    .section-header,\
    .blog-card,\
    .faq-card,\
    .pricing-card,\
    .process-card,\
    .feature-card"

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
    threshold:0.12
  });

  animatedElements.forEach((element) => {

    observer.observe(element);

  });

  /* =====================================================
     STAGGER CARD EFFECT
  ===================================================== */

  const staggerCards =
  document.querySelectorAll(

    ".main-service-card,\
    .project-card,\
    .expertise-item,\
    .blog-card,\
    .pricing-card"

  );

  staggerCards.forEach((card, index) => {

    card.style.transitionDelay =
    `${index * 0.05}s`;

  });

  /* =====================================================
     NUMBER COUNTER
  ===================================================== */

  const statNumbers =
  document.querySelectorAll(
    ".strip-box h3,\
    .analytics-card h3"
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

        if(isNaN(target)) return;

        let current = 0;

        const increment =
        target / 60;

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
    threshold:0.5
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

    let ticking = false;

    function updateProgress(){

      const scrollTop =
      window.scrollY;

      const docHeight =
      document.body.scrollHeight -
      window.innerHeight;

      const progress =
      (scrollTop / docHeight) * 100;

      progressBar.style.width =
      progress + "%";

      ticking = false;

    }

    window.addEventListener(
      "scroll",
      () => {

        if(!ticking){

          requestAnimationFrame(
            updateProgress
          );

          ticking = true;

        }

      }
    );

  }

  /* =====================================================
     FADE UP EFFECT
  ===================================================== */

  const fadeElements =
  document.querySelectorAll(
    ".section-header,\
    .footer-top,\
    .blog-hero-content"
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
    threshold:0.15
  });

  fadeElements.forEach((element) => {

    fadeObserver.observe(element);

  });

  /* =====================================================
     SMOOTH IMAGE LOADING
  ===================================================== */

  const images =
  document.querySelectorAll("img");

  images.forEach((image) => {

    image.addEventListener(
      "load",
      () => {

        image.classList.add(
          "image-loaded"
        );

      }
    );

  });

  /* =====================================================
     BUTTON HOVER EFFECT
     LIGHTWEIGHT VERSION
  ===================================================== */

  const buttons =
  document.querySelectorAll(
    ".primary-btn,\
    .secondary-btn,\
    .nav-cta"
  );

  buttons.forEach((button) => {

    button.addEventListener(
      "mouseenter",
      () => {

        button.classList.add(
          "btn-hover-active"
        );

      }
    );

    button.addEventListener(
      "mouseleave",
      () => {

        button.classList.remove(
          "btn-hover-active"
        );

      }
    );

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