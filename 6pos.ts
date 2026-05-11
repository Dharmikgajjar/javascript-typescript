let pos:number = 0;
let neg:number = 0;
let zero:number = 0;

for (let i = -10; i <= 10; i++) {
  if (i > 0) {
    pos = pos+1;
  } else if (i < 0) {
    neg = neg+1;
  } else {
    zero = zero+1;
  }
}

console.log(`Positive: ${pos}`);
console.log(`Negative: ${neg}`);
console.log(`Zero: ${zero}`);