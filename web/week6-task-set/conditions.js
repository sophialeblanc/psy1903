// Initialize an empty array you will populate with your conditions
let conditions = [];

function getRandomNumber(min, max) {
    let randomNumber = Math.floor(Math.random() * max) + min;
    return randomNumber;
}

for (let i = 0; i < 3; i++) {
    let num1 = getRandomNumber(1, 10);
    let num2 = getRandomNumber(1, 10);
    let correctAnswer = num1 + num2;

    let condition =
    {
        num1: num1,
        num2: num2,
        correctAnswer: correctAnswer,
    };

    conditions.push(condition);
}

// Output the resulting conditions array to make sure it is set up correctly
console.log(conditions);


