// AUTHOR: Vamsi Krishna
// JavaScript Concept: Break Statement in js
// GITHUB: https://github.com/VamsiKrishna04/

// The Break Statement:

// The break statement "jumps out" of a loop.

for (let i = 0; i < 10; i++) {
  let text = "";
  if (i === 2) { break; }
  text += "The number is " + i;
  console.log(text);
}

// Output
// The number is 0
// The number is 1 
