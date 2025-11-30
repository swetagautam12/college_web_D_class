function print(message) {
    document.getElementById("output").textContent = message;
}

/* ---------------------------
   1. MAP — Square Each Number
----------------------------*/
function taskMap() {
    let nums = [1, 2, 3, 4, 5];

    let squares = nums.map(n => n * 2); 

    print("Original: " + nums + "\nMapped (×2): " + squares);
}

/* -------------------------------------
   2. FILTER — Get Even Numbers Only
--------------------------------------*/
function taskFilter() {
    let nums = [10, 15, 20, 25, 30];

    let evens = nums.filter(n => n % 2 === 0);

    print("Original: " + nums + "\nFiltered (Even): " + evens);
}

/* ----------------------------------------
   3. REDUCE — Sum of All Numbers
-----------------------------------------*/
function taskReduce() {
    let nums = [2, 4, 6, 8];

    let sum = nums.reduce((acc, curr) => acc + curr, 0);

    print("Numbers: " + nums + "\nSum (Reduce): " + sum);
}

/* -----------------------------------------
   4. forEach — Print Each Item on New Line
------------------------------------------*/
function taskForEach() {
    let fruits = ["Apple", "Banana", "Mango", "Orange"];

    let result = "Fruits:\n";
    fruits.forEach((fruit, i) => {
        result += `${i + 1}. ${fruit}\n`;
    });

    print(result);
}
