let display = document.getElementById('display');
let buttons = document.querySelectorAll('.btn');
let currentInput = '';
let operator = '';
let previousInput = '';

buttons.forEach(button => {
  button.addEventListener('click', function () {
    const value = this.getAttribute('data-value');

    if (this.id === 'clear') {
      currentInput = '';
      previousInput = '';
      operator = '';
      display.innerText = '0';
    } else if (this.id === 'equal') {
      if (currentInput && previousInput && operator) {
        let result = eval(`${previousInput} ${operator} ${currentInput}`);
        display.innerText = result;
        currentInput = result;
        previousInput = '';
        operator = '';
      }
    } else if (this.classList.contains('operator')) {
      if (currentInput) {
        operator = value;
        previousInput = currentInput;
        currentInput = '';
      }
    } else {
      currentInput += value;
      display.innerText = currentInput;
    }
  });
});
