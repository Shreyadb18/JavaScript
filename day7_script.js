//Template literals
//Template literals are a way to create strings in JavaScript that allow for embedded expressions and multi-line strings. They are enclosed in backticks (` `) instead of single or double quotes.

let specialString = `This is a template literal.`;
console.log(specialString); // Output: This is a template literal.
console.log(typeof specialString); // Output: string

//Template literals with expressions
//sring text ${expression} is used to embed expressions within template literals. The expression can be any valid JavaScript expression, including variables, function calls, or mathematical operations.

let obj = {
  name: "Shreya",
  age: 25,
  city: "New York"
};

let output = `The person's name is ${obj.name}, age is ${obj.age}, and city is ${obj.city}.`;
console.log(output); // Output: The person's name is Shreya, age is 25, and city is New York.

let specialString1 = `The sum of 5 and 10 is ${5 + 10}.`;
console.log(specialString1); // Output: The sum of 5 and 10 is 15.  

//string length

let str = "Hello\tWorld!";
console.log(str.length); // Output: 12 (the tab character counts as one character)