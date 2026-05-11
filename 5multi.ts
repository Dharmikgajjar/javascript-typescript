let n = 5;

if (n < 0) {
  console.log("Invalid Input.");
} else {
  for (let i = 1; i <= 10; i++) {
    console.log(`table of ${n} x ${i} : ${n * i}`);
  }
}