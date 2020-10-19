// Задание 1

let interestsChecks = document.querySelectorAll(".interest__check");

for (const interestCheck of interestsChecks) {
  interestCheck.onchange = function() {
   let parentElement = interestCheck.parentElement.parentElement;
   let sublist = parentElement.querySelector("ul");
   let daughterElement = sublist.querySelectorAll(".interest__check");
   for (const daughter of daughterElement) {
      if (interestCheck.checked) {
        daughter.checked = true;
      } else {
        daughter.checked = false;
      }
   }
  }
}
