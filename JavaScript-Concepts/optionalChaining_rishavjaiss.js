// AUTHOR: Rishav
// JavaScript Concept: Optional Chaining
// GITHUB: www.github.com/rishavjaiss


const bio = {
  firstName: "John",
  lastName: "Doe",
  age: 26,
  country: "India",
}

// The '?' after 'bio' checks whether the left hand side exists and is true, only then proceeds deeper in the chaining. 
// This is very helpful when you are not sure if a property is present in an object or not. It'll not throw error or break the code and is safe to use this.

console.log(`Name -> ${bio?.firstName} ${bio?.lastName}`)
console.log(`Age -> ${bio?.age}`)
console.log(`Country -> ${bio?.country}`)
console.log(`Hobbies -> ${bio?.hobby}`)
