// AUTHOR: Harshvardhan Rathore
// JavaScript Concept: Eventlisteners in Javascript
// GITHUB: https://github.com/harshvardhan614

// Eventlistener in Javascript
//An Eventlistener is a method in JavaScript that attaches an event to to an element.
//The listener is programed to start an event when the input or signaling the event handler.

//Syntax :-
//element.addEventListener(event, function, useCapture);

//some EventListeners are :-
//onload //when the page loads
//onclick //when a user clicks something
//onmouseover //when a user mouses over something
//onmouseup //when a user mouses down from something
//onmousedown //when a user mouses up from something
//onmouseout //when a user mouses out something
//onfocus //when a user puts the cursor in a form field
//onblur //When a user leaves a form field

// On clicking button this  function works
 <button id="btn" onclick="clicked()">Click me</button>
    function clicked() {
      console.log("The button was clicked.")
    }

 // On loading page this  function works
    window.onload =function(){
      console.log("The document was loaded.");

    }

//use of click event
    let ids = document.getElementById("firstcontainer")
    ids.addEventListener('click', function(){
       console.log("clicked on container");
    })

//use of mouseout event
    ids.addEventListener('mouseout', function(){
      console.log("mouseout container");
    })

//use of mouseover event
    ids.addEventListener('mouseover', function(){
      console.log("mouse on container");
    })

//use of mouseup event
    ids.addEventListener('mouseup', function(){
      console.log("mouseup clicked on container");
    })

//use of mousedown event
    ids.addEventListener('mousedown', function(){

      console.log("mousedown clicked on container");
    })

//use of blur() and onfocus()
<input type="text" value="your name" name="name"
id="namefield" tabindex="10" />
  
  //get the ID and assign it as a variable
var nameField = document.getElementbyId("name");
//when the ID is clicked, run this function
nameField.onfocus = function() {
//if the field has the value "your name", leave it blank
if ( nameField.value == "your name" ) {
nameField.value = "";
}
};
