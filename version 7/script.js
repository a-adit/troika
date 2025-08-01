document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("battleForm");
  const resultDiv = document.getElementById("result");
  const simulateBtn = document.getElementById("simulateBtn");
  const themeToggle = document.getElementById("themeToggle");
  const body = document.body;

  let hasSimulated = false;

  const stabilityOptions = [
    "Emotionally bankrupt but thriving.",
    "Cried during a toothpaste ad.",
    "Unshaken by global events, shaken by a pigeon stare.",
    "Stable like a chair with 3 legs.",
    "Gaslit, gatekept, and girlbossed.",
    "Spoke to a wall and it argued back.",
    "Repressing 99 problems and counting.",
    "At peace... until breakfast ran out.",
    "Once fought a shadow and lost.",
    "Surprisingly okay. Suspiciously okay."
  ];

  const animals = [
    { name: "Pigeons", factor: 1 },
    { name: "Aggressive Peacocks", factor: 0.8 },
    { name: "Evil Emus", factor: 0.6 },
    { name: "Territorial Llamas", factor: 0.7 },
    { name: "Confused Capybaras", factor: 1.2 }
  ];

  const getRandomStability = () =>
    stabilityOptions[Math.floor(Math.random() * stabilityOptions.length)];

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (hasSimulated) return;

    const height = parseInt(document.getElementById("height").value);
    const weight = parseInt(document.getElementById("weight").value);
    const breakfast = document.getElementById("breakfast").value;

    const baseScore = (height + weight) / 5;
    const randomness = Math.floor(Math.random() * 30) + 5;
    const breakfastBonus = breakfast.includes("protein") ? 5 : 0;

    const totalScore = baseScore / randomness + breakfastBonus;
    const chosenAnimal = animals[Math.floor(Math.random() * animals.length)];
    const finalCount = Math.max(1, Math.floor(totalScore * chosenAnimal.factor));
    const stabilityText = getRandomStability();

    resultDiv.innerHTML = `
      <strong>You could survive against:</strong><br>
      ${finalCount} mildly angry ${chosenAnimal.name}.<br><br>
      <em>Emotional stability:</em> ${stabilityText}
    `;

    resultDiv.classList.remove("hidden");
    setTimeout(() => resultDiv.classList.add("show"), 10);

    hasSimulated = true;
    simulateBtn.disabled = true;
    simulateBtn.innerText = "Simulated!";
  });

  form.querySelectorAll("input, select").forEach((input) => {
    input.addEventListener("input", () => {
      hasSimulated = false;
      simulateBtn.disabled = false;
      simulateBtn.innerText = "Simulate Battle";
      resultDiv.classList.remove("show");
      setTimeout(() => {
        resultDiv.classList.add("hidden");
        resultDiv.innerHTML = "";
      }, 300);
    });
  });

  themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark");
  });
});
