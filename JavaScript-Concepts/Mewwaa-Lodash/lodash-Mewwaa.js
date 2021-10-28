// AUTHOR: Ewa Zalewska
// JavaScript Concept: JS short shocase of Lodash functions
// GITHUB: https://github.com/Mewwaa


var lodash = require("lodash")

console.log("Funkcja 1")
//Difference - Shows elements that are in the first array, but are not in the second one

console.log("｡.｡:+* ﾟ ゜ﾟ *+:｡.｡:+* ﾟ ゜ﾟ *+:｡.｡.｡:+* ﾟ ゜ﾟ *+:｡.｡:+* ﾟ ゜ﾟ *")

//example 1
console.log(lodash.difference([219, 1], [219, 3]));

//example 2
console.log(lodash.difference([22,11,10,8], [22,3,5]));

//example 3
console.log(lodash.difference([1000, 291,999,5418,34,41], [2000,1000,999,34,41]));

console.log("｡.｡:+* ﾟ ゜ﾟ *+:｡.｡:+* ﾟ ゜ﾟ *+:｡.｡.｡:+* ﾟ ゜ﾟ *+:｡.｡:+* ﾟ ゜ﾟ *")

console.log(" ")

console.log("Funkcja 2")

console.log(" ")
//Drop - Removes n elements from the beginning from the array (default - 1)

console.log("｡.｡:+* ﾟ ゜ﾟ *+:｡.｡:+* ﾟ ゜ﾟ *+:｡.｡.｡:+* ﾟ ゜ﾟ *+:｡.｡:+* ﾟ ゜ﾟ *")

