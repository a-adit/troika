const form = document.getElementById("battleForm");
const resultDiv = document.getElementById("result");
const stabilitySlider = document.getElementById("stability");
const stabilityLabel = document.getElementById("stabilityLabel");

const stabilityComments = [
  "Mentally somewhere in 1837",
  "Cried over a pigeon meme this morning",
  "Slightly unhinged but in a cute way",
  "Mid. Like, painfully mid.",
  "You’re doing okay. Barely.",
  "Stable-ish. Not clinically.",
  "Chill enough to raise a goose",
  "Mentally fortified like a medieval castle",
  "Emotionally bulletproof",
  "Enlightened monk energy"
];

stabilitySlider.addEventListener("input", () => {
  const index = Math.floor((stabilitySlider.value / 100) * (stabilityComments.length - 1));
  stabilityLabel.textContent = `"${stabilityComments[index]}"`;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const height = parseInt(document.getElementById("height").value);
  const weight = parseInt(document.getElementById("weight").value);
  const stability = parseInt(stabilitySlider.value);
  const breakfast = document.getElementById("breakfast").value;
  const weapon = document.getElementById("weapon").value;

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
    🐹 <strong>${capybaras}</strong> capybaras (maybe)<br><br>
    <em>Fueled by <strong>${breakfast.replace("_", " ")}</strong> and wielding a <strong>${weapon.replace("_", " ")}</strong>.</em><br>
    <em>Your emotional state: ${stabilityLabel.textContent}</em>
  `;
  resultDiv.classList.remove("hidden");
});

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
