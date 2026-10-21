let marks = [85, 76, 90, 88, 67];

let sum = 0;
for(let mark of marks) {
    sum += mark;
}

let avg = sum / marks.length;
console.log(`avg marks of the class = ${avg}`);

let items = [250, 300, 900, , , 450, 600];

let i = 0;

for (let val of items) {
    console.log(`Value at index ${i} = ${val}`);

    if (val !== undefined) {
        let offer = val / 10;
        items[i] = items[i] - offer;

        console.log(`Value after offer = ${items[i]}`);
    }

    i++;
}