//strings
//string is a sequence of characters used to represent text. In JavaScript, strings are created by enclosing characters in single quotes (' '), double quotes (" "), or backticks (` `) for template literals.

//create strings
let str = "Hello";
let str1 = 'Shreya';

//string length
str.length;
str1.length;
console.log(str.length); // Output: 5
console.log(str1.length); // Output: 5


//string indices
//In JavaScript, strings are zero-indexed, meaning the first character is at index 0, the second character is at index 1, and so on. You can access individual characters in a string using bracket notation.

let str2 = "Hello, World!";
console.log(str2[0]); // Output: H
console.log(str2[1]); // Output: e
console.log(str2[2]); // Output: l
console.log(str2[3]); // Output: l
console.log(str2[4]); // Output: o

//Template literals
//Template literals are a way to create strings in JavaScript that allow for embedded expressions and multi-line strings. They are enclosed in backticks (` `) instead of single or double quotes.

let specialString = `This is a template literal.`;
console.log(specialString); // Output: This is a template literal.
console.log(typeof specialString); // Output: string