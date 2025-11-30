const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");

// Add task
addBtn.addEventListener("click", () => {
    const taskText = todoInput.value.trim();
    if (taskText === "") return;

    const li = document.createElement("li");

    // Checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", () => {
        li.classList.toggle("completed");
    });

    // Task text
    const span = document.createElement("span");
    span.textContent = taskText;

    // Buttons: Up, Down, Delete
    const buttonsDiv = document.createElement("div");
    buttonsDiv.classList.add("action-buttons");

    const upBtn = document.createElement("button");
    upBtn.textContent = "⬆";
    upBtn.addEventListener("click", () => {
        const prev = li.previousElementSibling;
        if (prev) todoList.insertBefore(li, prev);
    });

    const downBtn = document.createElement("button");
    downBtn.textContent = "⬇";
    downBtn.addEventListener("click", () => {
        const next = li.nextElementSibling;
        if (next) todoList.insertBefore(next, li);
    });

    const delBtn = document.createElement("button");
    delBtn.textContent = "❌";
    delBtn.addEventListener("click", () => {
        li.remove();
    });

    buttonsDiv.append(upBtn, downBtn, delBtn);
    li.append(checkbox, span, buttonsDiv);
    todoList.appendChild(li);

    todoInput.value = "";
});
