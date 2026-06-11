/* Family Clean Brunico — interactions
   Lightweight, dependency-free, performance-minded. */

// --- Internationalisation (Italian default, English optional) ---
const I18N = {
  it: {
    "meta.title": "Family Clean Brunico — Servizi di Pulizia Professionali a Brunico",
    "meta.desc": "Servizi di pulizia professionali a Brunico, Italia. Pulizia di case, appartamenti, uffici e aziende — affidabile e attenta ai dettagli. Chiama per un preventivo gratuito.",
    "nav.home": "Home",
    "nav.services": "Servizi",
    "nav.about": "Chi siamo",
    "nav.contact": "Contatti",
    "nav.callBtn": "Chiama +39 388 8271051",
    "hero.eyebrow": "Pulizie Professionali · Brunico, Italia",
    "hero.lead": "Pulizia professionale per case, appartamenti, uffici e aziende — con cura, affidabilità e attenzione ai dettagli.",
    "cta.estimate": "Chiama per un Preventivo Gratuito",
    "cta.viewServices": "Scopri i Servizi",
    "services.eyebrow": "Cosa offriamo",
    "services.title": "Servizi di pulizia per ogni ambiente",
    "services.sub": "Pulizia su misura e attenta ai dettagli per case, aziende e tutto il resto.",
    "svc.home.title": "Pulizie Domestiche",
    "svc.home.desc": "Pulizia accurata, periodica o una tantum, per mantenere la tua casa fresca, ordinata e accogliente.",
    "svc.home.alt": "Addetto che aspira il tappeto di un soggiorno",
    "svc.apartment.title": "Pulizia Appartamenti",
    "svc.apartment.desc": "Pulizia efficiente e attenta, pensata per appartamenti e spazi abitativi più piccoli.",
    "svc.apartment.alt": "Addetto che pulisce la finestra di un appartamento",
    "svc.office.title": "Pulizia Uffici",
    "svc.office.desc": "Pulizia affidabile per uffici e spazi di lavoro, organizzata in base ai tuoi orari.",
    "svc.office.alt": "Pulizia profonda della moquette di un ufficio",
    "svc.business.title": "Pulizie Aziendali",
    "svc.business.desc": "Pulizia professionale per negozi, studi e spazi commerciali di ogni tipo.",
    "svc.business.alt": "Team di pulizia al lavoro in una hall commerciale",
    "about.eyebrow": "Chi siamo",
    "about.title": "Pulizia su cui puoi contare, sempre",
    "about.body": "Family Clean Brunico offre servizi di pulizia affidabili e attenti ai dettagli per case, appartamenti, uffici e attività locali a Brunico e dintorni. Puntiamo su fiducia, costanza e qualità del servizio.",
    "about.li1": "Team cordiale e professionale",
    "about.li2": "Risultati costanti e di alta qualità",
    "about.li3": "Orari flessibili su misura per te",
    "about.badgeStrong": "Locale",
    "about.badgeSpan": "Brunico e dintorni",
    "contact.eyebrow": "Contattaci",
    "contact.title": "Richiedi un preventivo gratuito",
    "contact.sub": "Chiamaci oggi per parlare delle tue esigenze di pulizia e richiedere un preventivo gratuito.",
    "contact.phone": "Telefono",
    "contact.email": "Email",
    "contact.area": "Zona di servizio",
    "contact.areaVal": "Brunico, Italia e zone limitrofe",
    "contact.ctaTitle": "Parliamo del tuo spazio",
    "contact.ctaBody": "Preferisci parlarne? Contattaci per telefono o email e ti risponderemo con un preventivo gratuito e senza impegno.",
    "contact.emailBtn": "Scrivici una Email",
    "footer.tagline": "Servizi di Pulizia Professionali",
    "footer.location": "Brunico, Italia",
    "footer.exploreHead": "Esplora",
    "footer.contactHead": "Contatti",
    "footer.rights": "Family Clean Brunico. Tutti i diritti riservati.",
    "footer.bottomLoc": "Brunico, Italia",
  },
  en: {
    "meta.title": "Family Clean Brunico — Premium Cleaning Services in Brunico, Italy",
    "meta.desc": "Premium cleaning services in Brunico, Italy. Professional cleaning for homes, apartments, offices and businesses — reliable and detail-focused. Call for a free estimate.",
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.callBtn": "Call +39 388 8271051",
    "hero.eyebrow": "Professional Cleaning · Brunico, Italy",
    "hero.lead": "Professional cleaning for homes, apartments, offices, and businesses — delivered with care, reliability, and attention to detail.",
    "cta.estimate": "Call for a Free Estimate",
    "cta.viewServices": "View Services",
    "services.eyebrow": "What we offer",
    "services.title": "Cleaning services for every space",
    "services.sub": "Tailored, detail-focused cleaning for homes, businesses, and everything in between.",
    "svc.home.title": "Home Cleaning",
    "svc.home.desc": "Thorough, regular or one-time cleaning that keeps your home fresh, tidy, and comfortable.",
    "svc.home.alt": "Cleaner vacuuming a living-room carpet",
    "svc.apartment.title": "Apartment Cleaning",
    "svc.apartment.desc": "Efficient, careful cleaning designed for apartments and smaller living spaces.",
    "svc.apartment.alt": "Cleaner washing an apartment window",
    "svc.office.title": "Office Cleaning",
    "svc.office.desc": "Dependable cleaning for offices and workspaces, scheduled around your working hours.",
    "svc.office.alt": "Deep-cleaning an office carpet with an extractor",
    "svc.business.title": "Business Cleaning",
    "svc.business.desc": "Professional cleaning for shops, studios, and commercial spaces of every kind.",
    "svc.business.alt": "Cleaning team working in a commercial lobby",
    "about.eyebrow": "About us",
    "about.title": "Cleaning you can rely on, every time",
    "about.body": "Family Clean Brunico provides reliable, detail-focused cleaning services for homes, apartments, offices, and local businesses in Brunico and the surrounding area. We focus on trust, consistency, and quality service.",
    "about.li1": "Friendly, professional team",
    "about.li2": "Consistent, high-quality results",
    "about.li3": "Flexible scheduling that suits you",
    "about.badgeStrong": "Local",
    "about.badgeSpan": "Brunico & nearby",
    "contact.eyebrow": "Get in touch",
    "contact.title": "Request a free estimate",
    "contact.sub": "Call us today to discuss your cleaning needs and request a free estimate.",
    "contact.phone": "Phone",
    "contact.email": "Email",
    "contact.area": "Service Area",
    "contact.areaVal": "Brunico, Italy and nearby areas",
    "contact.ctaTitle": "Let's talk about your space",
    "contact.ctaBody": "Prefer to talk it through? Reach out by phone or email and we'll get back to you with a free, no-obligation estimate.",
    "contact.emailBtn": "Email Us",
    "footer.tagline": "Professional Cleaning Services",
    "footer.location": "Brunico, Italy",
    "footer.exploreHead": "Explore",
    "footer.contactHead": "Contact",
    "footer.rights": "Family Clean Brunico. All rights reserved.",
    "footer.bottomLoc": "Brunico, Italy",
  },
  de: {
    "meta.title": "Family Clean Brunico — Professionelle Reinigungsdienste in Bruneck",
    "meta.desc": "Professionelle Reinigungsdienste in Bruneck, Italien. Reinigung von Häusern, Wohnungen, Büros und Unternehmen — zuverlässig und detailgenau. Rufen Sie für ein kostenloses Angebot an.",
    "nav.home": "Home",
    "nav.services": "Leistungen",
    "nav.about": "Über uns",
    "nav.contact": "Kontakt",
    "nav.callBtn": "Anrufen +39 388 8271051",
    "hero.eyebrow": "Professionelle Reinigung · Bruneck, Italien",
    "hero.lead": "Professionelle Reinigung für Häuser, Wohnungen, Büros und Unternehmen — mit Sorgfalt, Zuverlässigkeit und Liebe zum Detail.",
    "cta.estimate": "Kostenloses Angebot anfordern",
    "cta.viewServices": "Leistungen ansehen",
    "services.eyebrow": "Was wir bieten",
    "services.title": "Reinigungsdienste für jeden Bereich",
    "services.sub": "Maßgeschneiderte, detailgenaue Reinigung für Häuser, Unternehmen und alles dazwischen.",
    "svc.home.title": "Hausreinigung",
    "svc.home.desc": "Gründliche, regelmäßige oder einmalige Reinigung, die Ihr Zuhause frisch, ordentlich und behaglich hält.",
    "svc.home.alt": "Reinigungskraft saugt den Teppich eines Wohnzimmers",
    "svc.apartment.title": "Wohnungsreinigung",
    "svc.apartment.desc": "Effiziente, sorgfältige Reinigung speziell für Wohnungen und kleinere Wohnräume.",
    "svc.apartment.alt": "Reinigungskraft putzt das Fenster einer Wohnung",
    "svc.office.title": "Büroreinigung",
    "svc.office.desc": "Zuverlässige Reinigung für Büros und Arbeitsräume, abgestimmt auf Ihre Arbeitszeiten.",
    "svc.office.alt": "Tiefenreinigung des Teppichs eines Büros",
    "svc.business.title": "Gewerbereinigung",
    "svc.business.desc": "Professionelle Reinigung für Geschäfte, Studios und Gewerberäume aller Art.",
    "svc.business.alt": "Reinigungsteam bei der Arbeit in einer Geschäftslobby",
    "about.eyebrow": "Über uns",
    "about.title": "Reinigung, auf die Sie sich verlassen können — jederzeit",
    "about.body": "Family Clean Brunico bietet zuverlässige, detailgenaue Reinigungsdienste für Häuser, Wohnungen, Büros und lokale Unternehmen in Bruneck und Umgebung. Wir setzen auf Vertrauen, Beständigkeit und Servicequalität.",
    "about.li1": "Freundliches, professionelles Team",
    "about.li2": "Gleichbleibend hochwertige Ergebnisse",
    "about.li3": "Flexible Termine, die zu Ihnen passen",
    "about.badgeStrong": "Lokal",
    "about.badgeSpan": "Bruneck & Umgebung",
    "contact.eyebrow": "Kontakt aufnehmen",
    "contact.title": "Kostenloses Angebot anfordern",
    "contact.sub": "Rufen Sie uns noch heute an, um Ihren Reinigungsbedarf zu besprechen und ein kostenloses Angebot anzufordern.",
    "contact.phone": "Telefon",
    "contact.email": "E-Mail",
    "contact.area": "Einzugsgebiet",
    "contact.areaVal": "Bruneck, Italien und Umgebung",
    "contact.ctaTitle": "Sprechen wir über Ihre Räume",
    "contact.ctaBody": "Lieber persönlich besprechen? Kontaktieren Sie uns telefonisch oder per E-Mail und wir melden uns mit einem kostenlosen, unverbindlichen Angebot.",
    "contact.emailBtn": "E-Mail schreiben",
    "footer.tagline": "Professionelle Reinigungsdienste",
    "footer.location": "Bruneck, Italien",
    "footer.exploreHead": "Entdecken",
    "footer.contactHead": "Kontakt",
    "footer.rights": "Family Clean Brunico. Alle Rechte vorbehalten.",
    "footer.bottomLoc": "Bruneck, Italien",
  },
};

