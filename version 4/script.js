const form = document.getElementById("battleForm");
const resultDiv = document.getElementById("result");
const stabilityInput = document.getElementById("stability");
const stabilityValue = document.getElementById("stabilityValue");

stabilityInput.addEventListener("input", () => {
  stabilityValue.textContent = stabilityInput.value;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const height = parseInt(document.getElementById("height").value);
  const weight = parseInt(document.getElementById("weight").value);
  const stability = parseInt(stabilityInput.value);
  const breakfast = document.getElementById("breakfast").value;
  const weapon = document.getElementById("weapon").value;

  // Battle logic — very silly
  const pigeons = Math.floor((weight + stability) / 4 + rand(-3, 3));
  const shoebills = Math.max(0, Math.floor(height / 100 + rand(-1, 1)));
  const secretaryBirds = Math.max(1, Math.floor((stability / 10) + rand(-2, 2)));
  const capybaras = stability < 30 ? 0.5 : 1;

  const weaponBonus = weapon === "office_chair" ? 2 : weapon === "confidence" ? 1 : 0;
  const pigeonFinal = pigeons + weaponBonus;

  resultDiv.innerHTML = `
    <strong>${name || "You"}</strong> could defeat:<br><br>
    🕊️ <strong>${pigeonFinal}</strong> mildly aggressive pigeons<br>
    🪶 <strong>${shoebills}</strong> angry shoebills<br>
    🦅 <strong>${secretaryBirds}</strong> rabid secretary birds<br>
    🐹 <strong>${capybaras}</strong> capybaras (probably)<br><br>
    <em>Based on your breakfast of <strong>${breakfast.replace("_", " ")}</strong> and weapon of choice: <strong>${weapon.replace("_", " ")}</strong>.</em>
  `;
  resultDiv.classList.remove("hidden");
});

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
