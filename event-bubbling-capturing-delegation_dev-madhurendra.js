/*
    Author : Madhurendra Nath Tiwari
    Javascript Concept : Event Bubbling Capturing Delegation
    Github : https://github.com/dev-madhurendra


    One html file should be there : 

    event-bubbling-capturing-delegation.html

    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">

            // Javascript file name should be there
            <script src="event-bubbling-capturing-delegation" defer></script>
            <title>Event bubbling | Capturing | Delegation</title>
            <style>
                *{
                    padding:0;
                    margin: 0;
                    box-sizing: border-box;
                }

                body{
                    font-family:arial,sans-serif;
                }


                main {
                    display:flex;
                    justify-content:center;
                    align-items: center;
                    height:100vh;
                }

                .box {
                    min-width:100px;
                    min-height: 100px;
                    padding:5rem;
                    color:white;
                    font-weight: bold;
                    font-size: 2rem;
                    cursor: pointer;
                }

                .grandparent {
                    background: #b1d4e0;
                    color:black;
                }

                .parent{
                    background: #145da0;
                }

                .child{
                    background: #0c2d48;
                }
            </style>
        </head>
        <body>
            <main>
                <div class="grandparent box">
                    GrandParent
                    <div class="parent box">
                        Parent
                        <div class="child box">
                            Child
                        </div>
                    </div>
                </div>
            </main>
        </body>
    </html>
*/

/*
Event bubbling : 
    Event bubbling is a mechanism in JavaScriptthat describes the order in which 
    events are handled when an event is triggered on a nested element within a 
    container element. It refers to the propagation of an event from the innermost 
    element to the outermost ancestor element in the DOM (Document Object Model) 
    hierarchy.
    

*/

// accessing html element by classname .grandparent
const grandParent = document.querySelector(".grandparent")

// accessing html element by classname .child
const child = document.querySelector(".child")

// accessing html element by classname .parent
const parent = document.querySelector(".parent")


const callback = (text) => {
    console.log(text);
}

child.addEventListener("click", callback("child div clicked !"))

parent.addEventListener("click", callback("parent div clicked !"))

grandParent.addEventListener("click", callback("grandparent div clicked !"))

/*
    Event Capturing:
        Event capturing is the opposite of event bubbling in JavaScript's DOM
        (Document Object Model) event handling mechanism. While event bubbling
        refers to the process where an event starts at the target element and
        propagates up to the root of the DOM tree through its ancestors, event
        capturing works in the opposite direction. Event capturing involves
        capturing the event at the root and propagating it down through the
        ancestors to the target element.

*/

child.addEventListener("click", callback("child div captured !"), true) // The "true" argument specifies capturing phase

parent.addEventListener("click", callback("parent div captured !"), true)

grandParent.addEventListener("click", callback("grandparent div captured !"), true)

/*
    
    Event delegation :
        Event delegation is a JavaScript programming technique that involves 
        attaching a single event listener to a common ancestor element of 
        multiple child elements, rather than attaching individual event listeners 
        to each child element. This allows you to handle events for multiple 
        elements with similar behavior efficiently.



*/
grandParent.addEventListener("click", (e) => {
    if (e.target.classList.contains("child")) {
        console.log(`you clicked on child`);
    } else if (e.target.classList.contains("parent")) {
        console.log(`you clicked on parent`);
    } else {
        console.log(`you clicked on grandParent`);
    }
})
