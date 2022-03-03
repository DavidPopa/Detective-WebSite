const header = document.querySelector(".all");
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 400);
});

const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  const update = () => {
    const target = counter.getAttribute("data-target"); // string
    const transStrToNrDataTarget = Number(target);
    const transStrToNrCounterInnerText = Number(counter.innerText); // nr
    if (transStrToNrCounterInnerText < transStrToNrDataTarget) {
      counter.innerHTML = Math.trunc(transStrToNrCounterInnerText + 2);
      setTimeout(update, 50); //cheama functia update peste jumatate de secunda
    }
    // pleaca de la 0 - data-target pt fiecare
  };

  update();
});

const accordionItems = document.querySelectorAll(".accordion-item-header");
accordionItems.forEach((accordionItem) => {
  accordionItem.addEventListener("click", (e) => {
    accordionItem.classList.toggle("active");
    const accordionItemBody = accordionItem.nextElementSibling;
    if (accordionItem.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
      console.log(accordionItemBody.style.maxHeight);
    } else {
      accordionItemBody.style.maxHeight = 0;
    }

    const currentActiveAccordionItem = document.querySelector(
      ".accordion-item-header.active"
    );
    if (
      currentActiveAccordionItem &&
      currentActiveAccordionItem !== accordionItem
    ) {
      currentActiveAccordionItem.classList.toggle("active");
      currentActiveAccordionItem.nextElementSibling.style.maxHeight = 0;
    }
  });
});
