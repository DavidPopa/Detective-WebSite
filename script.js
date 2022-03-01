const header = document.querySelector(".all");
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 100);
});

const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  const update = () => {
    const target = counter.getAttribute("data-target"); // string
    const transStrToNrDataTarget = Number(target);
    const transStrToNrCounterInnerText = Number(counter.innerText); // nr
    if (transStrToNrCounterInnerText < transStrToNrDataTarget) {
      counter.innerHTML = Math.trunc(transStrToNrCounterInnerText + 2);
      setTimeout(update, 10); //cheama functia update peste jumatate de secunda
    }
    // pleaca de la 0 - data-target pt fiecare
  };

  update();
});
