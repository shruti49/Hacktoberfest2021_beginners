// AUTHOR: Nikita Chaudhari
// JavaScript Concept: JavaScript Regular Expressions
// GITHUB: https://github.com/nikita12c

// Definition :
// A regular expression is a sequence of characters that forms a search pattern.The search pattern can be used for text search and text replace operations.
// When you search for data in a text, you can use this search pattern to describe what you are searching for.

// Syntax :
/pattern/modifiers;

// Example :
/hacktoberfest/i;

// Explaination :
// /hacktoberfest/i  is a regular expression.
// hacktoberfest  is a pattern (to be used in a search).
// i  is a modifier (modifies the search to be case-insensitive).

//Using String Methods
// The search() method uses an expression to search for a match, and returns the position of the match.

// Example 1 :
// Use a string to do a search for "hacktoberfest" in a string:
let text = "Visit hacktoberfest!";
let n = text.search("hacktoberfest");
// The result in n will be : 6

// Example 2 :
// Use a regular expression to do a case-insensitive search for "w3schools" in a string:
let text = "Visit W3Schools";
let n = text.search(/w3schools/i);
// The result in n will be : 6