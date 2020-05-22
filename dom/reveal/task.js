function isVisible(elem) {
  const coords = elem.getBoundingClientRect();
  const windowHeight = document.documentElement.clientHeight;
  const isTopVisible = coords.top > 0 && coords.top < windowHeight;
  const isBottomVisible = coords.bottom < windowHeight && coords.bottom > 0;
  return isTopVisible || isBottomVisible;
}

const revealElements = document.querySelectorAll(".reveal");
window.onscroll = function() {
  for (const revealElement of revealElements) {
    if (isVisible(revealElement)) {
      revealElement.classList.add("reveal_active");
    }
  }
};
