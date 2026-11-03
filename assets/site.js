// Leonardo Mota — comportamento da página
// Movimento só com IntersectionObserver ou scroll passado por requestAnimationFrame (skill, B7 e B11).

(function () {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const root = document.documentElement;

  // Menu do celular: painel de altura total, links entram em sequência (60 ms, teto de 400 ms)
  const toggle = document.querySelector(".nav-toggle");
  const menuLinks = document.querySelectorAll(".mobile-menu a");
  menuLinks.forEach((a, i) => { a.style.transitionDelay = Math.min(i * 60, 400) + "ms"; });
  function setMenu(open) {
    root.classList.toggle("nav-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
  }
  if (toggle) {
    toggle.addEventListener("click", () => setMenu(!root.classList.contains("nav-open")));
    menuLinks.forEach((a) => a.addEventListener("click", () => setMenu(false)));
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") setMenu(false); });
  }

  // Seções sobem 32 px e aparecem uma vez
  const reveals = document.querySelectorAll(".reveal, .flow");
  if (reduced || !("IntersectionObserver" in window)) {
    reveals.forEach((el) => el.classList.add("in", "is-on"));
  } else {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("in", "is-on");
        io.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -10% 0px" });
    reveals.forEach((el) => io.observe(el));
  }

  // Passos do cartão de fluxo entram um depois do outro
  document.querySelectorAll(".flow-step").forEach((el, i) => {
    el.style.transitionDelay = reduced ? "0ms" : 200 + i * 140 + "ms";
  });

  // Item atual da navegação
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
  const sections = [...navLinks].map((a) => document.querySelector(a.getAttribute("href"))).filter(Boolean);
  if ("IntersectionObserver" in window && sections.length) {
    const navIo = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((a) => {
          if (a.getAttribute("href") === "#" + entry.target.id) a.setAttribute("aria-current", "true");
          else a.removeAttribute("aria-current");
        });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach((s) => navIo.observe(s));
  }

  // Frase de efeito: cada palavra acende ao cruzar a linha de gatilho (B11)
  const tagline = document.querySelector("[data-tagline]");
  if (tagline) {
    const words = [];
    tagline.querySelectorAll("[data-line]").forEach((line) => {
      const hl = line.hasAttribute("data-hl");
      const parts = line.textContent.trim().split(/\s+/);
      line.textContent = "";
      parts.forEach((w, i) => {
        const span = document.createElement("span");
        span.className = "w" + (hl ? " hl" : "");
        span.textContent = w;
        line.appendChild(span);
        if (i < parts.length - 1) line.appendChild(document.createTextNode(" "));
        words.push(span);
      });
    });
    if (reduced) {
      words.forEach((w) => w.classList.add("on"));
    } else {
      let ticking = false;
      const update = () => {
        const trigger = window.innerHeight * 0.72;
        words.forEach((w) => { if (w.getBoundingClientRect().top < trigger) w.classList.add("on"); });
        ticking = false;
      };
      window.addEventListener("scroll", () => {
        if (!ticking) { ticking = true; requestAnimationFrame(update); }
      }, { passive: true });
      update();
    }
  }

  // Ano do rodapé
  const year = document.querySelector("[data-year]");
  if (year) year.textContent = new Date().getFullYear();
})();
