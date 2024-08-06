function add() {
  let num1 = parseInt(document.getElementById("inputi").value);
  let num2 = parseInt(document.getElementById("inputj").value);
  checkInvalid(num1)
  checkInvalid(num2)
  let sum = num1 + num2;
  document.getElementById("output").textContent = sum
}
function sub() {
  let num1 = parseInt(document.getElementById("inputi").value);
  let num2 = parseInt(document.getElementById("inputj").value);
  checkInvalid(num1)
  checkInvalid(num2)
  let sub = num1 - num2;
  let outPut = parseInt((document.getElementById("output").textContent = sub));
}
function divide() {
  let num1 = parseInt(document.getElementById("inputi").value);
  let num2 = parseInt(document.getElementById("inputj").value);
  checkInvalid(num1)
  checkInvalid(num2)
  let divide = num1 / num2;
  document.getElementById("output").textContent = divide
}
function multiply() {
  let num1 = parseInt(document.getElementById("inputi").value);
  let num2 = parseInt(document.getElementById("inputj").value);
  checkInvalid(num1)
  checkInvalid(num2)
  let multiply = num1 * num2;
  document.getElementById("output").textContent = multiply
}

function checkInvalid(num) {
  if (isNaN(num)){
    alert("Input is invalid!");
  }
}
