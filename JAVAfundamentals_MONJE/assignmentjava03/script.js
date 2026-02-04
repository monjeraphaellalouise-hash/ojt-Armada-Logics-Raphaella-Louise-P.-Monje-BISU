// TASK 1
let score = 92;

if (score >= 90) {
  console.log("Grade A");
} else if (score >= 80) {
  console.log("Grade B");
} else if (score >= 70) {
  console.log("Grade C");
} else if (score >= 60) {
  console.log("Grade D");
} else {
  console.log("Grade F");
}

// TASK 2
let temperature = 8;

if (temperature < 0) {
  console.log("It's freezing outside! Bundle up!");
} else if (temperature >= 0 && temperature <= 15) {
  console.log("It's cold outside. Wear a jacket.");
} else if (temperature >= 16 && temperature <= 30) {
  console.log("The weather is nice. Enjoy your day!");
} else {
  console.log("It's hot outside. Stay hydrated!");
}

// TASK 3
let age = 22; 

if (age < 13) {
  console.log("You are too young for this activity.");
} else if (age >= 13 && age <= 17) {
  console.log("You need parental permission.");
} else {
  console.log("You are eligible for this activity.");
}

// TASK 4
let ticketAge = 22; 
let isMember = false;

if (ticketAge < 12) {
  console.log("Ticket is free");
} else if (ticketAge >= 12 && isMember === true) {
  console.log("Ticket costs $10");
} else {
  console.log("Ticket costs $15");
}

// TASK 5
function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

// Tests
console.log(isLeapYear(2016));
console.log(isLeapYear(2100));
console.log(isLeapYear(2024));
console.log(isLeapYear(2025));
