// The fill() method changes all elements in an array to // a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array. 

// array.fill() syntax
//ill(value)
// fill(value, start)
// fill(value, start, end)

// the fill method mutates the original array

let people = ["jane", "john", "mike", "anna"];
people.fill("ryan");
// ['ryan', 'ryan', 'ryan', 'ryan']

let fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
fruits.fill('Kiwi', 2, 4);
console.log(fruits);
//[ 'Banana', 'Orange', 'Kiwi', 'Kiwi' ]
