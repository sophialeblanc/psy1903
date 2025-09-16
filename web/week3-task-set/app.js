/* // Identify elements we want to update

let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');

// Generate random numbers to display on page load

let randomNum1 = Math.floor(Math.random() * 10) + 1;
let randomNum2 = Math.floor(Math.random() * 10) + 1;

// Update elements on the page

num1.innerHTML = randomNum1;
num2.innerHTML = randomNum2; */

/* let response = prompt('What is your name?');
let count = response.length;
console.log(count)
let firstLetter = response.charAt(0);
console.log(firstLetter)
let lastLetter = response.charAt(count - 1);
console.log(lastLetter) */

/* let age = 20;
if (age == 25) {
    console.log("Age is 25");
} */

/* //Setting numerical values to random
let randomNum1 = Math.floor(Math.random() * 10) + 1;
let randomNum2 = Math.floor(Math.random() * 10) + 1;

//Defining variable/prompt using random numbers
let response = prompt('What is ' + randomNum1 + ' + ' + randomNum2 + '?');

//Setting more variables for ease of use
let feedback = '';
let correctAnswer = randomNum1 + randomNum2;

//Determining if/else conditions
if (response == correctAnswer) {
    feedback = 'Correct!';
} else if (response == correctAnswer - 1 || response == correctAnswer + 1) {
    feedback = 'You were close!';
} else {
    feedback = 'Incorrect.';
}

//Universal feedback
alert(feedback + ' The expected answer is ' + correctAnswer + '.'); */

/* let age = prompt('How old are you?');
if (age < 12) {
    alert('Child');
}
if (age >= 12 && age < 18) {
    alert('Teenager');
}
if (age >= 18) {
    alert('Adult');
} */

/* let response = prompt('Please enter a whole number');
if (response % 2 == 0) {
    alert('The number you entered was even');
}
else {
    alert('The number you entered was odd');
}
 */
//Initial alert
alert("In this experiment we will measure your response time. You will be shown a series of simple math equations. Answer these equations as quickly and accurately as you can.");

//Setting variables for ease of use, can be redefined throughout
let math1 = Math.floor(Math.random() * 10) + 1;
let math2 = Math.floor(Math.random() * 10) + 1;
let correctResponse = math1 + math2;

//Time answer of first prompt
let start = Date.now();
let response = prompt("What is " + math1 + " + " + math2 + "?");
let end = Date.now();
let responseTime = (end - start) / 1000;

//If Else conditions
if (response == correctResponse) {
    alert("You answered " + response + " in " + responseTime + " seconds. Your response was CORRECT");
}
else {
    alert("You answered " + response + " in " + responseTime + " seconds. Your response was INCORRECT");
}

//Redefine to randomize again
math1 = Math.floor(Math.random() * 10) + 1;
math2 = Math.floor(Math.random() * 10) + 1;
correctResponse = math1 + math2;

//Time answer of second prompt
start = Date.now();
response = prompt("What is " + math1 + " + " + math2 + "?");
end = Date.now();
responseTime = (end - start) / 1000;

//If Else conditions
if (response == correctResponse) {
    alert("You answered " + response + " in " + responseTime + " seconds. Your response was CORRECT");
}
else {
    alert("You answered " + response + " in " + responseTime + " seconds. Your response was INCORRECT");
}

//Redefine to randomize again
math1 = Math.floor(Math.random() * 10) + 1;
math2 = Math.floor(Math.random() * 10) + 1;
correctResponse = math1 + math2;

//Time answer of third prompt
start = Date.now();
response = prompt("What is " + math1 + " + " + math2 + "?");
end = Date.now();
responseTime = (end - start) / 1000;

//If Else conditions
if (response == correctResponse) {
    alert("You answered " + response + " in " + responseTime + " seconds. Your response was CORRECT");
}
else {
    alert("You answered " + response + " in " + responseTime + " seconds. Your response was INCORRECT");
}

//Final goodbye alert
alert("Thank you for your participation!");