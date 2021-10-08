// AUTHOR: Hijikesh Hijal
// JavaScript Concept: classical inheritance
// GITHUB: https://github.com/hijal

//Classical inheritance describes how an instance of a class
//will inherit the functionality and attributes of that class and any other parent classes.

//base class
class Dog {
	constructor() {
		this.isAnimal = true;
	}
	bark() {
		console.log('woooooooooof woooooooooooof');
	}
}

//Dog is the parent class of Husky
class Husky extends Dog {
	shed() {
		console.log('Husky dog breed has a beautiful');
	}
}
//create an object of Husky
let hermie = new Husky();

hermie.bark(); 
//output
//woooooooooof woooooooooooof

hermie.shed();
//output
//Husky dog breed has a beautiful

hermie.isAnimal
//output
//true
