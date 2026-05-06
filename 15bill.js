"use strict";
let units = 120;
let bill = 0;
if (units >= 100) {
    bill = units * 8;
}
else if (units < 100) {
    bill = units * 5;
}
console.log(`units and bill amount is :${units} , ${bill}`);
