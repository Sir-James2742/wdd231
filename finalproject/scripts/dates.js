const today = new Date();
document.querySelector('#current-year').innerHTML = `${today.getFullYear()}`;
document.getElementById("lastModified").innerHTML = `Last Modification: ${document.lastModified}`;
