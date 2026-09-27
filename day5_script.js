//while loop

let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}

let j = 1;
while (j <= 5) {
    console.log("Shreya");
    j++;
}

//do-while loop

let k = 1;
do {
    console.log(k);
    k++;
} while (k <= 5);

let l = 1;
do {
    console.log("Shreya");
    l++;
} while (l <= 5);

//for-of loop

let str = "Shreya";

let size = 0;
for(let i of str) {
    console.log("i = " + i);
    size++;
}
console.log("Size of string: " + size);

let arr = [1, 2, 3, 4, 5];

for(let i of arr) {
    console.log(i);
}



//for-in loop

let obj = {
    name: "Shreya",
    age: 20,
    city: "New York"
};

for(let key in obj) {
    console.log(key + ": " + obj[key]);
}

let student = {
    name: "Shreya",
    age: 20,
    city: "New York"
};

for(let key in student) {
    console.log(key + ": " + student[key]);
}