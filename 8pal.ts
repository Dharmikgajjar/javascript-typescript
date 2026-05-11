let n: number = 1221;
let main: number = n; 
let rev: number = 0;

while (n > 0) {
  let last: number = n % 10;
  rev = (rev * 10) + last;
  n = (n - last) / 10;
}

if (main == rev) {
  console.log(`${main}  is a Palindrome`);
} else {
  console.log(`${main} is Not a palindrome`);
}