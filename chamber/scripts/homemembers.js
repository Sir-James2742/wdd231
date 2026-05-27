const url = "data/members.json";
const container = document.querySelector("#members");

async function getCompanies() {
    const response = await fetch(url);
    const data = await response.json();

    const selected = getRandomBusinesses(data);

    displayCompanies(selected);
}

function getRandomBusinesses(data) {
    const eligible = data.filter(company =>
        company.membership === 1 || company.membership === 2
    );

    const shuffled = eligible.sort(() => 0.5 - Math.random());

    return shuffled.slice(0, 3);
}

function displayCompanies(companies) {
    container.innerHTML = "";

    companies.forEach(company => {
        const card = document.createElement("section");

        card.innerHTML = `
            <h3>${company.name}</h3>
            <img src="${company.image}" alt="${company.name}" width="150" >
            <p>Email: ${company.address}</p>
            <p>Phone: ${company.phone}</p>
            <a href="${company.website}" target="_blank">Visit Website</a>
            <p>Membership level: ${company.membership}</p>
        `;

        container.appendChild(card);
    });
}


getCompanies();