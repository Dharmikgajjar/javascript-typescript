let amount: number = 4000;
let discount: number = 0;

if (amount >= 5000) {
    discount = amount * 0.15;
} else if (amount < 5000) {
    discount = amount * 0.05;
}

let t = amount - discount;
console.log(`Total amount and discount is  :${amount} , - discount  ${discount}  = Total amount ${t

}`);