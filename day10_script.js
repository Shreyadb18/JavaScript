//Arrays in JS
//push() - adds an item to the end of the array
let foodItems = ["Pizza", "Burger", "Pasta", "Sandwich", "Salad"];
foodItems.push("Ice Cream");
console.log(foodItems);

//pop() - removes the last item from the array

let deletedItem = foodItems.pop();
console.log(foodItems);
console.log(deletedItem);

//toString() - converts the array to a string

console.log(foodItems.toString());
console.log(foodItems);

//concat() - combines two arrays into one

let marvelMovies = ["Iron Man", "Thor", "Captain America"];
let dcMovies = ["Batman", "Superman"];
let allMovies = marvelMovies.concat(dcMovies);
console.log(allMovies);

//unshift() - adds an item to the beginning of the array
foodItems.unshift("Fries");
console.log(foodItems);

//shift() - removes the first item from the array

let removedItem = foodItems.shift();
console.log(foodItems);
console.log(removedItem);

//splice() - adds or removes items from the array

foodItems.splice(2, 1, "Tacos", "Burritos");
console.log(foodItems);


//slice() - returns a new array with selected items

let selectedItems = foodItems.slice(1, 4);
console.log(selectedItems); 