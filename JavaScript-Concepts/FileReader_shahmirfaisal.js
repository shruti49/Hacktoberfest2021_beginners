// AUTHOR: Shahmir Faisal
// JavaScript Concept: FileReader Api
// GITHUB: https://github.com/shahmirfaisal

//Add your JavaScript concept below

/*
    The FileReader object lets web applications asynchronously read the contents of files 
    (or raw data buffers) stored on the user's computer, using File or Blob objects to 
    specify the file or data to read.
*/


const file = null; // Store any kind of file here. You can use input html tag to let users select the file.

function printFile(file) {
    // Creating an instance of FileReader
    const reader = new FileReader();
    // This function will be invoked once it reads the file
    reader.onload = function(e) {
        console.log(e.target.result);
    };
    // Specifying how we wanna read the file.
    // Here we are reading the file as text
    reader.readAsText(file);
}
