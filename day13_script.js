//map

let arr = [1, 2, 3, 4, 5];

let newArr = arr.map((val) => {
    return val * val;
});

console.log(newArr);

let calcSquare = (num) => {
    return num * num;
};

//filter

let arr1 = [1, 2, 3, 4, 5];

let newArr1 = arr1.filter((val) => {
    return val % 2 === 0;
});

console.log(newArr1);

let isEven = (num) => {
    return num % 2 === 0;
};

//reduce

let arr2 = [1, 2, 3, 4, 5];

let sum = arr2.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log(sum);

let sumFunc = (accumulator, currentValue) => {
    return accumulator + currentValue;
};

let arr3 = [1, 2, 3, 4, 5];

const output = arr3.reduce((prev,curr) => {
    return prev > curr ? prev : curr;
})
console.log(output);