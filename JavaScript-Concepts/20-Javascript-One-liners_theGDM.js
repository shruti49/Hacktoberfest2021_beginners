// AUTHOR: Gyandeep Mehra
// JavaScript Concept: 20 Javascript One liners every coder should know
// GITHUB: https://github.com/theGDM

//Hello everyone this is theGDM, here i am going to show you 20 Javascripts one liners that will make your
//life easier.

//1. Check if number is even or odd
const isEven = num => num % 2 === 0;
console.log(isEven(2));
//Result: True

//2. Find average of numbers
const averages = (...nums) => nums.reduce((a, b) => a + b) / nums.length;
averages(1, 2, 3, 4);
//Result: 2.5

//3. Finding Max value
let grades = [89, 96, 58, 77, 62, 93, 81, 99, 73];
const topScore = grades.reduce((max, currVal) => (Math.max(max, currVal))); topScore;
//Result: 99

//4. Generate random number between given interval(inclusive)
const randomNum = (a, b) => Math.floor(Math.random() * (b - a + 1)) + a;
randomNum(20, 22);
//Result: 20

//5. Generate random Hex color
const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;
console.log(randomHex());
// Result: #92b008

//6. Remove dupilicates from array
const removeDuplicates = (arr) => [...new Set(arr)];
console.log(removeDuplicates([1, 2, 3, 3, 4, 4, 5, 5, 6]));
// Result: [ 1, 2, 3, 4, 5, 6 ]

//7. Reverse a string
const reverse = str => str.split('').reverse().join('');
reverse('hello theGDM');     
// Result: 'MDGeht olleh'

//8. Capitalize a string
const capitalize = str => str[0].toUpperCase() + str.substr(1, str.length);
capitalize('theGDM');     
// Result: 'TheGDM'

//9. Scroll to top
const goToTop = () => window.scrollTo(0, 0);
goToTop();

//10. Check if array is empty
const isNotEmpty = arr => Array.isArray(arr) && arr.length > 0;
isNotEmpty([1, 2, 3]);
// Result: true

//11. Shuffle an array
const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());
console.log(shuffleArray([1, 2, 3, 4]));
// Result: [ 1, 4, 3, 2 ]

//12. Get the text that user has selected
const getSelectedText = () => window.getSelection().toString();
getSelectedText();

//13. Clear all the cookies stored in the webpage
const clearCookies = document.cookie.split(';').forEach(cookie => document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`));

//14. Check if date is valid
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());
isDateValid("October 18, 2021 03:24:00");
// Result: true

//15. Easily copy any text to clipboard
const copyToClipboard = (text) => navigator.clipboard.writeText(text);
copyToClipboard("Hello theGDM");

//16. Convert RGB to Hex
const rgbToHex = (r, g, b) =>"#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
rgbToHex(0, 51, 255); 
// Result: #0033ff

//17. Log time from the date in the format hour::minutes::seconds
const timeFromDate = date => date.toTimeString().slice(0, 8);
console.log(timeFromDate(new Date(2021, 0, 10, 17, 30, 0))); 
// Result: "17:30:00"

//18. Find the day of the year
const dayOfYear = (date) => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
dayOfYear(new Date());
// Result: 272

//19. Get value of browser cookie
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
cookie('_ga');
// Result: "GA1.2.1929736587.1601974046"

//20. Detect dark-mode
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
console.log(isDarkMode)
// Result: True or False



