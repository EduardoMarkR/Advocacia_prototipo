const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

if (menuToggle && menu) {
  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("active");
  });

  document.querySelectorAll(".menu a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("active");
    });
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12,
  }
);

document.querySelectorAll(".reveal").forEach((item) => {
  observer.observe(item);
});

document.querySelectorAll(".faq-question").forEach((button) => {
  button.addEventListener("click", () => {
    const answer = button.nextElementSibling;
    const parent = button.parentElement;

    document.querySelectorAll(".faq-item").forEach((item) => {
      if (item !== parent) {
        item.querySelector(".faq-answer").style.maxHeight = null;
        item.querySelector(".faq-question span").textContent = "+";
      }
    });

    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
      button.querySelector("span").textContent = "+";
    } else {
      answer.style.maxHeight = answer.scrollHeight + "px";
      button.querySelector("span").textContent = "−";
    }
  });
});

const form = document.querySelector(".contact-form");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Mensagem enviada com sucesso! Depois você pode integrar com WhatsApp, e-mail ou formulário real.");
    form.reset();
  });
}