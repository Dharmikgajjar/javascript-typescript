"use strict";
let a = 5;
let b = 4;
console.log(`before swapping: ${a}and ${b}`);
a = a + b;
b = a - b;
a = a - b;
console.log(`swapped: ${a}and ${b}`);
