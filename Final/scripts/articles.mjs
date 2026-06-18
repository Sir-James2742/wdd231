import { events } from "../Data/events.mjs";

const container = document.querySelector(".events");

events.forEach(item => {
    const card = document.createElement("div");
    card.classList.add("event-card");

    if (item.type === "event") {
        card.innerHTML = `
            <h3>📅 ${item.title}</h3>
            <p><strong>Date:</strong> ${item.date}</p>
            <p>${item.description}</p>
        `;
    } else {
        card.innerHTML = `
            <h3>📖 ${item.title}</h3>
            <p><strong>Author:</strong> ${item.author}</p>
            <p>${item.description}</p>
        `;
    }

    container.appendChild(card);
});