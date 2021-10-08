// AUTHOR: Harsh Sinha
// JavaScript Concept: Important JS Concept for Interview
// GITHUB: https://github.com/harsh6975


  =======================
||Truthy and Falsy values ||
  =======================
  
By default, javascript considers some values as true and the others false. 

True values: '', '0', {} , []

False values: false, undefined, null , 0, NaN




   =================
|| Null vs Undefined ||
   =================

Null is a value that was defined but empty or null, whereas undefined is a value that was declared but no value assigned.
Undefined is a type where null is an object.




   ===========================================
|| Double Equal ( == ) vs Triple equal ( === ) ||
   ===========================================

Double equals just check values
Triple equals check values with the type of the values.
Double equals convert the type of the value and then check the value.




   =====
|| Scope ||
   =====
Scope means the accessibility of variables.
Javascript has three types of scope.

1.Local Scope- Variables declared within a function are the local scope and these variables are accessible within only that function.

2.Global scope- variable declared outside of a function and accessible from any function, scripts, and webpage.

3.Block Scope- It is related to the variables declared using let and const. 
               Variables declared with var do not have block scope.
               It tells us that any variable declared inside a block { }, can be accessed only inside that block and cannot be accessed outside of it.



               
     =====
  || This ||
     =====
— The JavaScript this keyword refers to the object it belongs to.
- In an object method, this refers to the "owner" of the method.
  



   ===========
|| Constructor ||
   ===========
     
Constructor functions are used to create objects in javascript.
If we want to create multiple objects having similar properties and methods, constructor functions are used.




   =======
|| Closuer ||
   =======
  
- Closure in javascript is when there's a function declared within a function.
- Or a function returns a function. 
- The second function which is declared within the first one has variables that are not accessible from the parent function 
  or first function (private variable). But the children function can access the value of the parent function.
  
  
  
  
   =================
|| Call, Apply, Bind ||
   =================
     
1. call()- It’s a predefined method in javascript.
          This method invokes a method (function) by specifying the owner object.
          call() method allows an object to use the method (function) of another object.
          call() accepts arguments.
          
2. apply()- The apply method is similar to the call() method.
            apply() method takes arguments as an array.
3. bind()-  This method creates a new function that, when called, has its this keyword set to the provided value,
            with a given sequence of arguments preceding any provided when the new function is called.



            
   ===============
|| Arrow functions ||
   ===============
  
Arrow functions were introduced in the ES6 version of javascript.
They provide us with a new and shorter syntax for declaring functions.
Arrow functions can only be used as a function expression.


   ========
|| Hoisting ||
   ========
Hoisting is a default behaviour of javascript where all the variable and function declarations are moved on top.
Irrespective of where the variables and functions are declared, they are moved on top of the scope. The scope can be both local and global.
