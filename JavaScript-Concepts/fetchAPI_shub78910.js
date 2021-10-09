// AUTHOR: Shubham Hirakki
// JavaScript Concept: Fetch API
// GITHUB: https://github.com/shub78910

//FETCH API

//So, fetch is bascially a way to call you API's.
//The textbook definition is:
//The Fetch API provides a JavaScript interface for accessing and manipulating parts of the HTTP pipeline, such as requests and responses.
//A fetch function is provided in the global window scope, with the first argument being the URL.

// So an example to use the fetch api can be:

fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => console.log(json));

//here we are simply console logging, but we can make any changes needed; such as updating the state.

//   you can use the .catch method to catch any sort of error.
//eg:

fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((err) => console.log(err));

//mind you that this catch will only catch error which have a connection error. Even if the response is a failed response, it won;t catch it.
//For that, you can throw errors based on the status code.
// eg:

if (res.status == 500) {
    console.log("Internal server error");
} else if (res.status == 504) {
    console.log("504 Gateway Timeout");
}
