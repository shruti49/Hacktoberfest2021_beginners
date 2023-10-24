// AUTHOR: Abhikumar Gupta
// JavaScript Concept: Making API calls using the fetch() method
// GITHUB: https://github.com/abhi87372

const fetchAPI = async(URL) => {
	const response = await fetch(URL);
	
	const data = await response.json();
	
	console.log(data)
}
fetchAPI("https://jsonplaceholder.typicode.com/todos/2")
