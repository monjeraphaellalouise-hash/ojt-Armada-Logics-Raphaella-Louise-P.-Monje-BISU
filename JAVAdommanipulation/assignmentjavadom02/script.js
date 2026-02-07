const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const notificationContainer = document.getElementById("notificationContainer");

// Displays a message and removes it after 5 seconds
function showNotification(message) {
    const note = document.createElement("div");
    note.className = "notification";
    note.innerText = message;

    notificationContainer.appendChild(note);

    setTimeout(() => {
        if (notificationContainer.contains(note)) {
            notificationContainer.removeChild(note);
        }
    }, 5000);
}

// Creates a task with checkbox, text, remove button
function addTask(text) {
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const span = document.createElement("span");
    span.className = "task-text";
    span.innerText = text;

    checkbox.addEventListener("change", () => {
        span.classList.toggle("completed");
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.innerText = "Remove";

    deleteBtn.addEventListener("click", () => {
        taskList.removeChild(li);
        showNotification("Task removed: " + text);
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    showNotification("Task added: " + text);
}

// Add button click and Enter key
taskForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const text = taskInput.value.trim();
    if (text === "") return;

    addTask(text);
    taskInput.value = "";
});