// const links = document.querySelectorAll("link");
// const toggleBtn = document.querySelectorAll("output");
//prevOperandText is the  previous operand text box in the calculator
const prevOperandText = document.querySelector("[ data-previous-operand ]");
// currentOperandText is the current operand text box in the calculator
const currentOperandText = document.querySelector("[data-current-operand]");

const deleteBtn = document.querySelector("[data-delete]");
const resultBtn = document.querySelector("[data-output]");
const resetBtn = document.querySelector("[data-reset]");
const operands = document.querySelectorAll("[data-num]");
const operatorBtn = document.querySelectorAll("[data-operator]");

// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_node_textcontent_innerhtml_innertext
// Get the inner text of an element:
let prevOperand = prevOperandText.innerText;
let currentOperand = currentOperandText.innerText;
let operation;

function reset() {
  prevOperand = "";
  currentOperand = "";
  // https://codeburst.io/javascript-whats-the-difference-between-null-undefined-37793b5bfce6
  operation = ""; // ?!
  // reset operation
}

function deleteOperand() {
  //Slicing the string from the end to the beginning
  // And we updated the currentOperand to the new string without the last character
  currentOperand = currentOperand.toString().slice(0, -1); //delete the last number
  // console.log("Deleted Number ", currentOperand);
}
function addNumber(number) {
  // if the currentOperand is empty, then we add the number to the currentOperand and display it on the screen else we add the number to the currentOperand and display it on the screen
  // if (number === " " && currentOperand.includes(" ")) return;
  // currentOperand = currentOperand.toString() + number.toString();
  if (currentOperand === " ") {
    currentOperand = number;
    currentOperandText.innerText = currentOperand;
  } else {
    currentOperand += number;
    currentOperandText.innerText = currentOperand;

    // console.log("Added Number ", currentOperand);

    // console.log("Current Operand ", currentOperand);

    // console.log("Previous Operand ", prevOperand);
  }
}

function operationSelection(operate) {
  // if the currentOperand is empty, then we add the number to the currentOperand and display it on the screen else we add the number to the currentOperand and display it on the screen
  // if (currentOperandText === "") return;
  // if (prevOperandText !== "") {
  //   calculatorOperation();
  // }
  // operation = operate;
  // prevOperand = currentOperand;
  // currentOperand = "";
  // console.log("Hey ", currentOperandText);
  if (currentOperand === " ") {
    currentOperand = prevOperand;
    currentOperandText.innerText = currentOperand;
  } else {
    prevOperand = currentOperand;
    currentOperand = "";
    currentOperandText.innerText = currentOperand;
    operation = operate;
    // console.log("Operation ", operation);

    // console.log("Current Number Operation ", currentOperand);

    // console.log("Previous Number Operation ", prevOperand);
  }
}

function calculatorOperation() {
  //calculator operation logic goes here and we display the result on the screen
  let result; //result of the operation goes here
  let prev = parseFloat(prevOperand); //convert the string to a number and store it in prev
  let current = parseFloat(currentOperand); //convert the string to a number and store it in current
  // check if is a valid number or not
  if (isNaN(prev) || isNaN(current)) return; // if the previous or current operand is not a number, then we return and do not do anything

  // if (operation === "+") { //if the operation is addition
  //   result = prev + current; //add the previous operand to the current operand
  // } else if (operation === "-") { //if the operation is subtraction
  //   result = prev - current; //subtract the previous operand from the current operand
  // } else if (operation === "*") { //if the operation is multiplication
  //   result = prev * current; //multiply the previous operand with the current operand
  // } else if (operation === "/") { //if the operation is division
  //   result = prev / current; //divide the previous operand by the current operand
  // }

  switch (operation) {
    case "+":
      result = prev + current;
      break;

    case "-":
      result = prev - current;
      break;

    case "×":
      result = prev * current;
      break;

    case "/":
      result = prev / current;
      break;

    default:
      return;
  }
  currentOperand = result; // we update the currentOperand to the result of the operation
  operation = ""; // we reset the operation to undefined
  prevOperand = ""; // we reset the previous operand to empty string
  prevOperandText.innerText = ""; // we reset the previous operand text to empty string
}

function displayNum() {
  //currentOperand.toLocaleString("en") //convert the number to a string and display it on the screen in the correct format
  currentOperandText.innerText = currentOperand.toLocaleString("en"); // we display the current operand on the screen in the correct format
  // console.log("Current Number Operation ++ !! ", currentOperand);
  // we display the current operand on the screen in the currentOperandText
  //how to display the current operand on the screen
  if (operation !== undefined) {
    // if the operation is not undefined then we display the operation on the screen
    prevOperandText.innerText = `${prevOperand} ${operation.toString("en")}`; // we display the previous operand on the screen in the correct format
    // console.log("Operation is not undefined ", operation);
  } else {
    prevOperandText.innerText = prevOperand;
    // console.log("Previous Opertion ", prevOperand);
  }
}

// Start Event Listeners for the buttons on the calculator

resetBtn.addEventListener("click", () => {
  reset();
  displayNum();
});

deleteBtn.addEventListener("click", () => {
  deleteOperand();
  displayNum();
});

// what this functions does is it loops through the operands array and for each operand we add an event listener to it
operands.forEach((operand) => {
  operand.addEventListener("click", () => {
    addNumber(operand.innerText);
    displayNum();
  });
});

// what this functions does is it loops through the operatorBtn array and for each operatorBtn we add an event listener to it
operatorBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    operationSelection(btn.innerText); // we add the inner text of the button to the operationSelection function and we pass it the operation as a parameter
    displayNum();
  });
});

resultBtn.addEventListener("click", () => {
  calculatorOperation();
  displayNum();
});

// End Start Event Listeners for the buttons on the calculator

//Swithc ing
// toggleBtn.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     themeChange(btn.value);
//   });
// });
