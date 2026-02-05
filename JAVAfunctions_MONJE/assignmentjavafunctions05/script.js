// Task 1: Custom Array Filter
// This function filters an array using a callback.
// The callback decides which elements should be kept.

function customFilter(arr, callback) {
    var result = []; // stores filtered values

    // Loop through each element in the array
    for (var i = 0; i < arr.length; i++) {
        // If callback returns true, keep the element
        if (callback(arr[i])) {
            result.push(arr[i]);
        }
    }

    return result; // return the filtered array
}

// Callback function to check if a number is even
function isEven(num) {
    return num % 2 === 0;
}

var numbers = [1, 2, 3, 4, 5, 6];
var evenNumbers = customFilter(numbers, isEven);

console.log("Task 1 Output:");
console.log(evenNumbers); // Expected: [2, 4, 6]

// Task 2: Countdown Timer
// This function counts down from a starting number
// and uses a callback to display the number every second.

function countdown(start, callback) {
    var current = start;

    // setInterval runs the callback every 1 second
    var interval = setInterval(function () {
        callback(current); // display current number
        current--;

        // Stop the countdown when it reaches below 0
        if (current < 0) {
            clearInterval(interval);
        }
    }, 1000);
}

// Callback function that displays a number
function displayNumber(num) {
    console.log(num);
}

console.log("Task 2 Output:");
countdown(5, displayNumber); // 5 4 3 2 1 0 (with delay)


// Task 3: Simple Event Listener
// This function dynamically creates a button
// and triggers a callback when the button is clicked.

function createButton(buttonText, callback) {
    var button = document.createElement("button"); // create button
    button.textContent = buttonText;               // set button text

    // Attach click event with callback
    button.addEventListener("click", callback);

    // Add button to the webpage
    document.body.appendChild(button);
}

// Callback function for button click
function buttonClicked() {
    console.log("Button Clicked!");
}

console.log("Task 3 Output:");
createButton("Click Me", buttonClicked);


// Task 4: Task Runner
// This function runs multiple tasks one by one
// with a 1-second delay between each task.

function runTasks(tasks) {
    var index = 0;

    // Inner function to run tasks sequentially
    function nextTask() {
        if (index < tasks.length) {
            tasks[index](); // execute current task
            index++;

            // Delay before running the next task
            setTimeout(nextTask, 1000);
        }
    }

    nextTask(); // start running tasks
}

// Individual task functions
function task1() {
    console.log("Task 1 completed");
}

function task2() {
    console.log("Task 2 completed");
}

function task3() {
    console.log("Task 3 completed");
}

console.log("Task 4 Output:");
runTasks([task1, task2, task3]);


// Task 5: Interactive Quiz Game (Extra Miles)
// This function asks a question, gets user input,
// and uses a callback to check if the answer is correct.

function askQuestion(question, choices, correctAnswer, callback) {
    var message = question + "\n";

    // Display choices
    for (var i = 0; i < choices.length; i++) {
        message += choices[i] + "\n";
    }

    // Get user input
    var userAnswer = prompt(message);

    // Check if the answer is correct
    var isCorrect = userAnswer === correctAnswer;

    // Pass result to callback
    callback(isCorrect);
}

// Callback function to handle quiz result
function checkAnswer(isCorrect) {
    if (isCorrect) {
        console.log("Correct!");
    } else {
        console.log("Wrong!");
    }
}

console.log("Task 5 Output:");
askQuestion("What is 2 + 2?", ["1", "2", "3", "4"], "4", checkAnswer);