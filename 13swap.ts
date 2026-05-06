let a:number=5;
let b:number=4;

console.log(`before swapping: ${a}and ${b}`);
a=a+b;
b=a-b;
a=a-b;

console.log(`swapped: ${a}and ${b}`);

