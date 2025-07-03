const display = document.getElementById("display");

function append(input){
  display.value += input;
}

function clearDisp() {
  display.value = '';
}

function calc() {
  display.value = eval(display.value)
}

function del() {
  display.value = display.value.slice(0, -1);
}

const toggleBtn = document.getElementById("toggle-theme");
const calculator = document.querySelector(".calculator");
const body = document.body;

toggleBtn.addEventListener("click", (e) => {
  const rect = calculator.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  calculator.style.setProperty('--click-x', `${x}px`);
  calculator.style.setProperty('--click-y', `${y}px`);

  const isLight = calculator.classList.contains('light-mode');

  calculator.classList.remove('ripple-light', 'ripple-dark');
  void calculator.offsetWidth;

  if (isLight) {
    calculator.classList.add('ripple-dark');

    setTimeout(() => {
      calculator.classList.remove('light-mode');
      body.classList.remove('light-mode');
      toggleBtn.textContent = "🌙";
      calculator.classList.remove('ripple-dark');
    }, 500);
  } else {
    calculator.classList.add('light-mode');
    body.classList.add('light-mode');
    calculator.classList.add('ripple-light');
    toggleBtn.textContent = "☀️";

    setTimeout(() => {
      calculator.classList.remove('ripple-light');
    }, 500);
  }
});
