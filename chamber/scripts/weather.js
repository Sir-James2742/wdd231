
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const forecastContainer = document.querySelector('#forecast');

const currentUrl = `https://api.openweathermap.org/data/2.5/weather?lat=-1.277&lon=36.824&units=metric&appid=85d5d482eff63b4d8da1af20aa8a19f8`;

const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=-1.277&lon=36.824&units=metric&appid=85d5d482eff63b4d8da1af20aa8a19f8`;

async function apiFetch() {
    try {
        const currentResponse = await fetch(currentUrl);
        const forecastResponse = await fetch(forecastUrl);

        if (currentResponse.ok && forecastResponse.ok) {
            const currentData = await currentResponse.json();
            const forecastData = await forecastResponse.json();

            displayCurrent(currentData);
            displayForecast(forecastData);

        } else {
            throw Error("Error fetching data");
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayCurrent(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;C`;

    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    const desc = data.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
}

function displayForecast(data) {
    forecastContainer.innerHTML = "";

    const filtered = data.list.filter(item => item.dt_txt.includes("12:00:00"));

    const threeDays = filtered.slice(0, 3);

    threeDays.forEach(day => {
        const div = document.createElement("div");

        const date = new Date(day.dt_txt);
        const dayName = date.toLocaleDateString("en-US", { weekday: "long" });

        div.innerHTML = `
            <h4>${dayName}</h4>
            <p>${day.main.temp}&deg;C</p>
        `;

        forecastContainer.appendChild(div);
    });
}