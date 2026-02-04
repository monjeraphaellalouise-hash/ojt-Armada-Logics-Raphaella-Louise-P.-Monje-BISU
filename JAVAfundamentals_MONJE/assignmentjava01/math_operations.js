// Task 1
let item1 = 22;
let item2 = 14;
let item3 = 31;

let totalCost = item1 + item2 + item3;
console.log("Total amount to pay: $" + totalCost);

// Task 2
let num1 = 11;
let num2 = 10;
let num3 = 7;

let average = (num1 + num2 + num3) / 3;
console.log("Computed average value: " + average.toFixed(2));

// Task 3
let number = 22;

if (number % 2 === 0) {
    console.log(number + " is classified as EVEN");
} else {
    console.log(number + " is classified as ODD");
}

// Task 4
let price = 240;
let discount = 15;

let discountAmount = (price * discount) / 100;
let discountedPrice = price - discountAmount;
console.log("Price after discount: $" + discountedPrice);

// Bonus Task
let finalPrice = 170;
let discountPercent = 15;

let originalPrice = finalPrice / (1 - discountPercent / 100);
console.log("Original price before discount: $" + originalPrice.toFixed(2));
