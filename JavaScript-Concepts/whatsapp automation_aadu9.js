// AUTHOR: Aditi
// JavaScript Concept: sending unlimited Whatsapp messages 
// GITHUB: https://github.com/aadu9

//Add your JavaScript concept below

//READ COMMENTS TO KNOW HOW TO USE
//open Whatsapp Web  
//open web console 
//copy paste the following code into the console
function simulateMouseEvents(element, eventName) 
{ 
    var mouseEvent = document.createEvent('MouseEvents'); 
    mouseEvent.initEvent(eventName, true, true); 
    element.dispatchEvent(mouseEvent); 
} 
name = "whatsapp_group_name_or_contact name" ; //Replace whatsapp_group_name_or_contact name with your contact number 
  
    simulateMouseEvents(document.querySelector('[title="' + name + '"]'), 'mousedown'); 
  
function startTimer() 
{ 
    setTimeout(myFunc, 3000); 
} 
  
startTimer(); 
  
var eventFire = (MyElement, ElementType) => { 
    var MyEvent = document.createEvent("MouseEvents"); 
    MyEvent.initMouseEvent
     (ElementType, true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null); 
    MyElement.dispatchEvent(MyEvent); 
}; 
  
function myFunc() 
{ 
  
    messageBox = document.querySelectorAll("[contenteditable='true']")[1]; 
  
    message = "Your mesage"; // Replace Your Message with whatever message you want to send
  
    counter = 10; // Replace 10 with the number of times you want to send your message 
  
    for (i = 0; i < counter; i++) { 
        event = document.createEvent("UIEvents"); 
        messageBox.innerHTML = message.replace(/ /gm,''); // test it 
        event.initUIEvent("input", true, true, window, 1); 
        messageBox.dispatchEvent(event); 
  
        eventFire(document.querySelector('span[data-icon="send"]'), 'click'); 
    } 
}     