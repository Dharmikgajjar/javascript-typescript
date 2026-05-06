"use strict";
let Totalminutes = 145;
let hours1 = Totalminutes / 60;
let hours = hours1 - (hours1 % 1);
let minutes = Totalminutes - (hours * 60);
console.log(`${Totalminutes} minutes = ${hours} hour and ${minutes} minutes`);
