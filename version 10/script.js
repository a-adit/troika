const form = document.getElementById("battleForm");
const resultBox = document.getElementById("result");
const toggleDark = document.getElementById("toggleDark");
const simulateBtn = document.getElementById("simulateBtn");
const stabilitySlider = document.getElementById("stability");
const stabilityLabel = document.getElementById("stabilityLabel");

const stabilityMessages = [
  "Totally fine.",
  "A little twitchy.",
  "Mildly unstable.",
  "Hearing voices.",
  "Wielding chaos itself."
];

stabilitySlider.addEventListener("input", () => {
  stabilityLabel.textContent = stabilityMessages[stabilitySlider.value];
  simulateBtn.disabled = false;
});

["height", "weight", "breakfast", "animal"].forEach(id => {
  document.getElementById(id).addEventListener("input", () => {
    simulateBtn.disabled = false;
  });
  document.getElementById(id).addEventListener("change", () => {
    simulateBtn.disabled = false;
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  simulateBtn.disabled = true;
  simulateBtn.textContent = "Simulating...";

  setTimeout(() => {
    const height = parseInt(document.getElementById("height").value);
    const weight = parseInt(document.getElementById("weight").value);
    const breakfast = document.getElementById("breakfast").value;
    const stability = stabilityMessages[stabilitySlider.value];
    const animal = document.getElementById("animal").value;

    if (!height || !weight || !breakfast || !animal) return;

    const breakfastBonus = breakfast.includes("coffee") ? 1.3 : 1;
    const emotionalPenalty = stabilitySlider.value > 2 ? 0.8 : 1;
    const multiplier = (height + weight) / 10;
    const base = Math.floor(multiplier * breakfastBonus * emotionalPenalty + Math.random() * 6);

    resultBox.innerHTML = `
      <h2>You could defeat ${base} ${animal}</h2>
      <p><strong>Breakfast:</strong> ${breakfast}</p>
      <p><strong>Emotional state:</strong> ${stability}</p>
      <p><em>This result is legally binding (maybe).</em></p>
    `;

    resultBox.classList.remove("hidden");

    simulateBtn.textContent = "Simulate Battle";
  }, 1500); // Simulate loading
});

toggleDark.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
