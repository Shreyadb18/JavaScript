//conditional statements

let age = 18;

if(age >=18) {
    console.log("You are eligible to vote");
}

if(age < 18) {
    console.log("You are not eligible to vote");
}

// let mode = "dark";
// let color;

// if(mode === "dark") {
//     color = "black";
// }

// if(mode === "light") {
//     color = "white";
// }

// console.log(color);


//is-else statement

let mode = "dark";
let color;

if(mode === "dark") {
    color = "Blue";
} else {
    color = "white";
}

console.log(color);

// let age = 18;

// if(age >= 18) {
//     console.log("You are eligible to vote");
// } else {
//     console.log("You are not eligible to vote");
// }

let num = 10;

if(num % 2 === 0) {
    console.log("The number is even");
} else {
    console.log("The number is odd");
}

//else-if statement

let marks = 85;

if(marks >= 90) {
    console.log("Grade A");
} else if(marks >= 80) {
    console.log("Grade B");
} else if(marks >= 70) {
    console.log("Grade C");
} else {
    console.log("Fail");
}

//ternary operator

let age1 = 18;

let result = (age1 >= 18) ? "Adult" : "not Adult";
console.log(result);

//switch statement

let day = 3;

switch(day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}