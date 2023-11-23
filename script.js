function add(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
};

function subtract(firstNumber, secondNumber) {
  return firstNumber - secondNumber;
};

function multiply(firstNumber, secondNumber) {
  return firstNumber * secondNumber;
};

function divide(firstNumber, secondNumber) {
  return firstNumber / secondNumber;
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
const dotBtnElement = document.querySelector('.dot-btn');

let decimalUsed = false;

function displayEvent(button) {
  button.addEventListener('click', () => {
    if (button.textContent === '.' && decimalUsed) {
      return; 
    }
    if (button.textContent === '.') {
      decimalUsed = true;
    }
    displayElement.value += button.textContent;
    console.log(displayElement.value)
  });
};

clearBtnElement.addEventListener('click', () => {
  displayElement.value = '';
  result = 0;
  console.log(displayElement.value);
  console.log(result);
});

displayOperatorEvent(divideBtnElement);
displayOperatorEvent(multiplyBtnElement);
displayOperatorEvent(subtractBtnElement);
displayOperatorEvent(addBtnElement);

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
displayEvent(dotBtnElement);

let firstNumber = 0;
let operator = '';
let secondNumber = 0;
let result = 0;

function operate(firstNumber, operator, secondNumber) {
  if(operator === '/' && secondNumber === 0 || operator === undefined || secondNumber === 0) {
    console.log(result = '');
    console.log("Error!");
  } else if (operator === '+') {  
    console.log(add(firstNumber, secondNumber));
    console.log(result = (add(firstNumber, secondNumber)));
  } else if (operator === '-') {
    console.log(subtract(firstNumber, secondNumber));
    console.log(result = (subtract(firstNumber, secondNumber)));
  } else if (operator === '*') {
    console.log(multiply(firstNumber, secondNumber));
    console.log(result = (multiply(firstNumber, secondNumber)));
  } else if (operator === '/') {
    console.log(divide(firstNumber, secondNumber));
    console.log(result = (divide(firstNumber, secondNumber)));
  }
  displayElement.value = result;
};


operateBtnElement.addEventListener('click', () => {

  // if(operator === '' || secondNumber === 0) {
  //   console.log("Error!");
  //   result = 0;
  //   displayElement.value = '';
  //   console.log(secondNumber)
  // } else {

    let currentDisplay = displayElement.value.split(" ")
    console.log(currentDisplay);

    firstNumber = Number(currentDisplay[0]);
    operator = currentDisplay[1];
    console.log(operator);
    console.log(typeof operator);
    secondNumber = Number(currentDisplay[2]);
    console.log(typeof secondNumber);
    console.log(secondNumber);
    
    //console.log(firstNumber)
    // console.log(operator)
    // console.log(secondNumber);

    operate(firstNumber, operator, secondNumber);

  //}

  
});

function displayOperatorEvent(button) {
  button.addEventListener('click', () => {

    let currentDisplay = displayElement.value.split(" ")
    console.log(currentDisplay);
  
    firstNumber = Number(currentDisplay[0]);
    operator = currentDisplay[1];
    secondNumber = Number(currentDisplay[2]);

    if (secondNumber > 0) {
      operate(firstNumber, operator, secondNumber);
      displayElement.value += button.textContent;
    } else {
      displayElement.value += button.textContent;
      console.log(displayElement.value);
    }
    
  });
};



/*
1. when the buttons are clicked, the items they display should appear in the display scree,
2. when the first number is inputted, followed by an operator sign, the second number, then, when the equal to sign is clicked
a. it should select the first number and store it inside first number variable, then store the operator sign also inside operator variable and store the second number also inside the second number variable
b. then it performs the operation based on all the inputs
c. then, it saves the result inside the result variable
d. then, it displays the result on the screen.

Update the result:
1. When two numbers have been inputted but instead of the user clicking the '=' sign, he/she clicks an operator, the calculator should operate the first two numbers and display its result alongside the operator that was clicked
*/