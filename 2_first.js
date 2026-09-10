// This is a simple comment in JavaScript
/* This is a multi-line comment in JavaScript.*/
console.log("Hello, World!"); // This will print "Hello, World!" to the console

//Arithmetic Operators
let a = 10;
let b = 5;

console.log("a =", a ,"& b =", b);

console.log("a + b =",a+b);
console.log("a - b =",a-b);
console.log("a * b =",a*b);
console.log("a / b =",a/b);
console.log("a % b =",a%b);
console.log("a ** b =",a**b); // Exponentiation

//unary Operators
let c = 10;
console.log("c =",c);
console.log("++c =",++c);// Pre-increment
console.log("c =",c); 
console.log("c++ =",c++); // Post-increment
console.log("c =",c);
console.log("--c =",--c); // Pre-decrement
console.log("c =",c);
console.log("c-- =",c--); // Post-decrement
console.log("c =",c);

//Assignment Operators
let d = 10;
console.log("d =",d);
d += 5; // d = d + 5
console.log("d += 5",d);
d -= 3; // d = d - 3
console.log("d -= 3",d);
d *= 2; // d = d * 2
console.log("d *= 2",d);
d /= 4; // d = d / 4
console.log("d /= 4",d);
d %= 3; // d = d % 3
console.log("d %= 3",d);
d **= 2; // d = d ** 2
console.log("d **= 2",d);

//Comparison Operators
let e = 10;
let f = 5;

console.log("e =", e ,"& f =", f);

console.log("e == f", e == f); // Equal to
console.log("e != f", e != f); // Not equal to
console.log("e === f", e === f); // Strict equal to
console.log("e !== f", e !== f); // Strict not equal to

//Logical Operators
let g = true;
let h = false;

console.log("g =", g ,"& h =", h);

console.log("g && h", g && h); // Logical AND
console.log("g || h", g || h); // Logical OR
console.log("!g", !g); // Logical NOT

let i = 10;
let j = 5;

let cond1 = a == b; // false
let cond2 = a > b; // true

console.log("cond1 =", cond1 ,"& cond2 =", cond2);

console.log("cond1 && cond2", cond1 && cond2); // Logical AND
console.log("cond1 || cond2", cond1 || cond2); // Logical OR
console.log("!cond1", !cond1); // Logical NOT