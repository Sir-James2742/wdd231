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
      <p> Email: ${company.address}</p>
      <p>Phone: ${company.phone}</p>
      <a href="${company.website}" target="_blank">Visit Website</a>
      <p>Membership: ${company.membership}</p>
    
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