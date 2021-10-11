// Generating a random number in the range from 1 to 6
//Step-1: Math.random() is the function used to create a random decimal numbers from 0 to 0.9 to 16 decimal places like: 0.3647382746318429
// Step-2: So, if we multiply Math.random() with the given number,we will decimal numbers with integral part as 0 / 1 / 2 /3 /4 /5
// for example : 0.3647382746318429 * 6 = 2.18842964779
// Step-3 : Math.floor(random_number) will produce the numbers from 0 to 5
// Step-4 : adding one to Math.floor(random_number) will produce the numbers in the desired range i.e.,(from 1 to 6)
var number = 6;
var random_number = Math.random();
random_number = random_number * 6;
random_number = Math.floor(random_number) + 1; 
console.log(random_number); 
