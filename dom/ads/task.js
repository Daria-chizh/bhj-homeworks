setInterval(function (){
  const activeRotatorCaseElements = document.querySelectorAll(".rotator__case_active");
  for (const activeRotatorCaseElement of activeRotatorCaseElements) {
    activeRotatorCaseElement.classList.remove("rotator__case_active");
    const nextCaseElement = activeRotatorCaseElement.nextElementSibling;
    if (nextCaseElement) {
      nextCaseElement.classList.add("rotator__case_active");
    } else {
      const rotatorElement = activeRotatorCaseElement.parentElement;
      const firstRotatorElement = rotatorElement.firstElementChild;
      firstRotatorElement.classList.add("rotator__case_active");
    }
  }
}, 1000);