function applyLanguage(lang) {
  const dict = I18N[lang] || I18N.it;
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const val = dict[el.getAttribute("data-i18n")];
    if (val != null) el.textContent = val;
  });
  document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
    el.getAttribute("data-i18n-attr").split(";").forEach((pair) => {
      const [attr, key] = pair.split(":");
      if (attr && key && dict[key] != null) el.setAttribute(attr, dict[key]);
    });
  });

  if (dict["meta.title"]) document.title = dict["meta.title"];
  const md = document.querySelector('meta[name="description"]');
  if (md && dict["meta.desc"]) md.setAttribute("content", dict["meta.desc"]);

  document.querySelectorAll(".lang-btn").forEach((b) => {
    const on = b.dataset.lang === lang;
    b.classList.toggle("active", on);
    b.setAttribute("aria-pressed", String(on));
  });

  try { localStorage.setItem("lang", lang); } catch (e) {}
}

(function initLanguage() {
  let lang = "it";
  try { lang = localStorage.getItem("lang") || "it"; } catch (e) {}
  if (lang !== "it" && lang !== "en" && lang !== "de") lang = "it";
  applyLanguage(lang);
  document.querySelectorAll(".lang-btn").forEach((b) =>
    b.addEventListener("click", () => applyLanguage(b.dataset.lang))
  );
})();

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
