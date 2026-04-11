const today = new Date();
document.querySelector('#current-year').innerHTML = `${today.getFullYear()}`;
document.getElementById("lastModified").innerHTML = `Last Modification: ${document.lastModified}`;
document.addEventListener("DOMContentLoaded", function () {
    const timestampField = document.getElementById("timestamp");

    if (timestampField) {
        const now = new Date();
        timestampField.value = now.toISOString();
    } else {
        console.log("timestamp field not found");
    }
});
const messageElement = document.getElementById("visit-message");

const lastVisit = localStorage.getItem("lastVisit");

const now = Date.now();

if (!lastVisit) {
  
    messageElement.textContent = "Welcome! Let us know if you have any questions.";
} else {
    
    const timeDiff = now - Number(lastVisit);

    const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    if (daysDiff < 1) {
        messageElement.textContent = "Back so soon! Awesome!";
    } else if (daysDiff === 1) {
        messageElement.textContent = "You last visited 1 day ago.";
    } else {
        messageElement.textContent = `You last visited ${daysDiff} days ago.`;
    }
}


localStorage.setItem("lastVisit", now);