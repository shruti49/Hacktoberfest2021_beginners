// AUTHOR: Swapnil
// JavaScript Concept: Call, Apply and Bind
// GITHUB: https://github.com/swapnil0709

//Bind is used to borrow functions from other object
// Call and Bind methods are very useful and are often asked in interviews. We often use this in frameworks like react.

// Consider 2 javascript objects mickey and bugs

var mickey = {
    firstName: "Mickey",
    lastName: "Mouse",
    age: 10,
    getInfo: function(){
        console.log(`
        The first name is: ${this.firstName}
        last name is: ${this.lastName}
        and age is ${this.age}
        `);
    }

};

var bugs = {
    firstName: "Bugs",
    lastName: "Bunny",
    age: 6,
};

mickey.getInfo(); //This way we directly called the function but it is not resuable now and we need to repeat the same code for bugs to get the same output

//Javascript provides us with call, bind and apply. These methods works like this:

//using borrow through bind

mickey.getInfo.bind(bugs)(); //this returns a reference hence we need to call this either by adding (); or by assigning it to a variable and then calling.

//Also there is another method called call. But, this call method directly calls the new function

mickey.getInfo.call(bugs); // It takes 2nd argument as comma separated values

mickey.getInfo.apply(bugs); // apply is same as call, it just takes 2nd argument as an array


// Example of Call and Apply with arguments

//1. Call

const person = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
  }
  
  const person1 = {
    firstName:"Swapnil",
    lastName: "Sinha"
  }
  
  person.fullName.call(person1, "Mumbai", "India");

  //2. Apply

  const person = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
  }
  
  const person1 = {
    firstName:"Swapnil",
    lastName: "Sinha"
  }
  
  person.fullName.apply(person1, ["Mumbai", "India"]);