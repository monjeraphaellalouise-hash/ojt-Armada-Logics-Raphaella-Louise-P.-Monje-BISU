// TASK 1: Custom Map Function
// This function applies a callback to each
// element of the array and returns a new array

function customMap(arr, callback) {
    var result = [];

    for (var i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]));
    }

    return result;
}

var numbers = [1, 2, 3];
var doubled = customMap(numbers, function (num) {
    return num * 2;
});

console.log("Task 1 Output:");
console.log(doubled); // [2, 4, 6]

// TASK 2: Filter Function
// This function filters elements based on
// a condition provided by the callback

function filter(arr, callback) {
    var result = [];

    for (var i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            result.push(arr[i]);
        }
    }

    return result;
}

var filteredResult = filter([1, 2, 3, 4, 15], function (val) {
    return val < 10;
});

console.log("Task 2 Output:");
console.log(filteredResult); // [1, 2, 3, 4]

// TASK 3: Some Function
// This function checks if AT LEAST ONE element
// satisfies the condition in the callback

function some(arr, callback) {
    for (var i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            return true;
        }
    }

    return false;
}

var someResult = some([1, 2, 3, 4], function (val) {
    return val > 5;
});

console.log("Task 3 Output:");
console.log(someResult); // false


// TASK 4: Every Function
// This function checks if ALL elements satisfy
// the condition provided by the callback

function every(arr, callback) {
    for (var i = 0; i < arr.length; i++) {
        if (!callback(arr[i])) {
            return false;
        }
    }

    return true;
}

var everyResult = every([1, 2, 3], function (val) {
    return val > 0;
});

console.log("Task 4 Output:");
console.log(everyResult); // true


// TASK 5: Reduce Function
// This function combines all elements into
// a single value using a callback

function reduce(arr, callback) {
    var accumulator = arr[0];

    for (var i = 1; i < arr.length; i++) {
        accumulator = callback(accumulator, arr[i]);
    }

    return accumulator;
}

var sum = reduce([1, 2, 3], function (acc, num) {
    return acc + num;
});

console.log("Task 5 Output:");
console.log(sum); // 6


// TASK 6: Includes Check
// This function checks if an element exists
// in the array using a callback condition

function includes(arr, callback) {
    for (var i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            return true;
        }
    }

    return false;
}

var includesResult = includes([1, 2, 3], function (val) {
    return val === 2;
});

console.log("Task 6 Output:");
console.log(includesResult); // true