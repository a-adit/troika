const simulateBtn = document.getElementById('simulateBtn');
const resultDiv = document.getElementById('result');
const toggleBtn = document.getElementById('toggleMode');
const emotionalSlider = document.getElementById('emotional');
const stabilityLabel = document.getElementById('stabilityLabel');

let formChanged = false;

// Live emotional stability label
const emotionalFeedback = [
  "I am the storm.",
  "Slept 2 hours, feeling chaotic.",
  "Spontaneous crying.",
  "Stable-ish?",
  "Therapist approved.",
  "Zen monk mode.",
  "Silently judging everyone.",
  "Just saw a cat video and cried.",
  "Screaming internally.",
  "I am a goose in disguise."
];

emotionalSlider.addEventListener('input', () => {
  const val = parseInt(emotionalSlider.value);
  const index = Math.floor(val / 10);
  stabilityLabel.textContent = emotionalFeedback[index];
  formChanged = true;
  simulateBtn.disabled = false;
});

document.querySelectorAll('input, select').forEach((el) => {
  el.addEventListener('input', () => {
    formChanged = true;
    simulateBtn.disabled = false;
  });
});

simulateBtn.addEventListener('click', () => {
  if (!formChanged) return;

  const height = parseInt(document.getElementById('height').value);
  const weight = parseInt(document.getElementById('weight').value);
  const breakfast = document.getElementById('breakfast').value;
  const animal = document.getElementById('animal').value;
  const emotion = parseInt(emotionalSlider.value);

  if (!height || !weight) {
    resultDiv.textContent = "Please enter your height and weight!";
    resultDiv.classList.remove('hidden');
    return;
  }

  const chaosFactor = (100 - emotion + 20) / 100;
  const breakfastBoost = breakfast.length % 5 + 1;
  const basePower = (height * 0.5 + weight * 0.3) * chaosFactor * breakfastBoost;

  const animals = {
    pigeons: 1,
    emus: 8,
    shoebills: 5,
    capybaras: 3,
    cassowaries: 10
  };

  const enemyPower = animals[animal] || 1;
  const count = Math.floor(basePower / enemyPower);

  resultDiv.textContent = `You could survive against ${count} ${animal.replace(/s$/, '')}${count !== 1 ? 's' : ''}.`;
  resultDiv.classList.remove('hidden');
  resultDiv.classList.add('visible');

  simulateBtn.disabled = true;
  formChanged = false;
});

// Dark mode toggle
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
