/* function celsiusToFahrenheit(c) {
    return (c * 1.8) + 32;
}

console.log(celsiusToFahrenheit(10)); // Expected output: 50
console.log(celsiusToFahrenheit(-5)); // Expected output: 23
 */
/* function convertTemp(temp, convertTo) {
    if (convertTo == 'c') {
        return (temp - 32) / 1.8;
    }
    else if (convertTo == 'f') {
        return (temp * 1.8) + 32;
    }
}
console.log(convertTemp(10, 'c')); // Expected output: -12.222222222222221
console.log(convertTemp(10, 'f')); // Expected output: 50
 */

/* function getWordLengths(words) {
    let lengths = [];
    for (let i = 0; i < words.length; i++) {
        lengths.push(words[i].length);
    }

    return lengths;
}

let words = ['apple', 'banana', 'cherry', 'pear', 'grape'];
console.log(getWordLengths(words)); // Expected output: [5, 6, 6, 4, 5] */

/* function getLongestWord(words) {
    let longestWord = '';
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
        else if (words[i].length == longestWord.length && words.indexOf(words[i]) < words.indexOf(longestWord)) {
            longestWord = words[i];
        }
    }
    return longestWord;
}

let words = ['apple', 'banana', 'cherry', 'pear', 'grape'];
console.log(getLongestWord(words)); // Expected output: banana
 */

function getOddNumbers(numbers) {
    let results = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 !== 0) {
            results.push(numbers[i]);
        }
    }
    return results;
}

console.log(getOddNumbers([1, 2, 3, 4, 5])); // Expected output: [1, 3, 5]
console.log(getOddNumbers([12, 45, 10, 11, 61])); // Expected output: [45, 11, 61]