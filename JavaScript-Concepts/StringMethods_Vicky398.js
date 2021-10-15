// AUTHOR: Vignesh Kumar B
// JavaScript Concept: String Methods
// GITHUB: https://github.com/Vicky398

//Some of the Most Commonly used Javascript String Methods 

//1.charAt(x)
//This function will return the character at the x position within the string.

var myString = 'I love Javascript';
console.log(myString.charAt(7));
//output: J

//2.concat(v1,v2..)
//This function combines one or more strings(argv1,v2 etc) into existing one.

var message="My"
var final=message.concat(" favorite Language"," is Javascript");
console.log(final);
//output: "My favorite Language is Javascript"

//3.indexOf(substr, [start])
//Searches and (if found) returns the index number of the searched character or substring within the string. If not found, -1 is returned.
//“Start” is an optional argument specifying the position within string to begin the search. Default is 0.

var sentence="Hi, my name is Vicky!"
if (sentence.indexOf("Vicky")!=-1)
console.log("Vicky is in there!");

/*
4.slice(start, [end])

This function returns a substring of the string based on the “start” and “end” index arguments, NOT including the “end” index itself.
“End” is optional, and if none is specified, the slice includes all characters from “start” to end of the string.
*/

var text="Javascript"
text.slice(0,4) //returns "Java"
text.slice(2,4) //returns "va"

/*
5.split(delimiter, [limit])
This will split a string into many according to the specified delimiter, and returns an array containing each element.
The optional “limit” is an integer that lets you specify the maximum number of elements to return.
*/


var message="Welcome to Javascript"
var word=message.split(" ");
//word[0] contains "Welcome"
//word[1] contains "to"
//word[2] contains "Javascript"

/*
6.toLowerCase()
This will return the string with all of its characters converted to lowercase.
*/

var myString = 'JAVASCRIPT ROCKS';
myString = myString.toLowerCase();
console.log(myString)
//output: javascript rocks
 

/*
7.toUpperCase()
This will return the string with all of its characters converted to uppercase.
*/

var myString = 'javascript rocks';
myString = myString.toUpperCase();
console.log(myString)
//output: JAVASCRIPT ROCKS
 

/*
8. includes()
It is used to check whether a string contains the specified string or characters.
*/


var mystring = "Hello, welcome to Javascript";
var n = mystring.includes("Javascript");
//output: True


/*
9. trim()
This function removes whitespace from both ends of a string.
*/

var str = "     Hello World!     ";
console.log(str.trim());
//output: Hello World!
