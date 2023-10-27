// AUTHOR: Manish Acharya
// JavaScript Concept: Character occurrence counter
// GITHUB: https://github.com/manisacharya/

function charNum(str) {
    let result = str.split("").sort().reduce(function (accumulator, item) {
        accumulator[item] = (accumulator[item] || 0) + 1;

        return accumulator;
    }, {});

    Object.keys(result).forEach(function (key) {
        console.log("'" + key + "'" + ": " + result[key]);
    });
}

// Add any text you like for the counter here
let text = 'Hello, how are you. Thank you very much.';

charNum(text);
