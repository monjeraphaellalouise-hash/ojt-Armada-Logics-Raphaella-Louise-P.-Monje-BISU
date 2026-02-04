// Task 1: Multiplication Table Generator

console.log("Task 1: Multiplication Table Generator");

let number = 7; 

for (let i = 1; i <= 10; i++) {
    console.log(number + " x " + i + " = " + (number * i));
}

// Task 2: Sum of First N Natural Numbers

console.log("\nTask 2: Sum of First N Natural Numbers");

let n = 10;      
let sum = 0;     
for (let i = 1; i <= n; i++) {
    sum += i;
}

console.log("The sum of the first " + n + " numbers is: " + sum);

// Task 3: Array Elements Printer

console.log("\nTask 3: Array Elements Printer");

let numbers = [3, 6, 9, 12, 15]; 

for (let i = 0; i < numbers.length; i++) {
    console.log("Array Element: " + numbers[i]);
}

// Task 4: Pattern Printer

console.log("\nTask 4: Pattern Printer");

for (let i = 1; i <= 5; i++) {
    let stars = ""; 

    for (let j = 1; j <= i; j++) {
        stars += "*";
    }

    console.log(stars);
}


// Task 5: Reverse Array Elements

console.log("\nTask 5: Reverse Array Elements");

let reverseArray = [2, 4, 6, 8, 10]; 

for (let i = reverseArray.length - 1; i >= 0; i--) {
    console.log("Reversed Element: " + reverseArray[i]);
}
