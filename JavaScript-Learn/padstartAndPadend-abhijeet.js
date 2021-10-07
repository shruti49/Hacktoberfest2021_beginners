/**
AUTHOR: Abhijeet Ekad
JavaScript Concept: Concept of padstart() and padend()
GITHUB: https://github.com/abhijeetekad
*/

/**
The padStart() method pads a string with another string to a certain length from the start of the string and returns a resulting string that reaches a certain length. ex.
*/
let example ="Abhijeet"
console.log(example.padStart(20,"a"))
//output: 'aaaaaaaaaaaaAbhijeet'
console.log(example.padStart(20," "))
//output:  '           Abhijeet'
//same concept applies for padEnd() ex.
let example ="Abhijeet"
console.log(example.padEnd(20,"a"))
//output: 'Abhijeetaaaaaaaaaaaa'
console.log(example.padEnd(20," "))
//output: 'Abhijeet            '
