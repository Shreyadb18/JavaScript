//String methods
//These are built-in functions to manipulate a string.

let str = "Hello, World!";
//toUpperCase() method converts all characters in a string to uppercase.
console.log(str.toUpperCase()); // Output: HELLO, WORLD!

//toLowerCase() method converts all characters in a string to lowercase.
console.log(str.toLowerCase()); // Output: hello, world!

//trim() method removes whitespace from both ends of a string.
let str1 = "   Hello, World!   ";
console.log(str1.trim()); // Output: Hello, World!

//indexOf() method returns the index of the first occurrence of a specified value in a string. If the value is not found, it returns -1.
console.log(str.indexOf("World")); // Output: 7
console.log(str.indexOf("JavaScript")); // Output: -1

//slice() method extracts a section of a string and returns it as a new string. It takes two parameters: the starting index and the ending index (not inclusive).
console.log(str.slice(0, 5)); // Output: Hello
console.log(str.slice(7)); // Output: World!

//replace() method replaces a specified value with another value in a string. It takes two parameters: the value to be replaced and the new value.
let str2 = "Hello, World!";
console.log(str2.replace("World", "JavaScript")); // Output: Hello, JavaScript!

//split() method splits a string into an array of substrings based on a specified separator. It takes one parameter: the separator.
let str3 = "Hello, World!";
console.log(str3.split(", ")); // Output: [ 'Hello', 'World!' ] 

//charAt() method returns the character at a specified index in a string. It takes one parameter: the index.
console.log(str.charAt(0)); // Output: H
console.log(str.charAt(7)); // Output: W

//includes() method checks if a string contains a specified value. It returns true if the value is found, and false otherwise.
console.log(str.includes("World")); // Output: true
console.log(str.includes("JavaScript")); // Output: false   

//concat() method concatenates two or more strings and returns a new string. It takes one or more parameters: the strings to be concatenated.
let str4 = "Hello";
let str5 = "World";
let res = str4.concat(str5);
console.log(res); // Output: Hello, World!
//let res1 = str4.concat(" ", str5);
//let res2 = str4 + str5;

//repeat() method returns a new string that repeats the original string a specified number of times. It takes one parameter: the number of times to repeat the string.
let str6 = "Hello! ";
console.log(str6.repeat(3)); // Output: Hello! Hello! Hello!