// AUTHOR: JohnDoeIsBack
// JavaScript Concept: Polymorphism
// GITHUB: https://github.com/JohnDoeIsBack


//Polymorphism using constructor function Employee which overrides another function

var employee = new Employee('ethan winters');

//below method will return Uppercase

Employee.prototype.getDetails = function()
{
  return this.name.toUpperCase();
}

console.log(employee.getDetails()); //here output will be "ETHAN WINTERS"

//Object and _prototype_ function

function Employee(name)
{
  this.name = name;
}

Employee.prototype.getDetails = function()
{
  return this.name;
}

console.log(employee.getDetails()); //here output will be "ethan winters"
