const prevItemElement = document.querySelector(".slider__arrow_prev");
const nextItemElement = document.querySelector(".slider__arrow_next");

nextItemElement.onclick = function() {
  const currentSlideElement = document.querySelector(".slider__item_active");
  currentSlideElement.classList.remove("slider__item_active");
  const nextSlideElement = currentSlideElement.nextElementSibling;
  if (nextSlideElement) {
    nextSlideElement.classList.add("slider__item_active");
  } else {
    const sliderItemsElement = currentSlideElement.parentElement;
    const firstSlideElement = sliderItemsElement.firstElementChild;
    firstSlideElement.classList.add("slider__item_active");
  }
};

prevItemElement.onclick = function() {
  const currentSlideElement = document.querySelector(".slider__item_active");
  currentSlideElement.classList.remove("slider__item_active");
  const prevSlideElement = currentSlideElement.previousElementSibling;
  if (prevSlideElement) {
    prevSlideElement.classList.add("slider__item_active");
  } else {
    const sliderItemsElement = currentSlideElement.parentElement;
    const lastSlideElement = sliderItemsElement.lastElementChild;
    lastSlideElement.classList.add("slider__item_active");
  }
};

