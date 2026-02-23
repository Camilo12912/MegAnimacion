document.addEventListener("DOMContentLoaded", () => {

  // === ANIMACIÓN DE ENTRADA ===
  const logo = document.querySelector(".brand img");
  const title = document.querySelector(".title");
  const subtitle = document.querySelector(".subtitle");
  const buttons = document.querySelectorAll(".btn, .social");

  if (logo) {
    logo.style.opacity = "0";
    logo.style.transform = "scale(0.8)";
    setTimeout(() => {
      logo.style.transition = "all .6s ease";
      logo.style.opacity = "1";
      logo.style.transform = "scale(1)";
    }, 200);
  }

  if (title) {
    title.style.opacity = "0";
    title.style.transform = "translateY(20px)";
    setTimeout(() => {
      title.style.transition = "all .6s ease";
      title.style.opacity = "1";
      title.style.transform = "translateY(0)";
    }, 500);
  }

  if (subtitle) {
    subtitle.style.opacity = "0";
    subtitle.style.transform = "translateY(20px)";
    setTimeout(() => {
      subtitle.style.transition = "all .6s ease";
      subtitle.style.opacity = "1";
      subtitle.style.transform = "translateY(0)";
    }, 700);
  }

  // === EFECTO RIPPLE + CONFIRMACIÓN EXTERNA ===
  buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const circle = document.createElement("span");
      circle.classList.add("ripple");
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      circle.style.left = `${x}px`;
      circle.style.top = `${y}px`;
      btn.appendChild(circle);
      setTimeout(() => circle.remove(), 600);

      const url = btn.getAttribute && btn.getAttribute("href");
      if (url && !url.startsWith("#") && !url.startsWith("javascript:")) {
        e.preventDefault();
        if (confirm(`¿Quieres ir a ${btn.textContent.trim()}?`)) {
          window.open(url, "_blank");
        }
      }
    });
  });

  // === SISTEMA DE MODALES ANIDADOS FIJADO ===
  const modals = document.querySelectorAll(".modal");
  const modalTriggers = document.querySelectorAll("[data-modal]");
  const closeButtons = document.querySelectorAll(".modal__close");

  let modalStack = [];
  let scrollPosition = 0;

  function lockScroll() {
    scrollPosition = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollPosition}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
  }

  function unlockScroll() {
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.left = "";
    document.body.style.right = "";
    window.scrollTo(0, scrollPosition);
  }

  function openModal(modalId, parentId = null) {
    const modal = document.getElementById(modalId);
    if (!modal) return;

    const openModalNow = Array.from(modals).find(m => m.style.display === "flex");
    if (openModalNow && openModalNow.id !== modalId) {
      openModalNow.classList.remove("show");
      modalStack.push(openModalNow.id);
      setTimeout(() => (openModalNow.style.display = "none"), 200);
    } else if (!parentId) {
      lockScroll();
    }

    modal.style.display = "flex";
    setTimeout(() => modal.classList.add("show"), 10);
    modal.setAttribute("aria-hidden", "false");

    const focusable = modal.querySelector("button, a[href]");
    if (focusable) focusable.focus();
  }

  function closeModal(modal) {
    if (!modal) return;
    modal.classList.remove("show");

    setTimeout(() => {
      modal.style.display = "none";
      modal.setAttribute("aria-hidden", "true");

      if (modalStack.length > 0) {
        const parentId = modalStack.pop();
        const parentModal = document.getElementById(parentId);
        if (parentModal) {
          parentModal.style.display = "flex";
          setTimeout(() => parentModal.classList.add("show"), 10);
        }
      } else {
        unlockScroll();
      }
    }, 200);
  }

  modalTriggers.forEach(trigger => {
    trigger.addEventListener("click", (e) => {
      e.preventDefault();
      const modalId = trigger.getAttribute("data-modal");
      const parentId = trigger.getAttribute("data-parent");
      openModal(modalId, parentId);
    });
  });

  closeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const modal = btn.closest(".modal");
      closeModal(modal);
    });
  });

  window.addEventListener("click", (e) => {
    modals.forEach((modal) => {
      if (e.target === modal) closeModal(modal);
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" || e.keyCode === 27) {
      const open = Array.from(modals).find(m => m.style.display === "flex");
      if (open) closeModal(open);
    }

    if (e.key === "Tab") {
      const activeModal = Array.from(modals).find(m => m.style.display === "flex");
      if (!activeModal) return;

      const focusables = activeModal.querySelectorAll(
        "a[href], button:not([disabled]), textarea, input, select"
      );
      const focusArray = Array.from(focusables).filter(el => el.offsetParent !== null);
      if (!focusArray.length) return;

      const first = focusArray[0];
      const last = focusArray[focusArray.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });

   // === GALERÍA CARRUSEL ===
  const track = document.querySelector(".carousel-track");
  const items = document.querySelectorAll(".carousel-item");
  const prevBtn = document.querySelector(".carousel-btn.prev");
  const nextBtn = document.querySelector(".carousel-btn.next");

  if (track && items.length > 0) {
    let currentIndex = 0;

    function updateCarousel() {
      const offset = -currentIndex * 100;
      track.style.transform = `translateX(${offset}%)`;
    }

    nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % items.length;
      updateCarousel();
    });

    prevBtn.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + items.length) % items.length;
      updateCarousel();
    });

    // Cambio automático cada 5 segundos
    setInterval(() => {
      currentIndex = (currentIndex + 1) % items.length;
      updateCarousel();
    }, 5000);
  }
});
