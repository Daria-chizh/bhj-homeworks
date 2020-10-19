// Задание 1

const loaderIdElement = document.getElementById("loader");
let itemsIdElement = document.getElementById("items");

window.addEventListener("load",function() {
  const request = new XMLHttpRequest();
  request.open('GET', 'https://netology-slow-rest.herokuapp.com');
  request.addEventListener('readystatechange', function() {
    if ((request.readyState == 4) && (request.status == 200)) {
      let obj = JSON.parse(request.response);
      let dataObj = obj.response.Valute;
      for (let prop in dataObj) {
        const newItemElement = document.createElement("div");
        newItemElement.classList.add("item");
        itemsIdElement.appendChild(newItemElement);

        const itemCodeCreateElement = document.createElement("div");
        itemCodeCreateElement.classList.add("item__code");
        itemCodeCreateElement.textContent = dataObj[prop].CharCode;
        newItemElement.appendChild(itemCodeCreateElement);

        const itemValueElement = document.createElement("div");
        itemValueElement.classList.add("item__value");
        itemValueElement.textContent = dataObj[prop].Value;
        newItemElement.appendChild(itemValueElement);

        const itemCurrencyElement = document.createElement("div");
        itemCurrencyElement.classList.add("item__currency");
        itemCurrencyElement.textContent = "руб";
        newItemElement.appendChild(itemCurrencyElement);
      }
      loaderIdElement.classList.remove("loader_active");
    }
  });
  request.send();

});

