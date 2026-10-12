let marks = [45, 67, 89, 90, 78, 56, 34, 23, 12, 10];
console.log("Marks: ", marks);
console.log(marks.length); //property
console.log(typeof marks); //object
console.log(marks[0]); //accessing first element    
console.log(marks[9]); //accessing last element
console.log(marks[2]= 100); //updating an element

let heroes = ["Superman", "Batman", "Wonder Woman", "Flash", "Aquaman"];
console.log(heroes);
console.log(heroes.length); //property
console.log(typeof heroes); //object
console.log(heroes[0]); //accessing first element
console.log(heroes[4]); //accessing last element
console.log("Index of Flash: ", heroes.indexOf("Flash")); //index of an element

//loops over an array
for (let i = 0; i < marks.length; i++) {
    console.log(marks[i]);
}

for (let i = 0; i < heroes.length; i++) {
    console.log(heroes[i]);
}

for(let hero of heroes) {
    console.log(hero);
}

for(let hero of heroes) {
    console.log(hero.toUpperCase());
}

