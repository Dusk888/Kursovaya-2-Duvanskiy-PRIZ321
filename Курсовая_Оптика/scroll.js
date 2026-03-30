navToggle.addEventListener("click", () => {
  navList.classList.toggle("is-open");
  document.body.style.overflow = navList.classList.contains("is-open") ? "hidden" : "auto";
});