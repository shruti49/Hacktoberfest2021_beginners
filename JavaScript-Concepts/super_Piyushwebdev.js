// AUTHOR: Piyushwebdev
// JavaScript Concept: super
// GITHUB: https://github.com/Piyushwebdev


//super
//The super keyword is used to access and call functions on an object's parent.

//The super.prop and super[expr] expressions are valid in any method definition in both classes and object literals.

//Syntax
super([arguments]);                       // calls the parent constructor.
super.functionOnParent([arguments]);

//Description
//When used in a constructor, the super keyword appears alone and must be used before the this keyword is used. 
//The super keyword can also be used to call functions on a parent object.


//Super-calling static methods

class Rectangle {
  static logNbSides() {
    return 'I have 4 sides';
  }
}

class Square extends Rectangle {
  static logDescription() {
    return super.logNbSides() + ' which are all equal';
  }
}
Square.logDescription(); 
//OUTPUT:- 'I have 4 sides which are all equal'



//Deleting super properties will throw an error

class Base {
  foo() {}
}
class Derived extends Base {
  delete() {
    delete super.foo; // this is bad
  }
}

new Derived().delete();
//OUTPUT:- ReferenceError: invalid delete involving 'super'. 


//Using super.prop in object literals

var obj1 = {
  method1() {
    console.log('method 1');
  }
}

var obj2 = {
  method2() {
    super.method1();
  }
}

Object.setPrototypeOf(obj2, obj1);
obj2.method2(); 
//OUTPUT:- logs "method 1"