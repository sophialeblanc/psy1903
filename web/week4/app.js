//console.log('Hello from week 4!');

/* let response = 10;
let responseTime = 2.33;
let feedback = 'correct';

console.log('You answered ' + response + ' in ' + responseTime + ' seconds. Your answer was ' + feedback + '.');

console.log(`You answered ${response} in ${responseTime} seconds. Your answer was ${feedback}.`);
 */

/* //Part 1: Functions
let num1 = getRandomNumber(1, 10);
let num2 = getRandomNumber(0, 100);

function getRandomNumber(min, max) {
    let randomNumber = Math.floor(Math.random() * max) + min;
    return randomNumber;
}

console.log(num1);
console.log(num2);

function displayRandomNumber() {
    alert(getRandomNumber(1, 10));
}

displayRandomNumber();

// Array of Numbers
let ages = [45, 23, 24];

// Array of strings
let names = ['Alice', 'James'];
//             0.        1. 

// Array containing other arrays
let numbers = [1, 2, 3, [6, 5, 7]];

// Array of mixed
let mixed = ['a', 'b', 1, 2, ['foo', true]];

console.log(names[0]); // Alice
// beyond range, undefined

names[1] = 'Bob';
console.log(names);
names.push('Sarah');
console.log(names);
names.unshift('Kyle');
console.log(names); */

// Loops
/* let names = ['Alice', 'Jamal', 'Avi', 'Kyle'];
for (let name of names) {
    console.log(name)
}; */
// We get four console messages, one per element

//Integrate conditional
/* let names = ['Alice', 'Jamal', 'Avi', 'Kyle'];
for (let name of names) {
    if (name.charAt(0) == 'A') {
        console.log(name)
    }
}; */

/* //Construct new array with those names
let names = ['Alice', 'Jamal', 'Avi', 'Kyle'];

let namesThatStartWithA = [];

for (let name of names) {
    if (name.charAt(0) == 'A') {
        namesThatStartWithA.push(name);
    }
}

console.log(namesThatStartWithA); */

// Part 4: Numerical for loops

/* for (let i = 0; i < 3; i++) {

    let math1 = Math.floor(Math.random() * 10) + 1;
    let math2 = Math.floor(Math.random() * 10) + 1;
    let start = Date.now();
    let answer1 = prompt("What is " + math1 + " + " + math2 + "?");
    let end = Date.now();
    let responseTime = (end - start) / 1000;
    alert("You answered " + answer1 + " in " + responseTime + " seconds");
}
 */
//Refactor 

let results = [];

function getRandomNumber(min, max) {
    let randomNumber = Math.floor(Math.random() * max) + min;
    return randomNumber;
}

for (let i = 0; i < 3; i++) {

    let math1 = getRandomNumber(1, 10);
    let math2 = getRandomNumber(1, 10);
    let start = Date.now();
    let response = prompt(`What is ${math1} + ${math2}?`);
    let end = Date.now();
    let responseTime = (end - start) / 1000;
    if (response == math1 + math2) {
        feedback = 'correct';
    } else {
        feedback = 'incorrect';
    }

    results.push([feedback, responseTime]);

    alert(`You answered ${response} (${feedback}) in ${responseTime} seconds`);
}

console.log(results);