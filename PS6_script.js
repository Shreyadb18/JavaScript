//1
function countVowels(str) {
    for (const char of str) {
        console.log(char);
 }
}

function countVowels(str) {
    let count = 0;
    for (const char of str) {
        if ("aeiouAEIOU".includes(char)) {
            count++;
        }
    }
    return count;
}

let vowelCount = countVowels("Hello, world!");
console.log("Number of vowels:", vowelCount);

//2

const countVowelsArrow = (str) => {
    let count = 0;
    for (const char of str) {
        if ("aeiouAEIOU".includes(char)) {
            count++;
        }
    }
    return count;   
}