//example 1
console.log(lodash.drop([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 10));

//example 2
console.log(lodash.drop([99,98,97,96,95,94,93,92,91], 9));

//example 3
console.log(lodash.drop([22,33,13,23,34,346,7,44,223], 8));

console.log("｡.｡:+* ﾟ ゜ﾟ *+:｡.｡:+* ﾟ ゜ﾟ *+:｡.｡.｡:+* ﾟ ゜ﾟ *+:｡.｡:+* ﾟ ゜ﾟ *")

console.log(" ")

console.log("Funkcja 3")

console.log(" ")
//Fill - Fills the elements of an array with the given value from start to end

console.log("｡.｡:+* ﾟ ゜ﾟ *+:｡.｡:+* ﾟ ゜ﾟ *+:｡.｡.｡:+* ﾟ ゜ﾟ *+:｡.｡:+* ﾟ ゜ﾟ *")

//example 1 - here it fills in as in the description above
console.log(lodash.fill(Array(3), "b"));

//example 2 - here it converts the numbers from 4 to 7 (the position number on the array) into emoji
console.log(lodash.fill([4,6,8,10,22,42,14], 'ヽ( ▼∀▼)ﾉ', 4,7));

//example 3 - and here it changes everything to E
var array = [10,9,8,7,6,5,4,3,2,1,0]
console.log(lodash.fill(array, "E"));

console.log("｡.｡:+* ﾟ ゜ﾟ *+:｡.｡:+* ﾟ ゜ﾟ *+:｡.｡.｡:+* ﾟ ゜ﾟ *+:｡.｡:+* ﾟ ゜ﾟ *")

console.log(" ")

console.log("Funkcja 4")

console.log(" ")
//compact - removes all blank characters

console.log("｡.｡:+* ﾟ ゜ﾟ *+:｡.｡:+* ﾟ ゜ﾟ *+:｡.｡.｡:+* ﾟ ゜ﾟ *+:｡.｡:+* ﾟ ゜ﾟ *")

//example 1
let tekst = ["Ala", "ma" ,"kota" ,"i", "psa", "", "",""]
let filtered = lodash.compact(tekst)
console.log(tekst)
console.log(filtered)

//example 2
let tekst2 = ["Jak", "masz" ,"na" ,"imię", "", "", "?",""]
let filtered2 = lodash.compact(tekst2)
console.log(tekst2)
console.log(filtered2)

//example 3
let tekst3 = ["Umiesz", "" ,"" ,"pływać", "", "", "?",""]
let filtered3 = lodash.compact(tekst3)
console.log(tekst3)
console.log(filtered3)

console.log("｡.｡:+* ﾟ ゜ﾟ *+:｡.｡:+* ﾟ ゜ﾟ *+:｡.｡.｡:+* ﾟ ゜ﾟ *+:｡.｡:+* ﾟ ゜ﾟ *")

console.log(" ")

console.log("Funkcja 5")

console.log(" ")
//concat - Combines several arrays into one

console.log("｡.｡:+* ﾟ ゜ﾟ *+:｡.｡:+* ﾟ ゜ﾟ *+:｡.｡.｡:+* ﾟ ゜ﾟ *+:｡.｡:+* ﾟ ゜ﾟ *")

//example 1
let arrayX = [1,3,4,5];
let arrayX2 = [1,3,4,5];
console.log(lodash.concat(arrayX,arrayX2, 2, [3], [4]));

//example 2
let array2X = [22,98];
let array2X2 = [100];
console.log(lodash.concat(array2X,array2X2, 8, [9], [11]));

//example 3
let array3X = [9];
let array3X2 = [11111];
console.log(lodash.concat(array3X,array3X2, 2, [3], [4],111,32468,[87]));

console.log("｡.｡:+* ﾟ ゜ﾟ *+:｡.｡:+* ﾟ ゜ﾟ *+:｡.｡.｡:+* ﾟ ゜ﾟ *+:｡.｡:+* ﾟ ゜ﾟ *")

console.log(" ")

console.log("Funkcja 6")

console.log(" ")
//head - Displays the first element of an array

console.log("｡.｡:+* ﾟ ゜ﾟ *+:｡.｡:+* ﾟ ゜ﾟ *+:｡.｡.｡:+* ﾟ ゜ﾟ *+:｡.｡:+* ﾟ ゜ﾟ *")

//example 1
nowa_tab = [9,8,7,65,3,2,1]
console.log(lodash.head(nowa_tab));

//example 2
nowa_tab2 = [3,2,1]
console.log(lodash.head(nowa_tab2));

//example 3
nowa_tab3 = [1,11,111,1111]
console.log(lodash.head(nowa_tab3));

console.log("｡.｡:+* ﾟ ゜ﾟ *+:｡.｡:+* ﾟ ゜ﾟ *+:｡.｡.｡:+* ﾟ ゜ﾟ *+:｡.｡:+* ﾟ ゜ﾟ *")

console.log(" ")

console.log("Funkcja 7")

console.log(" ")
//size - Displays the number of items in the array

console.log("｡.｡:+* ﾟ ゜ﾟ *+:｡.｡:+* ﾟ ゜ﾟ *+:｡.｡.｡:+* ﾟ ゜ﾟ *+:｡.｡:+* ﾟ ゜ﾟ *")

//example 1
console.log(lodash.size(nowa_tab3));

//example 2
console.log(lodash.size(nowa_tab2));

//example 3
console.log(lodash.size(nowa_tab));

console.log("｡.｡:+* ﾟ ゜ﾟ *+:｡.｡:+* ﾟ ゜ﾟ *+:｡.｡.｡:+* ﾟ ゜ﾟ *+:｡.｡:+* ﾟ ゜ﾟ *")

console.log(" ")

console.log("Funkcja 8")

console.log(" ")
//gt - Checks if the first number is greater than the second

console.log("｡.｡:+* ﾟ ゜ﾟ *+:｡.｡:+* ﾟ ゜ﾟ *+:｡.｡.｡:+* ﾟ ゜ﾟ *+:｡.｡:+* ﾟ ゜ﾟ *")

//example 1
console.log(lodash.gt(1, 1290));

//example 2
console.log(lodash.gt(61237, 1273));

//example 3
console.log(lodash.gt(0, 0));

console.log("｡.｡:+* ﾟ ゜ﾟ *+:｡.｡:+* ﾟ ゜ﾟ *+:｡.｡.｡:+* ﾟ ゜ﾟ *+:｡.｡:+* ﾟ ゜ﾟ *")

console.log(" ")

console.log("Funkcja 9")

console.log(" ")
//isNumber - Checks if the given item is a number

console.log("｡.｡:+* ﾟ ゜ﾟ *+:｡.｡:+* ﾟ ゜ﾟ *+:｡.｡.｡:+* ﾟ ゜ﾟ *+:｡.｡:+* ﾟ ゜ﾟ *")

//example 1
console.log(lodash.isNumber("eva"));

//example 2
console.log(lodash.isNumber(76));

//example 3
console.log(lodash.isNumber("AlaMa3Koty"));

console.log("｡.｡:+* ﾟ ゜ﾟ *+:｡.｡:+* ﾟ ゜ﾟ *+:｡.｡.｡:+* ﾟ ゜ﾟ *+:｡.｡:+* ﾟ ゜ﾟ *")

console.log(" ")

console.log("Funkcja 10")

console.log(" ")
//add - Adds the given numbers together

console.log("｡.｡:+* ﾟ ゜ﾟ *+:｡.｡:+* ﾟ ゜ﾟ *+:｡.｡.｡:+* ﾟ ゜ﾟ *+:｡.｡:+* ﾟ ゜ﾟ *")

//example 1
console.log(lodash.add(8927592752, 8));

//example 2
console.log(lodash.add(999999999999999, 1));

//example 3
console.log(lodash.add(0.9, 0.01));