const menuLinkElements = document.getElementsByClassName("menu__link");

for (const menuLinkElement of menuLinkElements) {
  menuLinkElement.onclick = function() {
    const menuItemElement = menuLinkElement.closest(".menu__item");
    const subMenuElement = menuItemElement.querySelector(".menu");
    if (subMenuElement) {
      subMenuElement.classList.toggle("menu_active");
      return false;
    }
  };
}

