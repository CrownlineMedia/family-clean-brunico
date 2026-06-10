/* Family Clean Brunico — interactions
   Lightweight, dependency-free, performance-minded. */

// --- Footer year ---
document.getElementById("year").textContent = new Date().getFullYear();

// --- Header shadow on scroll ---
const header = document.getElementById("site-header");
const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 8);
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

// --- Mobile navigation toggle ---
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");
navToggle.addEventListener("click", () => {
  const open = navMenu.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(open));
  navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
});
// Close the menu after tapping a link
navMenu.querySelectorAll("a").forEach((link) =>
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open menu");
  })
);

// --- Services: tap-to-expand cards (mobile only) ---
const mqMobile = window.matchMedia("(max-width: 560px)");
const serviceCards = document.querySelectorAll(".service-card");

function closeAllCards() {
  serviceCards.forEach((c) => {
    c.classList.remove("active");
    c.setAttribute("aria-expanded", "false");
  });
}

function toggleCard(card) {
  if (!mqMobile.matches) return; // interactive on mobile only
  const wasActive = card.classList.contains("active");
  closeAllCards();
  if (!wasActive) {
    card.classList.add("active");
    card.setAttribute("aria-expanded", "true");
  }
}

// Make cards a button-like control only while in mobile mode
function syncCardsA11y() {
  serviceCards.forEach((card) => {
    if (mqMobile.matches) {
      card.setAttribute("role", "button");
      card.setAttribute("tabindex", "0");
      if (!card.hasAttribute("aria-expanded")) card.setAttribute("aria-expanded", "false");
    } else {
      card.removeAttribute("role");
      card.removeAttribute("tabindex");
      card.removeAttribute("aria-expanded");
      card.classList.remove("active");
    }
  });
}

serviceCards.forEach((card) => {
  card.addEventListener("click", () => toggleCard(card));
  card.addEventListener("keydown", (e) => {
    if (mqMobile.matches && (e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      toggleCard(card);
    }
  });
});

syncCardsA11y();
mqMobile.addEventListener("change", syncCardsA11y);

// --- Reveal on scroll (IntersectionObserver) ---
const revealEls = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  revealEls.forEach((el) => observer.observe(el));
} else {
  // Fallback: just show everything
  revealEls.forEach((el) => el.classList.add("is-visible"));
}
