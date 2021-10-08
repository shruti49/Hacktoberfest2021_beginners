// AUTHOR: Monish Shetty
// JavaScript Concept: callback
// GITHUB: https://github.com/alpha-oss

//Add your JavaScript concept below
// callback is a function which  is passed as an argument to another function, 
// which is invoked inside the outer function to get certain output.
// here process is a function which is passed in another function printTitle as an argument.


function process(title) {
    console.log('Process name: ' + title);
    }
    
function printTitle(myCallback){
        title = 'Memory Fragmentation';
    myCallback(title);
}
printTitle(process);


//output 
//Process name: Memory Fragmentation
