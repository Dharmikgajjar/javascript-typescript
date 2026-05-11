"use strict";
let n = 121;
let main = n;
let reverse = 0;
while (n > 0) {
    let last = n % 10;
    reverse = (reverse * 10) + last;
    n = (n - last) / 10;
}
if (main == reverse) {
    console.log(`${main}  is a Palindrome`);
}
else {
    console.log(`${main} is Not a palindrome`);
}
