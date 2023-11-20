function add(a, b) {
  return a + b;
};

function subtract(a , b) {
  return a - b;
};

function multiply(a, b) {
  return a * b;
};

function divide(a, b) {
  return a / b;
};

let firstNumber = 0;
let operator = '';
let secondNumber = 0;

function operate(numb1, operator, numb2) {
  return operator(numb1, numb2);
};

const displayBtn = document.querySelector('.js-display');
const btn1Element = document.querySelector('.btn-1');
const btn2Element = document.querySelector('.btn-2');
const btn3Element = document.querySelector('.btn-3');
const btn4Element = document.querySelector('.btn-4');
const btn5Element = document.querySelector('.btn-5');
const btn6Element = document.querySelector('.btn-6');
const btn7Element = document.querySelector('.btn-7');
const btn8Element = document.querySelector('.btn-8');
const btn9Element = document.querySelector('.btn-9');
const btn0Element = document.querySelector('.btn-0');
const divideBtnElement = document.querySelector('.divide-btn');
const multiplyBtnElement = document.querySelector('.multiply-btn');
const subtractBtnElement = document.querySelector('.subtract-btn');
const operateBtnElement = document.querySelector('.operate-btn');
const addBtnElement = document.querySelector('.add-btn');
const clearBtnElement = document.querySelector('.clear-btn');
const displayElement = document.querySelector('.js-display');

function displayEvent(button) {
  button.addEventListener('click', () => {
    displayElement.value += button.textContent;
    console.log(displayElement.value)
  });
};

clearBtnElement.addEventListener('click', () => {
  displayElement.value = '';
  console.log(displayElement.value);
});

displayEvent(divideBtnElement);
displayEvent(multiplyBtnElement);
displayEvent(subtractBtnElement);
displayEvent(addBtnElement);

displayEvent(btn0Element);
displayEvent(btn1Element);
displayEvent(btn2Element);
displayEvent(btn3Element);
displayEvent(btn4Element);
displayEvent(btn5Element);
displayEvent(btn6Element);
displayEvent(btn7Element);
displayEvent(btn8Element);
displayEvent(btn9Element);