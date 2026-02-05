// Exercise 1: Callback Calculations

function calculate(num1, num2, operation) {
    return operation(num1, num2);
}

function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function subtract(a, b) {
    return a - b;
}

function divide(a, b) {
    return a / b;
}

console.log("Exercise 1 Outputs:");
console.log(calculate(10, 5, add));       // 15
console.log(calculate(10, 5, multiply));  // 50
console.log(calculate(10, 5, subtract));  // 5
console.log(calculate(10, 5, divide));    // 2


// Exercise 2 & 3: Callbacks + setTimeout

function repeatTask(times, callback) {
    for (let i = 0; i < times; i++) {
        if (callback(i) === false) {
            break;
        }
    }
}

function delayedMessage(message, delay, beforeCallback, afterCallback) {
    beforeCallback();

    setTimeout(() => {
        afterCallback(message);

        // Exercise 3 runs AFTER the delay
        console.log("\nExercise 3 Outputs:");

        repeatTask(5, function (index) {
            console.log("Iteration:", index);

            if (index === 2) {
                return false; // stop early
            }
        });

    }, delay);
}

console.log("\nExercise 2 Outputs:");

delayedMessage(
    "Hello, world!",
    2000,
    function () {
        console.log("Message will be displayed after delay...");
    },
    function (msg) {
        console.log(msg);
    }
);