
/*1 = Calculate the sum of numbers in an array*/
function calculateSum(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

let numbers = [1, 2, 3, 4];
console.log("Sum:", calculateSum(numbers));


/*2 =Check if a number is even */

function isEven(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isEven(4));
console.log(isEven(7));
console.log(isEven(0));


/*3 =Functions calling other functions*/

function greet(name) {
  return "Hello, " + name + "!";
}

function personalizedGreeting(names) {
  for (let i = 0; i < names.length; i++) {
    console.log(greet(names[i]));
  }
}

let friends = ["Alice", "Bob", "Charlie"];
personalizedGreeting(friends);


/*4 = Reverse an array without modifying original*/

function reverseArray(arr) {
  let reversed = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }

  return reversed;
}

let originalArray = [10, 20, 30];
console.log(reverseArray(originalArray));
console.log(originalArray);


/* 5 = Modify a matrix using nested loops */

function multiplyMatrix(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      matrix[i][j] *= 2;
    }
  }

  return matrix;
}

let matrix = [
  [1, 2],
  [3, 4]
];

console.log(multiplyMatrix(matrix));