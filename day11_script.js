function myFunction() {
    console.log("Welcome to my function!");
    console.log("This function demonstrates array methods in JavaScript.");
}

myFunction();
myFunction();

function mySecondFunction(msg, n) {
    //parameter -> input
    console.log(msg * n);
}
mySecondFunction("Hello, world!", 2);

//Function ->2 numbers,sum

function sum(a, b) {
   s = a + b;
   console.log("before return");
    return s;
}

let result = sum(5, 10);
console.log(result);

//multiplication function
function multiply(a, b) {
    return a * b;
}

let product = multiply(4, 5);
console.log(product);

//function with no return value
function greet(name) {
    console.log("Hello, " + name + "!");
}

greet("Alice");

//Arrow function
//addition function 
const arrowSum = (a, b) => {
    return a + b;
};
console.log(arrowSum(5, 10));

//Multiplication arrow function
const arrowMultiply = (a, b) => {
    return a * b;
};
console.log(arrowMultiply(4, 5));