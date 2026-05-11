"use strict";
let n = 1234;
let reverse = 0;
while (n > 0) {
    let last = n % 10;
    reverse = (reverse * 10) + last;
    n = (n - last) / 10;
}
console.log(`reverse string is ${reverse}`);
