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
    let altAnswer = getRandomNumber(1, 10) + getRandomNumber(1, 10)

    // make sure doesn't match, while this is true (until this becomes false) we keep doing this
    while (altAnswer == correctAnswer) {
        altAnswer = getRandomNumber(1, 10) + getRandomNumber(1, 10);
    }

    let condition =
    {
        num1: num1,
        num2: num2,
        correctAnswer: correctAnswer,
        altAnswer: altAnswer
    };

    conditions.push(condition);
}

// Output the resulting conditions array to make sure it is set up correctly
console.log(conditions);


