const url = "data/members.json";
const container = document.querySelector("#members");

async function getCompanies() {
    const response = await fetch(url);
    const data = await response.json();
    displayCompanies(data);
}

getCompanies();
function displayCompanies(companies) {
    container.innerHTML = ""; 
    companies.forEach(company => {
        const card = document.createElement("section");

        card.innerHTML = `
      <h3>${company.name}</h3>
      <img src="${company.image}" alt="${company.name}">
      <p>${company.address}</p>
      <p>${company.phone}</p>
      <a href="${company.website}" target="_blank">Visit Website</a>
    
    `;

        container.appendChild(card);
    });
}
const gridBtn = document.querySelector("#gridBtn");
const listBtn = document.querySelector("#listBtn");

gridBtn.addEventListener("click", () => {
    container.classList.add("grid");
    container.classList.remove("list");
});

listBtn.addEventListener("click", () => {
    container.classList.add("list");
    container.classList.remove("grid");
});