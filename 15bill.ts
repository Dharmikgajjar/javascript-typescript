let units:number=120;
let bill:number=0;
if (units >= 100) {
    bill = units * 8 ;
} else if (units < 100) {
    bill = units * 5;
}

console.log(`units and bill amount is :${units} , ${bill}`);
