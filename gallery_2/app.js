// Simulated server data
const serverData = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 28 }
];

// Function that returns a Promise to simulate fetching data
function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulate server delay of 2 seconds
        setTimeout(() => {
            // Randomly simulate success or failure
            const success = true; // set to false to test error handling
            if(success) {
                resolve(serverData);
            } else {
                reject("Error: Unable to fetch data from server!");
            }
        }, 2000);
    });
}

// Get DOM elements
const fetchBtn = document.getElementById("fetchBtn");
const output = document.getElementById("output");

// Event listener for button
fetchBtn.addEventListener("click", async () => {
    output.textContent = "Fetching data from server...";
    try {
        const data = await fetchData(); // Wait for the promise to resolve
        // Display fetched data
        output.innerHTML = "<h3>Fetched Data:</h3>" + 
            data.map(user => `<p>ID: ${user.id}, Name: ${user.name}, Age: ${user.age}</p>`).join('');
    } catch (error) {
        output.textContent = error;
    }
});
