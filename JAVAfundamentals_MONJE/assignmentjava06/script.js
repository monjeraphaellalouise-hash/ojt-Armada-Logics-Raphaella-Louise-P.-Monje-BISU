// Task 1: Setup Variables

let customer_type = "non-member";
let purchase_amount = 1000;

console.log("Task 1: Setup Variables");
console.log("Customer Type:", customer_type);
console.log("Purchase Amount: $" + purchase_amount);

// Task 2: Apply Discount Rules

let discount = 0;

if (customer_type === "member" && purchase_amount >= 1000) {
    discount = 0.20;
    console.log("\nTask 2: Apply Discount Rules");
    console.log("Rule Applied: Member spending 1000 or more");
} else if (customer_type === "member" && purchase_amount >= 500 && purchase_amount <= 999) {
    discount = 0.10;
    console.log("\nTask 2: Apply Discount Rules");
    console.log("Rule Applied: Member spending 500 to 999");
} else if (customer_type === "member" && purchase_amount < 500) {
    discount = 0.05;
    console.log("\nTask 2: Apply Discount Rules");
    console.log("Rule Applied: Member spending below 500");
} else if (customer_type === "non-member" && purchase_amount >= 1000) {
    discount = 0.10;
    console.log("\nTask 2: Apply Discount Rules");
    console.log("Rule Applied: Non-member spending 1000 or more");
} else if (customer_type === "non-member" && purchase_amount >= 500 && purchase_amount <= 999) {
    discount = 0.05;
    console.log("\nTask 2: Apply Discount Rules");
    console.log("Rule Applied: Non-member spending 500 to 999");
} else {
    discount = 0;
    console.log("\nTask 2: Apply Discount Rules");
    console.log("Rule Applied: No discount");
}

// Task 3: Display Final Results

let final_price = purchase_amount - (purchase_amount * discount);

console.log("\nTask 3: Display Final Results");
console.log("Customer Type:", customer_type);
console.log("Original Price: $" + purchase_amount);
console.log("Discount Applied: " + (discount * 100) + "%");
console.log("Final Price After Discount: $" + final_price);
