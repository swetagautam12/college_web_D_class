// Selecting elements
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Load tasks when page loads
window.onload = loadTasks;

// Add task on button click
addBtn.addEventListener("click", addTask);

// Add task function
function addTask() {
    let task = taskInput.value.trim();

    if (task === "") {
        alert("Please enter a task");
        return;
    }

    createTaskElement(task);
    saveToLocal(task);

    taskInput.value = ""; // clear field
}

// Create LI task element
function createTaskElement(task) {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = task;

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.classList.add("edit");
    editBtn.onclick = function () {
        let newText = prompt("Edit task:", span.textContent);
        if (newText !== null && newText.trim() !== "") {
            updateLocal(span.textContent, newText);
            span.textContent = newText;
        }
    };

    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.classList.add("delete");
    delBtn.onclick = function () {
        li.remove();
        removeFromLocal(task);
    };

    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(delBtn);

    taskList.appendChild(li);
}

// LOCAL STORAGE FUNCTIONS

function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(t => createTaskElement(t));
}

function saveToLocal(task) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function removeFromLocal(task) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.filter(t => t !== task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function updateLocal(oldTask, newTask) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    let index = tasks.indexOf(oldTask);
    if (index !== -1) {
        tasks[index] = newTask;
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
}
