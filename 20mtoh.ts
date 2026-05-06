let Totalminutes: number = 145; 

let hours1: number = Totalminutes / 60;      
let hours: number = hours1 - (hours1 % 1);
let minutes: number = Totalminutes - (hours * 60); 

console.log(`${Totalminutes} minutes = ${hours} hour and ${minutes} minutes`);