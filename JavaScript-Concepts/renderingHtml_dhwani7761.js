// AUTHOR: Dhwani Kshatriya | dhwani7761
// JavaScript Concept: Rendering HTML through Javascript
// GITHUB: https://github.com/Dhwani7761

//one liner
document.write('<html><body><h2>HTML</h2></body></html>');


//using DOM
var newNode = document.createElement('p');
newNode.appendChild(document.createTextNode('html string'));