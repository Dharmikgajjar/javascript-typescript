let n: number = 1234;
let reverse: number = 0;

while (n > 0) {
 
  let last: number = n % 10;

  reverse = (reverse * 10) + last;

  n = (n - last) / 10;
}

console.log(`reverse string is ${reverse}`);