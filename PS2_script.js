//print all even numbers from 0 to 100

for(let i = 0; i<=100; i++) {
    if(i%2 == 0) {
        console.log(i);
    }
}

//create a game where you start with any random game number.ask the user to keep the game number until the user enters correct value.

let gameNumber = 25;
let userNum = prompt("Guess the game number : ");
while(userNum != gameNumber) {
    userNum = prompt("Wrong guess! Guess the game number : ");
}
console.log("You guessed the correct number!");