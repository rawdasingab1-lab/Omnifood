const headerEl = document.querySelector(".header");
const btnNavEl = document.querySelector(".btn-mobile-nav");


const yearEl = document.querySelector(".year");
if (yearEl) yearEl.textContent = new Date().getFullYear();


function setNav(open) {
  headerEl.classList.toggle("nav-open", open);
  btnNavEl.setAttribute("aria-expanded", String(open));
  document.body.style.overflow = open ? "hidden" : "";
}
btnNavEl.addEventListener("click", () => setNav(!headerEl.classList.contains("nav-open")));
document.addEventListener("keydown", (e) => e.key === "Escape" && setNav(false));
window.matchMedia("(min-width: 1024px)").addEventListener("change", (e) => e.matches && setNav(false));

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    const href = link.getAttribute("href");
    if (href === "#") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    if (link.classList.contains("main-nav-link")) setNav(false);
  });
});

// Sticky header
const sectionHeroEl = document.querySelector(".section-hero");
new IntersectionObserver(
  ([ent]) => document.body.classList.toggle("is-sticky", !ent.isIntersecting),
  { root: null, threshold: 0, rootMargin: "-80px" }
).observe(sectionHeroEl);