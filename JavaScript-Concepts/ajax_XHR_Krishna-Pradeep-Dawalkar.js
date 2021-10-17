// AUTHOR: Krishna Pradeep Dawalkar
// JavaScript Concept: AJAX(Asynchronous JavaScript And XML) and XHR(XMLhttpRequest).
// GITHUB: https://github.com/Krishna-Pradeep-Dawalkar/

//AJAX(Asynchronous JavaScript And XML) and XHR(XMLhttpRequest).
console.log("Ajax tutorial");
//AJAX is a technique for creating faster, and more interactive web applications with the help of XML, HTML, CSS, and JavaScript.
//It is a web browser technology which is independent of web server software.

//AJAX use of the built-in browser XMLHttpRequest (XHR) objects to send and receive information to and from a web server asynchronously, 
//in the background, without blocking the page or interfering with the user's experience.

//Ajax uses XHTML for the content, CSS for designing, along with Document Object Model and JavaScript for dynamic content display. 
//Before AJAX technology, the web applications transmit information to and from the server using synchronous requests. It this we fill out a form, hit submit,
//and get directed to a new page with new information from the server. But with AJAX, when we hit submit, JavaScript will make a request to the server,
//interpret the results, and update the current screen.

let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click', buttonClickHandler)

function buttonClickHandler() {
     console.log('You have clicked the fetchBtn');

    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // Open the object
    // xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);

    // USE THIS FOR POST REQUEST
    xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true);
    xhr.getResponseHeader('Content-type', 'application/json');


    // What to do on progress (optional)
    xhr.onprogress = function(){
        console.log('On progress');
    }


    // xhr.onreadystatechange = function () {
    //     console.log('ready state is ', xhr.readyState);
        
    // }

    // What to do when response is ready
    xhr.onload = function () {
        if(this.status === 200){

            console.log(this.responseText)
        }
        else{
            console.log("Some error occured")
        }
    }

    // send the request
    params = `{"name":"test34sad545","salary":"123","age":"23"}`;
    xhr.send(params);

    console.log("We are done!");

}

let popBtn = document.getElementById('popBtn');
popBtn.addEventListener('click', popHandler);

function popHandler() {
    console.log('You have clicked the pop handler');

    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // Open the object
    xhr.open('GET', 'http://dummy.restapiexample.com/api/v1/employees', true);


    // What to do when response is ready
    xhr.onload = function () {
        if(this.status === 200){
            let obj = JSON.parse(this.responseText);
            console.log(obj);
            let list = document.getElementById('list');
            str = "";
            for (key in obj)
            {
                str += `<li>${obj[key].employee_name} </li>`;
            }
            list.innerHTML = str;
        }
        else{
            console.log("Some error occured")
        }
    }

    // send the request
    xhr.send();
    console.log("We are done fetching employees!");
    
}

