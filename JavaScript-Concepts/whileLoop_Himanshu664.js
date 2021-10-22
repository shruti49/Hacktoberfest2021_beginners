// AUTHOR: Himanshu Malviya
// JavaScript Concept: While Loop
// GITHUB: https://github.com/Himanshu664




// while Statement

// The while statement executes the statements until the condition is not false. The
// syntax for 'while' loop is 

// Syntax
while (condition) {
    // code block to be executed
  }


  Ex:

  i=0;
  while (i < 10) {
    text += "The number is " + i;
    i++;
  }
//   output:
//   The number is 0
//   The number is 1
//   The number is 2
//   The number is 3
//   The number is 4
//   The number is 5
//   The number is 6
//   The number is 7
//   The number is 8
//   The number is 9




// First, the condition is evaluated and if it is true, then the statements are executed and
// again the condition is tested. The execution stops when condition returns false.



// AUTHOR: Nikhil Singh
// JavaScript Concept: Do While Loop
// GITHUB: https://github.com/singhnikhiljsr/


// The do while loop is a variant of the while loop. This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.
// Syntax //

do {
  // code block to be executed
}
while (condition);

// Example //

i=0;
do {
  text += "The number is " + i;
  i++;
}
while (i < 10);

// Output
// The number is 0
// The number is 1
// The number is 2
// The number is 3
// The number is 4
// The number is 5
// The number is 6
// The number is 7
// The number is 8
// The number is 9
