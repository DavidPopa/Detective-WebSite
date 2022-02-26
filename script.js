const header = document.querySelector(".all");
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 50);
});
