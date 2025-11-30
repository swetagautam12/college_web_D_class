const chessboard = document.getElementById("chessboard");

const size = 8; // Chessboard 8x8
const letters = ["A","B","C","D","E","F","G","H"];

for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
        const square = document.createElement("div");
        square.classList.add("square");

        // Dynamic coloring
        if ((row + col) % 2 === 0) {
            square.style.backgroundColor = "#f0d9b5"; // Light square
        } else {
            square.style.backgroundColor = "#b58863"; // Dark square
        }

        // Optional: Add chess notation
        square.dataset.position = `${letters[col]}${size - row}`;

        // Click event example
        square.addEventListener("click", () => {
            alert(`You clicked on ${square.dataset.position}`);
        });

        chessboard.appendChild(square);
    }
}
