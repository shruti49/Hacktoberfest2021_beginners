// AUTHOR: Nikhil Vaidyar
// JavaScript Concept: Collections - Sets
// GITHUB: https://github.com/nikzayn

/*
    About
     - The set object lets you store unique values of any type

    Description
     - Set objects are collections of values.
     - Iteration can also be happen through the elements of a set in insertion order.

    Performance
     - Set has method checks if a value is in a Set.
     - It is faster and quicker in approach for testing elements using Set.
     - It is averagely faster than the Array.prototype.includes
*/

// Set() constructor declaration
const mySet = new Set();

// add(value) - It returns the set object with appended value
mySet.add(6);
// Output - Set(1) {6}

// clear() - It removes all elements from set object
mySet.clear();
// Output - undefined

// delete(value) - It removes the element equals to that value and 
// returns output as true if is successfuly removed else return false
mySet.delete(6);
// Output - true

// has(value) - It checks whether the value is present in set object return true
// else returns false
mySet.has(5)
// Output - false

// size - It returns the number of values in set object
mySet.size;
// Output - 1

// Iterate over items in set
mySet.clear()
mySet.add({ a: 1, b: 2, c: 3, d: 4 });
for (let item of mySet) console.log(item)
// Output - {a: 1, b: 2, c: 3, d: 4}

// values() - It returns a new iterator object that yields the values for each element
// in set object
for (let item of mySet.values()) console.log(item)
// Output - {a: 1, b: 2, c: 3, d: 4}

// keys() - Same as values()
for (let item of mySet.keys()) console.log(item)
// Output - {a: 1, b: 2, c: 3, d: 4}

// entries() - keys() and values() are same here
for (let [key, value] of mySet.entries()) console.log(key, value)
// Output - key -> {a: 1, b: 2, c: 3, d: 4}, value -> {a: 1, b: 2, c: 3, d: 4}

// forEach() - It will return the same output as above methods like keys() and values()
mySet.forEach(val => console.log(val));
// Output - {a: 1, b: 2, c: 3, d: 4}


const url = 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set';
console.log("Source - ", url)