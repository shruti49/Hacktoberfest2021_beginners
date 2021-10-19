// AUTHOR: Zuber Rahman
// JavaScript Concept: Sorting 
// GITHUB: https://github.com/zuberrahman

// Sorting an array of words

//Declare an array
var fruits = ["Banana", "Orange", "Apple", "Papaya", "Mango"];
//Using the sort in-built function
var sorted = fruits.sort();

//Output 
alert(fruits); // Outputs: Apple,Banana,Mango,Orange,Papaya
alert(sorted); // Outputs: Apple,Banana,Mango,Orange,Papaya


// Sorting a numeric array

/*The in-built sort function when used with a numeric array gives
an unexpected output, so we would have to use a comparator function
to compare all the numbers and sort them accordingly*/

var numbers = [5, 20, 10, 75, 50, 100];

// Sorting an array using compare function
numbers.sort(function(a, b) {
    return a - b;
});
alert(numbers); // Outputs: 5,10,20,50,75,100

//If the compare function returns a value less than 0, then a comes first
//If the compare function returns a value greater than 0, then b comes first.
/*If the compare function returns 0, a and b remain unchanged with respect to each other, 
but sorted with respect to all other elements. */
