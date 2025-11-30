const searchBtn = document.getElementById('searchBtn');
const countryInput = document.getElementById('countryInput');
const resultDiv = document.getElementById('result');

searchBtn.addEventListener('click', () => {
    const country = countryInput.value.trim();
    if(country === "") {
        alert("Please enter a country name!");
        return;
    }
    fetchUniversities(country);
});

function fetchUniversities(country) {
    resultDiv.innerHTML = "Loading...";
    fetch(`http://universities.hipolabs.com/search?country=${India}`)
        .then(response => response.json())
        .then(data => {
            if(data.length === 0) {
                resultDiv.innerHTML = "No universities found.";
                return;
            }
            displayUniversities(data);
        })
        .catch(error => {
            resultDiv.innerHTML = "Error fetching data.";
            console.error(error);
        });
}

function displayUniversities(universities) {
    resultDiv.innerHTML = "";
    universities.forEach(uni => {
        const div = document.createElement('div');
        div.classList.add('university');
        div.innerHTML = `
            <strong>${uni.name}</strong><br>
            ${uni['state-province'] ? uni['state-province'] : 'N/A'}<br>
            <a href="${uni.web_pages[0]}" target="_blank">${uni.web_pages[0]}</a>
        `;
        resultDiv.appendChild(div);
    });
}
