"use strict";

function operate(value) {
  let display = document.getElementById('display');

  switch (value) {
    case 'C':
      display.value = '';
      break;
    case '=':
      try {
        display.value = eval(display.value);
      } catch (error) {
        display.value = 'Error';
      }
      break;
    default:
      display.value += value;
  }
}

let buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', () => operate(button.textContent));
});



