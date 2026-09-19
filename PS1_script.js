//practise set 1

let number = prompt("Enter your number: ");

if (number % 5== 0) {
    alert("The number is divisible by 5.");
} else {
    alert("The number is not divisible by 5.");
}

//2nd question

let marks = prompt("Enter your marks: ");
let grade;

if (marks >= 90 && marks <= 100) {
    console.log("A");
}else if (marks >= 80 && marks < 90) {
    console.log("B");
}else if (marks >= 70 && marks < 80) {
    console.log("C");
}else if (marks >= 60 && marks < 70) {
    console.log("D");
}else if (marks >= 50 && marks < 60) {
    console.log("E");
}else if (marks >= 0 && marks < 50) {
    console.log("F");
}else{
    console.log("Invalid marks.");
}
