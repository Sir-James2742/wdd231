
import { alerts } from "../Data/alertdata.mjs";
const alertList = document.getElementById("alerts-list");
const dialog = document.getElementById("alertDialog");


function displayAlerts(data) {
    alertList.innerHTML = "";

    data.forEach(alert => {
        const li = document.createElement("li");
        li.classList.add(alert.severity);

        li.innerHTML = `
      <strong>${alert.type}</strong> - ${alert.location} <br>
      ⏰ ${alert.time}
    `;

        // Click → open dialog
        li.addEventListener("click", () => openDialog(alert));

        alertList.appendChild(li);
    });
}

// Filter function
function filterAlerts(type) {
    if (type === "all") {
        displayAlerts(alerts);
    } else {
        const filtered = alerts.filter(a => a.type === type);
        displayAlerts(filtered);
    }
}

// Open dialog
function openDialog(alert) {
    document.getElementById("dialog-title").textContent = alert.type;
    document.getElementById("dialog-location").textContent = "📍 " + alert.location;
    document.getElementById("dialog-time").textContent = "⏰ " + alert.time;
    document.getElementById("dialog-desc").textContent = alert.description;

    dialog.showModal(); 
}

// Close dialog
function closeDialog() {
    dialog.close();
}

// Load alerts
displayAlerts(alerts);