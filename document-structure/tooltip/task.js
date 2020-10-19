// Задание 1
let elementsWithTooltips = document.getElementsByClassName("has-tooltip");

function bindTooltip(element) {
  const tooltipElement = document.createElement("div");
  tooltipElement.classList.add("tooltip");
  tooltipElement.textContent = "Текст подсказки";
  element.insertAdjacentElement("afterend", tooltipElement);

  element.onclick = function() {
    const tooltipText = element.getAttribute("title");
    tooltipElement.classList.toggle("tooltip_active");
    tooltipElement.textContent = tooltipText;
    tooltipElement.style.left = 0;
    tooltipElement.style.top = '50px';
    return false;
  };
}

for (const elementWithTooltip of elementsWithTooltips) {
  bindTooltip(elementWithTooltip);
}
