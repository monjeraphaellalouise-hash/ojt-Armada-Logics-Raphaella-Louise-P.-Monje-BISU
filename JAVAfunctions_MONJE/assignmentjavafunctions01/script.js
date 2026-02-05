
// Task 1: Discount Function

function getDiscount(customer_type, purchase_amount) {

    // Input validation for purchase amount
    if (typeof purchase_amount !== "number" || purchase_amount < 0) {
        console.warn("Invalid purchase amount. Treating as 0.");
        purchase_amount = 0;
    }

    // Input validation for customer type
    if (customer_type !== "member" && customer_type !== "non-member") {
        console.warn("Invalid customer type. Treating as non-member.");
        customer_type = "non-member";
    }

    // Discount rules
    if (customer_type === "member" && purchase_amount >= 1000) {
        return 0.20;
    } else if (customer_type === "member" && purchase_amount >= 500) {
        return 0.10;
    } else if (customer_type === "member") {
        return 0.05;
    } else if (customer_type === "non-member" && purchase_amount >= 1000) {
        return 0.10;
    } else if (customer_type === "non-member" && purchase_amount >= 500) {
        return 0.05;
    } else {
        return 0;
    }
}

// Task 2: Final Price Function
function calculateFinalPrice(purchase_amount, discountRate) {

    let discountAmount = purchase_amount * discountRate;
    let finalPrice = purchase_amount - discountAmount;
    let discountPercent = discountRate * 100;

    return {
        finalPrice: finalPrice,
        discountAmount: discountAmount,
        discountPercent: discountPercent
    };
}

// Task 3: Customers Array

const customers = [
    { name: "Alice", customer_type: "non-member", purchase_amount: 100 },
    { name: "Brian", customer_type: "non-member", purchase_amount: 800 },
    { name: "Chloe", customer_type: "non-member", purchase_amount: 1200 }
];


// Task 4: Process Multiple Customers

for (let i = 0; i < customers.length; i++) {

    let customer = customers[i];

    // Get discount rate
    let discountRate = getDiscount(
        customer.customer_type,
        customer.purchase_amount
    );

    // Calculate final price details
    let result = calculateFinalPrice(
        customer.purchase_amount,
        discountRate
    );

    // Display results
    console.log(
        customer.name + " (" + customer.customer_type + ") - " +
        "Original: $" + customer.purchase_amount +
        " → Discount: " + result.discountPercent + "% ($" +
        result.discountAmount + ")" +
        " → Final: $" + result.finalPrice
    );
}