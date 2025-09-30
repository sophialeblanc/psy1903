// Initialize an empty array you will populate with your conditions
let conditions = [];

function getRandomNumber(min, max) {
    let randomNumber = Math.floor(Math.random() * max) + min;
    return randomNumber;
}

for (let i = 0; i < 3; i++) {
    let number1 = getRandomNumber(1, 10);
    let number2 = getRandomNumber(1, 10);
    let answer = number1 + number2;

    let condition =
        { num1: number1, num2: number2, correctAnswer: answer };

    conditions.push(condition);
}

// Output the resulting conditions array to make sure it is set up correctly
console.log(conditions);


