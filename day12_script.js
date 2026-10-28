let arr = [1,2,3,4,5];

arr.forEach((val) => {
    console.log(val);
});

let arr1= ["pune", "mumbai", "delhi", "bangalore"];

arr1.forEach((val) => {
    console.log(val.toUpperCase());
});

let arr2 = ["python", "java", "c++", "javascript"];

arr2.forEach((val, idx) => {
    console.log(val.toUpperCase(), idx);
});

let arr3 = ["apple", "banana", "cherry", "date"];
arr3.forEach((val, idx, arr) => {
    console.log(val.toUpperCase(), idx, arr);
});