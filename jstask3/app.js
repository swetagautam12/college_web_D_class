// Function using if-else
function checkIfElse() {
    let age = prompt("Enter your age:");

    if (age >= 18) {
        document.getElementById("result").innerText = "✔ You are eligible (If-Else).";
    } else {
        document.getElementById("result").innerText = "✘ You are NOT eligible (If-Else).";
    }
}

// Function using ternary operator
function checkTernary() {
    let age = prompt("Enter your age:");

    let message = (age >= 18)
        ? "✔ You are eligible (Ternary)."
        : "✘ You are NOT eligible (Ternary).";

    document.getElementById("result").innerText = message;
}
