// AUTHOR: Anshul
// JavaScript Concept: JavaScript Prototype
// GITHUB: https://github.com/Anshul123kumar


//When an object is created in JavaScript, JavaScript engine adds a __proto__ property to the newly created object which is called dunder proto. dunder proto or 
//__proto__ points to the prototype object of the constructor function.

function Bike(model,color){
   this.model = model,
   this.color = color,
this.getDetails = function(){
     return this.model+' bike is '+this.color;
   }
}
var bikeObj1 = new Bike('BMW','BLACK');
var bikeObj2 = new Bike('BMW','WHITE');
console.log(bikeObj1.getDetails()); //output: BMW bike is BLACK
console.log(bikeObj2.getDetails()); //output: BMW bike is WHITE
console.log(bikeObj1,bikeObj2) //attacheced below image as output

//In the above example, we are creating two objects, bikeObj1, bikeObj2 using a constructor. In JavaScript, every object has its own methods and properties.
//In our example, two objects have two instances of the constructor function getDetails(). It doesn’t make sense having a copy of getDetails doing the same thing.
//Instead of using a copy of instances, we are going to use the prototype property of a constructor function.
