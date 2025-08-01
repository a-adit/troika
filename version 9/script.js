const form = document.getElementById("battleForm");
const resultBox = document.getElementById("result");
const simulateBtn = document.getElementById("simulateBtn");
const toggleDark = document.getElementById("toggleDark");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const height = parseInt(document.getElementById("height").value);
  const weight = parseInt(document.getElementById("weight").value);
  const breakfast = document.getElementById("breakfast").value;
  const stability = document.getElementById("stability").value;
  const animal = document.getElementById("animal").value;

  if (!height || !weight || !breakfast || !stability || !animal) return;

  simulateBtn.classList.add("simulating");
  simulateBtn.disabled = true;

  setTimeout(() => {
    const breakfastBonus = breakfast.includes("coffee") ? 1.3 : 1;
    const emotionalPenalty = stability.includes("shadow") ? 0.8 : 1;
    const multiplier = (height + weight) / 10;
    const base = Math.floor(multiplier * breakfastBonus * emotionalPenalty + Math.random() * 6);

    resultBox.innerHTML = `
      <h2>You could defeat ${base} ${animal}</h2>
      <p><strong>Breakfast:</strong> ${breakfast}</p>
      <p><strong>Emotional state:</strong> ${stability}</p>
      <p><strong>Battle Type:</strong> 1v${base} – good luck.</p>
    `;

    resultBox.classList.remove("hidden");
    resultBox.classList.add("fade-in");
    simulateBtn.classList.remove("simulating");
  }, 1500); // Simulate delay
});

// Re-enable simulate on any change
["height", "weight", "breakfast", "stability", "animal"].forEach(id => {
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
