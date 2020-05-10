let missCount = 0;
let hitCount = 0;

const missElement = document.getElementById("lost");
const hitElement = document.getElementById("dead");

for (let i = 1; i <= 9; i++) {
  const holeElement = document.getElementById("hole" + i);
  holeElement.onclick = function() {
    if (holeElement.className.includes('hole_has-mole')) {
      hitCount += 1;
      if (hitCount === 10) {
        hitCount = 0;
        missCount = 0;
        alert('Вы победили');
      }
    } else {
      missCount += 1;
      if (missCount === 5) {
        hitCount = 0;
        missCount = 0;
        alert ('Вы проиграли');
      }
    }
    hitElement.textContent = hitCount;
    missElement.textContent = missCount;
  };
}
