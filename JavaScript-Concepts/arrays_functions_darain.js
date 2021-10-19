// AUTHOR: Darain
// JavaScript Concept: Arrays Functions
// GITHUB: https://github.com/Darainn

//1-foreach

let array = [1, 2, 3, 4, 5];

array.forEach((item) => {
  console.log(item);
});

//OUTPUT :

// 1
// 2
// 3
// 4
// 5

//2-map

const arrayOfObjects = [
  { name: 'Darain', age: 21 },
  { name: 'Mukarram', age: 22 },
];

arrayOfObjects.map((item, index) => {
  console.log(item.name);
});

//OUTPUT :

// Darain
// Mukarram

//3-filter

const arrayOfFruits = [
  { fruit: 'Banana', color: 'yellow' },
  { fruit: 'Apple', color: 'Red' },
  { fruit: 'Grapes', color: 'Green' },
  { fruit: 'Strawberry', color: 'Red' },
];

//to get fruits with red color

const redFruits = arrayOfFruits.filter((item) => item.color === 'Red');
console.log(redFruits);

//OUTPUT :

// [
//     { fruit: 'Apple', color: 'Red' },
//     { fruit: 'Strawberry', color: 'Red' }
// ]

//4-find

const arrayOfPersons = [
  { person: 'Neha', age: 21 },
  { person: 'Vishwash', age: 22 },
  { person: 'Rahul', age: 22 },
  { person: 'Arjun', age: 33 },
];

const findPerson = arrayOfPersons.find((item) => item.person === 'Arjun');
console.log(findPerson);

//OUTPUT :

// { person: 'Arjun', age: 33 }

//5-reduce

const arrayToReduce = [1, 2, 3, 4, 5];

let doOperation = arrayToReduce.reduce(function (acc, val) {
  return acc + val;
}, 0);
console.log(doOperation);

//OUTPUT

//15
