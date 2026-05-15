// ================= REVEAL ANIMATION =================
function revealElements() {

  const revealItems =
    document.querySelectorAll(
      `
      .service-card,
      .project-card,
      .why-card,
      .feature-card,
      .pricing-card,
      .faq-card,
      .blog-card,
      .process-card,
      .main-service-card,
      .included-card,
      .why-about-card,
      .mission-card,
      .contact-item,
      .tech-card
      `
    );

  const windowHeight =
    window.innerHeight;

  revealItems.forEach((item) => {

    const itemTop =
      item.getBoundingClientRect().top;

    const revealPoint = 120;

    if (itemTop < windowHeight - revealPoint) {

      item.classList.add("reveal-active");

    }

  });

}

// ================= HERO FLOATING EFFECT =================
function floatingAnimation() {

  const heroCard =
    document.querySelector(".hero-card");

  if (!heroCard) return;

  let position = 0;

  setInterval(() => {

    position += 0.5;

    heroCard.style.transform =
      `translateY(${Math.sin(position * 0.1) * 10}px)`;

  }, 30);

}

// ================= NUMBER COUNTER =================
function counterAnimation() {

  const counters =
    document.querySelectorAll(
      ".hero-stat h3, .project-stat-card h3"
    );

  counters.forEach((counter) => {

    const updateCounter = () => {

      const target =
        +counter.innerText.replace(/\D/g, "");

      let count =
        +counter.getAttribute("data-count") || 0;

      const increment =
        target / 60;

      if (count < target) {

        count += increment;

        counter.setAttribute(
          "data-count",
          Math.ceil(count)
        );

        const suffix =
          counter.innerText.replace(/[0-9]/g, "");

        counter.innerText =
          Math.ceil(count) + suffix;

        requestAnimationFrame(updateCounter);

      } else {

        counter.innerText =
          target +
          counter.innerText.replace(/[0-9]/g, "");

      }

    };

    updateCounter();

  });

}

// ================= PARALLAX EFFECT =================
function parallaxEffect() {

  const blur1 =
    document.querySelector(".hero-blur-1");

  const blur2 =
    document.querySelector(".hero-blur-2");

  window.addEventListener("scroll", () => {

    const scrollY =
      window.scrollY;

    if (blur1) {

      blur1.style.transform =
        `translateY(${scrollY * 0.15}px)`;

    }

    if (blur2) {

      blur2.style.transform =
        `translateY(${scrollY * -0.1}px)`;

    }

  });

}

// ================= BUTTON HOVER GLOW =================
function buttonGlowEffect() {

  const buttons =
    document.querySelectorAll(
      ".primary-btn"
    );

  buttons.forEach((button) => {

    button.addEventListener(
      "mousemove",
      (e) => {

        const rect =
          button.getBoundingClientRect();

        const x =
          e.clientX - rect.left;

        const y =
          e.clientY - rect.top;

        button.style.setProperty(
          "--x",
          `${x}px`
        );

        button.style.setProperty(
          "--y",
          `${y}px`
        );

      }
    );

  });

}

// ================= SCROLL PROGRESS =================
function scrollProgressBar() {

  const progressBar =
    document.createElement("div");

  progressBar.classList.add(
    "scroll-progress-bar"
  );

  document.body.appendChild(progressBar);

  window.addEventListener("scroll", () => {

    const scrollTop =
      document.documentElement.scrollTop;

    const scrollHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const progress =
      (scrollTop / scrollHeight) * 100;

    progressBar.style.width =
      progress + "%";

  });

}

// ================= ACTIVE SECTION HIGHLIGHT =================
function activeSectionHighlight() {

  const sections =
    document.querySelectorAll("section");

  const navLinks =
    document.querySelectorAll(".nav-menu a");

  window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

      const sectionTop =
        section.offsetTop;

      if (window.scrollY >= sectionTop - 200) {

        current =
          section.getAttribute("id");

      }

    });

    navLinks.forEach((link) => {

      link.classList.remove("section-active");

      if (
        link.getAttribute("href") ===
        `#${current}`
      ) {

        link.classList.add("section-active");

      }

    });

  });

}

// ================= IMAGE HOVER EFFECT =================
function imageHoverEffect() {

  const images =
    document.querySelectorAll(
      ".project-image img, .blog-image img"
    );

  images.forEach((image) => {

    image.addEventListener("mousemove", (e) => {

      const rect =
        image.getBoundingClientRect();

      const x =
        e.clientX - rect.left;

      const y =
        e.clientY - rect.top;

      image.style.transform =
        `
        perspective(1000px)
        rotateX(${-(y - rect.height / 2) / 30}deg)
        rotateY(${(x - rect.width / 2) / 30}deg)
        scale(1.05)
        `;

    });

    image.addEventListener("mouseleave", () => {

      image.style.transform =
        `
        perspective(1000px)
        rotateX(0)
        rotateY(0)
        scale(1)
        `;

    });

  });

}

// ================= INIT ANIMATIONS =================
function initAnimations() {

  revealElements();

  floatingAnimation();

  counterAnimation();

  parallaxEffect();

  buttonGlowEffect();

  scrollProgressBar();

  activeSectionHighlight();

  imageHoverEffect();

}

// ================= EVENTS =================
window.addEventListener(
  "scroll",
  revealElements
);

document.addEventListener(
  "DOMContentLoaded",
  initAnimations
);