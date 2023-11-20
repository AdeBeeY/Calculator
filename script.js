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
