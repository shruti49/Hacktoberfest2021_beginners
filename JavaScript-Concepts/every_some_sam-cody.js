// Author:sameer alam 
// javascript concept:every() and some() method 
// github link:https://github.com/sam-cody 

// every() and some() are the array method which check the certain condition on the each element of given array (which you want to check)
//  Both method take a callback function
//  both return boolean (true or false )

let arr=[2,3,5,6,9]

// every()
//  for this method every element should satisy the given condition then it will return otherwise false
//  like we want to check  if all the element are even number
 var checkEvenEvery=arr.every((elem)=>{
  return elem%2 == 0
 })

 console.log(checkEvenEvery)  //false (because not every element is even number)

//  some()
//  In this method if a single element satisfy thr condition it will retur n true unlike every()  method
var checkEvenSome=arr.some((elem)=>{
    return elem%2 == 0
   })

   console.log(checkEvenSome)  //true

