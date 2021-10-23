// AUTHOR: Diamond Rivero
// JavaScript Concept: Display hello world using the major output methods
// GITHUB: https://github.com/diamant3

console.log("Hello, World!");     // Output to the developer tool console
document.write("Hello, World!");  // Output directly to the document of the page
window.alert("Hello, World!");    // Output using the windows Pop up/Alert


/*

<!--HTML File Sample-->

<!DOCTYPE html>

<html>
	<body>
		<p id="hello_world">
		</p>
	</body>
</html>

*/

document.getElementById("hello_world").innerHTML = "Hello, World!";

/*
	Access the p tag
	with corresponding
	id then output.
*/
