/**
AUTHOR: Abhijeet Ekad
JavaScript Concept:Spread Operator 
GITHUB: https://github.com/abhijeetekad
 */

//Spread Operator
/**
 * We use spread operator to copy array to variable.
 * Syntex: [...variable]
 */
let contacts = ["raj", "ravi", "sachin"];
let closeFriends = contacts;
contacts.push("Abhijeet");
console.log(contacts)
//Output: [ 'raj', 'ravi', 'sachin', 'Abhijeet' ]
console.log(closeFriends)
//Output: [ 'raj', 'ravi', 'sachin', 'Abhijeet' ]
/**output will be same in both cases but what is we want to add new contact only in main contacts and not in close contact 
 * thats where we use spread operator.
 */
let closeFriends = [...contacts];
closeFriends = ["sachin",...contacts]
console.log(closeFriends)
//Output : [ 'Abhijeet', 'raj', 'ravi', 'sachin' ]
//to add abhijeet at last
closeFriends = [...contacts, "sachin"]
console.log(closeFriends)
//Output : [ 'raj', 'ravi', 'sachin', 'Abhijeet' ]