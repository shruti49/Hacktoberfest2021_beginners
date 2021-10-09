//author : realNameHidden1
// JavaScript Concept: Set in JavaScript
// GITHUB: https://github.com/realNameHidden1
//creating set
let nums = new Set();
//if we want the unique values from the given numbers or if we want to eliminate
//the duplicates from the given numbers
//we can user Set() for this in the below example
// i added different duplicate values and added into set
nums.add(3);
nums.add(4);
nums.add(5);
nums.add(6);
nums.add(4);
nums.add(4);
nums.add(4);
nums.add(4);
//now i am printing the set 
console.log(nums);
//output will be
//Set(4) { 3, 4, 5, 6 }
//as we can seen in the output the duplicate values are eliminated
//only the unique values are present int the set

//another example
let names = new Set()
//adding duplicates names to set
names.add("sam");
names.add("jhon");
names.add("sam");
names.add("jhon");
//printing set
console.log(names)
//output
//Set(2) { 'sam', 'jhon' }
//we can see in output the duplicate names are eliminated
