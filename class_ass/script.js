const BASE_URL = "https://dummyjson.com/products";
const container = document.getElementById("product-container");
const searchInput = document.getElementById("searchInput");


async function fetchProducts(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();

    container.innerHTML = ""; 
    data.products.forEach(product => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <img src="${product.thumbnail}" alt="${product.title}">
        <h2>${product.title}</h2>
        <p class="price">ruppee${product.price}</p>
        <p class="rating">rating ${product.rating}</p>
      `;
      container.appendChild(card);
    });
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}


let debounceTimer;
searchInput.addEventListener("keyup", (event) => {
  const query = event.target.value.trim();
  clearTimeout(debounceTimer);

  debounceTimer = setTimeout(() => {
    if (query.length > 0) {
      fetchProducts(`${BASE_URL}/search?q=${query}`);
    } else {
      container.innerHTML = ""; 
    }
  }, 400);
});
