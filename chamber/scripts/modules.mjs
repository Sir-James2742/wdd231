import { places } from "../data/places.mjs";
const container = document.querySelector("#discover-container");

places.forEach(place => {
    const card = document.createElement("section");

    card.innerHTML = `
    <h2>${place.name}</h2>
    <img src="${place.image}" alt="${place.name}"  width="300" height="200"">
    <p>${place.description}</p>
    <p><strong>Address:</strong> ${place.address}</p>
    <button>learn more</button>
    `;

    container.appendChild(card);
});