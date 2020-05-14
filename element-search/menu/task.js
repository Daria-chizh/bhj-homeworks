const menuLinkElements = document.getElementsByClassName("menu__link");

for (const menuLinkElement of menuLinkElements) {
  menuLinkElement.onclick = function() {
    const menuItemElement = menuLinkElement.closest(".menu__item");
    const subMenuElement = menuItemElement.querySelector(".menu");
    if (subMenuElement) {
      if (subMenuElement.classList.contains("menu_active")) {
        subMenuElement.classList.remove("menu_active");
      } else {
        const mainMenuElement = subMenuElement.closest('.menu_main');
        const currentOpenSubMenuElement = mainMenuElement.querySelector('.menu_active');
        if (currentOpenSubMenuElement) {
          currentOpenSubMenuElement.classList.remove("menu_active");
        }
        subMenuElement.classList.add("menu_active");
      }
      return false;
    }
  };
}
