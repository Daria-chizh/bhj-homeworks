// Задание 1
let cartProducts = document.querySelector(".cart__products");
let addProductButtons = document.querySelectorAll(".product__add");
let changeQtyButtons = document.querySelectorAll(".product__quantity-control");

for (const changeQtyButton of changeQtyButtons) {
  changeQtyButton.onclick = function() {
    let firstParentElement = changeQtyButton.parentElement;
    let firstDaughterElement = firstParentElement.querySelector(".product__quantity-value");

    if (changeQtyButton.classList.contains("product__quantity-control_inc")) {
      firstDaughterElement.textContent++;
    }
    if (changeQtyButton.classList.contains("product__quantity-control_dec")) {
      firstDaughterElement.textContent--;
    }
    if (Number(firstDaughterElement.textContent) === 0) {
      firstDaughterElement.textContent = 1;
    }
    return false;
  }
}

function addProductToCart(productContainer) {
    const cartProduct = document.createElement("div");
    cartProduct.classList.add("cart__product");
    let getAttributeCartProduct = productContainer.getAttribute("data-id");
    cartProduct.setAttribute("data-id",getAttributeCartProduct);
    cartProducts.appendChild(cartProduct);

    const cartProductImage = document.createElement("img");
    cartProductImage.classList.add("cart__product-image");
    let daughterCartProductImage = productContainer.querySelector("img");
    let getAttributeCartProductImage = daughterCartProductImage.getAttribute("src");
    cartProductImage.setAttribute("src", getAttributeCartProductImage);
    cartProduct.appendChild(cartProductImage);

    const cartProductCount = document.createElement("div");
    cartProductCount.classList.add("cart__product-count");
    let daughterCartProductCount = productContainer.querySelector(".product__quantity-value");
    cartProductCount.textContent = daughterCartProductCount.textContent;
    cartProduct.appendChild(cartProductCount);
}

for (const addProductButton of addProductButtons) {
  addProductButton.addEventListener("click", function() {
    const productContainer = addProductButton.closest('.product');
    const productId = productContainer.getAttribute("data-id");
    const cartElement = document.querySelector(".cart__products");
    const productInCart = cartElement.querySelector(`[data-id= "${productId}"]`);
    if (!productInCart) {
      addProductToCart(productContainer);
    } else {
      const productCountInCartElement = productInCart.querySelector(".cart__product-count");
      const productCountInCart = Number(productCountInCartElement.textContent);
      const productCountElement = productContainer.querySelector(".product__quantity-value");
      const productCount = Number(productCountElement.textContent);
      productCountInCartElement.textContent = productCountInCart + productCount;
    }
  });
}

