// Identify elements we want to update

let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');

// Generate random numbers to display on page load

let randomNum1 = Math.floor(Math.random() * 10) + 1;
let randomNum2 = Math.floor(Math.random() * 10) + 1;

// Update elements on the page

num1.innerHTML = randomNum1;
num2.innerHTML = randomNum2;