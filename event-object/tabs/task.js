const allTabNavigationElements = Array.from(document.querySelectorAll(".tab"));

for (const allTabNavigationElement of allTabNavigationElements) {
  allTabNavigationElement.onclick = function() {
    const tabsElement = allTabNavigationElement.closest(".tabs");
    const tabNavigationElements = Array.from(tabsElement.querySelectorAll(".tab"));
    const tabContentElements = Array.from(tabsElement.querySelectorAll(".tab__content"));
    const tabActiveElement = tabsElement.querySelector(".tab_active");
    tabActiveElement.classList.remove("tab_active");
    allTabNavigationElement.classList.add("tab_active");
    const tabActiveContentElement = tabsElement.querySelector(".tab__content_active");
    tabActiveContentElement.classList.remove("tab__content_active");
    const tabIndex = tabNavigationElements.indexOf(allTabNavigationElement);
    tabContentElements[tabIndex].classList.add("tab__content_active");
  }
}
