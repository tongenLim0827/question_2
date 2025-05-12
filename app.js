const input = document.getElementById('text-area-input');
const counter = document.getElementById('char-count');

function updateCharCount() {
  counter.textContent = `${input.value.length} character${input.value.length === 1 ? '' : 's'}`;
}

updateCharCount();
input.addEventListener('input', updateCharCount);
