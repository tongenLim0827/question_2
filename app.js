const input = document.getElementById('input');
const counter = document.getElementById('char-counter');

input.addEventListener('input', () => {
  counter.textContent = `${input.value.length} / ${input.maxLength}`;
});
