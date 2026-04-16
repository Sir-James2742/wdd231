const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

let trafficData = []; 

searchBtn.addEventListener("click", () => {
    const query = searchInput.value.toLowerCase();

    const filtered = trafficData.filter(item =>
        item.road.toLowerCase().includes(query)
    );

    displayTraffic(filtered);
});
async function fetchTrafficData() {
    try {
        const response = await fetch("data/traffic.json");
        const data = await response.json();

        trafficData = data; 
        displayTraffic(data);

    } catch (error) {
        console.error(error);
    }
}
document.addEventListener("DOMContentLoaded", () => {
    searchBtn.addEventListener("click", () => {
        const query = searchInput.value.toLowerCase();

        const filtered = trafficData.filter(item =>
            item.road.toLowerCase().includes(query)
        );

        displayTraffic(filtered);
    });
});



const currentTemp = document.getElementById("current-temp");
const captionDesc = document.getElementById("caption-desc");

// Nairobi coordinates
const lat = -1.286389;
const lon = 36.817223;

// TomTom Traffic Flow API
const currentUrl = `https://api.tomtom.com/traffic/services/4/flowSegmentData/absolute/10/json?point=${lat},${lon}&key=dLz5GlacoJghjkzE8Uds6qJrtVeQMqKv`;

// Initialize TomTom map
const map = tt.map({
    key: "Uz8nW7BzVdjigLY0J1gfzTB1awj7wk2B",
    container: "map",
    center: [lon, lat],
    zoom: 13
});

// Add traffic flow layer (THIS IS THE MAGIC)
map.on('load', () => {
    map.addLayer({
        id: 'traffic-flow',
        type: 'line',
        source: {
            type: 'vector',
            url: `https://api.tomtom.com/traffic/map/4/tile/flow/relative/0/{z}/{x}/{y}.pbf?key=Uz8nW7BzVdjigLY0J1gfzTB1awj7wk2B`
        },
        'source-layer': 'Traffic flow',
        paint: {
            'line-color': [
                'interpolate',
                ['linear'],
                ['get', 'traffic_level'],
                0, 'green',
                1, 'yellow',
                2, 'red'
            ],
            'line-width': 3
        }
    });
});


// FETCH FUNCTION (your format)
async function apiFetch() {
    try {
        const currentResponse = await fetch(currentUrl);

        if (currentResponse.ok) {
            const currentData = await currentResponse.json();

            displayCurrent(currentData);

        } else {
            throw Error("Error fetching data");
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();


function displayCurrent(data) {

    const flow = data.flowSegmentData;

    const speed = flow.currentSpeed;
    const freeFlow = flow.freeFlowSpeed;

    let severity = "";

    // Compare current speed vs free flow speed
    if (speed < freeFlow * 0.4) {
        severity = "Heavy Traffic 🔴";
    } else if (speed < freeFlow * 0.7) {
        severity = "Moderate Traffic 🟡";
    } else {
        severity = "Clear Traffic 🟢";
    }

    currentTemp.innerHTML = severity;

    captionDesc.textContent = `Speed: ${speed} km/h (Free flow: ${freeFlow} km/h)`;

  
    new tt.Marker()
        .setLngLat([lon, lat])
        .addTo(map);
}