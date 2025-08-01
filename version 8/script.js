const form = document.getElementById("battleForm");
const resultBox = document.getElementById("result");
const toggleDark = document.getElementById("toggleDark");
const simulateBtn = document.getElementById("simulateBtn");

// Disable simulate after click
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const height = parseInt(document.getElementById("height").value);
  const weight = parseInt(document.getElementById("weight").value);
  const breakfast = document.getElementById("breakfast").value;
  const stability = document.getElementById("stability").value;

  if (!height || !weight || !breakfast || !stability) return;

  const breakfastBonus = breakfast.includes("coffee") ? 1.3 : 1;
  const emotionalPenalty = stability.includes("shadow") ? 0.8 : 1;

  const multiplier = (height + weight) / 10;
  const base = Math.floor(multiplier * breakfastBonus * emotionalPenalty + Math.random() * 6);

  const animals = [
    { name: "pigeons", emoji: "🕊️" },
    { name: "capybaras", emoji: "🦫" },
    { name: "angry geese", emoji: "🪿" },
    { name: "lemurs", emoji: "🐒" },
    { name: "crows with grudges", emoji: "🐦‍⬛" },
  ];

  const chosen = animals[Math.floor(Math.random() * animals.length)];

  resultBox.innerHTML = `
    <h2>You could defeat ${base} ${chosen.name} ${chosen.emoji}</h2>
    <p><strong>Breakfast:</strong> ${breakfast}</p>
    <p><strong>Emotional state:</strong> ${stability}</p>
    <p><em>This result is legally binding (maybe).</em></p>
  `;

  resultBox.classList.remove("hidden");
  resultBox.classList.add("fade-in");

  simulateBtn.disabled = true;
});

// Re-enable simulate button on any change
["height", "weight", "breakfast", "stability"].forEach(id => {
  const el = document.getElementById(id);
  el.addEventListener("input", () => {
    simulateBtn.disabled = false;
  });
  el.addEventListener("change", () => {
    simulateBtn.disabled = false;
  });
});

// Dark mode toggle
toggleDark.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
