// Мобильное меню
const navToggle = document.getElementById("navToggle");
const navList = document.querySelector(".nav-list");

if (navToggle && navList) {
    navToggle.addEventListener("click", () => {
        navList.classList.toggle("is-open");
    });

    // Закрывать меню при клике по ссылке
    navList.addEventListener("click", (e) => {
        if (e.target.tagName === "A") {
            navList.classList.remove("is-open");
        }
    });
}

// Плавный скролл
document.addEventListener("click", (e) => {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;

    const targetId = link.getAttribute("href").slice(1);
    if (!targetId) return;

    const targetEl = document.getElementById(targetId);
    if (!targetEl) return;

    e.preventDefault();
    const headerOffset = document.querySelector(".site-header")?.offsetHeight || 0;
    const elementPosition = targetEl.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - headerOffset - 8;

    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
    });
});