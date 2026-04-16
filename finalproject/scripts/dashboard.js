// Elements
const currentTemp = document.getElementById("current-temp");
const captionDesc = document.getElementById("caption-desc");

const incidentList = document.getElementById("incident-list");

const heavyCount = document.getElementById("heavy-count");
const moderateCount = document.getElementById("moderate-count");
const clearCount = document.getElementById("clear-count");
const incidentsCount = document.getElementById("incidents-count");

// Nairobi coordinates
const lat = -1.286389;
const lon = 36.817223;

// API URL (TomTom Traffic Flow)
const currentUrl = `https://api.tomtom.com/traffic/services/4/flowSegmentData/absolute/10/json?point=${lat},${lon}&key=Uz8nW7BzVdjigLY0J1gfzTB1awj7wk2B`;

// Initialize map
const map = tt.map({
    key: "Uz8nW7BzVdjigLY0J1gfzTB1awj7wk2B",
    container: "map",
    center: [lon, lat],
    zoom: 13
});

// Add traffic layer
map.on('load', () => {
    map.addLayer({
        id: 'traffic',
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


// YOUR FORMAT
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


// DISPLAY FUNCTION
function displayCurrent(data) {

    const flow = data.flowSegmentData;

    const speed = flow.currentSpeed;
    const freeFlow = flow.freeFlowSpeed;

    let severity = "";
    let color = "";

    if (speed < freeFlow * 0.4) {
        severity = "Heavy Traffic 🔴";
        color = "red";
        heavyCount.textContent = 1;
    } else if (speed < freeFlow * 0.7) {
        severity = "Moderate Traffic 🟡";
        color = "yellow";
        moderateCount.textContent = 1;
    } else {
        severity = "Clear Traffic 🟢";
        color = "green";
        clearCount.textContent = 1;
    }

    currentTemp.innerHTML = severity;
    captionDesc.textContent = `Speed: ${speed} km/h`;

    // Marker
    new tt.Marker({ color: color })
        .setLngLat([lon, lat])
        .addTo(map);

    // Demo incidents
    const incidents = [
        "Accident - Thika Road 🔴",
        "Roadblock - CBD 🟡",
        "Breakdown - Mombasa Rd 🔴"
    ];

    incidentList.innerHTML = "";
    incidents.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        incidentList.appendChild(li);
    });

    incidentsCount.textContent = incidents.length;
}