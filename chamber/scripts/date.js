const today = new Date();
document.querySelector('#current-year').innerHTML = `${today.getFullYear()}`;
document.getElementById("lastModified").innerHTML = `Last Modification: ${document.lastModified}`;
document.addEventListener("DOMContentLoaded", function () {
    const timestampField = document.getElementById("timestamp");

    const now = new Date();

    timestampField.value = now.toISOString();
});