let plantCount = 2;
    

// Frontend function to process and display data
async function fetchData() { 
    try {
        const response = await fetch("/data");
        const data = await response.json();

        // Update dashboard for existing plants
        document.getElementById("soil-moisture-1").textContent = data.moisture1 || "N/A";
                document.getElementById("ph-level-1").textContent = data.ph1 || "N/A";
                document.getElementById("temperature-1").textContent = data.temperature || "N/A";
                document.getElementById("humidity-1").textContent = data.humidity || "N/A";

                // Update Plant 2 data
                document.getElementById("soil-moisture-2").textContent = data.moisture2 || "N/A";
                document.getElementById("ph-level-2").textContent = data.ph2 || "N/A";
                document.getElementById("temperature-2").textContent = data.temperature || "N/A";
                document.getElementById("humidity-2").textContent = data.humidity || "N/A";
                
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}


function togglePump(plantId) {
    var pumpStatus = document.getElementById("pump-status-" + plantId);
    var pumpToggle = document.getElementById("pump-toggle-" + plantId);

    if (pumpToggle.checked) {
        pumpStatus.innerText = "Pump: On";
    } else {
        pumpStatus.innerText = "Pump: Off";
    }
}

function addPlant() {
    plantCount++;
    const plantContainer = document.getElementById('plant-container');

    // Create new plant card
    const newPlantCard = document.createElement('div');
    newPlantCard.classList.add('plant-card');
    newPlantCard.id = 'plant-' + plantCount;
    newPlantCard.innerHTML = `
        <img src="https://img.freepik.com/premium-photo/sprout-vector-3d-illustration_917213-125641.jpg?w=740" alt="Plant Icon">
        <h2 class="plant-title">Plant ${plantCount}</h2>
        <p class="reading"><img src="https://static.vecteezy.com/system/resources/previews/002/227/118/non_2x/soil-moisture-monitoring-rgb-color-icon-vector.jpg" alt="Soil Moisture">Soil Moisture: <span id="soil-moisture-${plantCount}">N/A</span></p>
        <p class="reading"><img src="https://png.pngtree.com/png-clipart/20190906/original/pngtree-temperature-drop-png-image_4583457.jpg" alt="Temperature">Temperature: <span id="temperature-${plantCount}">N/A</span></p>
        <p class="reading"><img src="https://i.pinimg.com/1200x/d1/da/0c/d1da0ca0ceb9057e0c7e720079190e19.jpg" alt="Humidity">Humidity: <span id="humidity-${plantCount}">N/A</span></p>
        <p class="reading"><img src="https://cdn-icons-png.freepik.com/256/16644/16644183.png?semt=ais_hybrid" alt="pH">pH Level: <span id="ph-level-${plantCount}">N/A</span></p>
        <p class="plant-health na" id="plant-health-${plantCount}">Plant Health: N/A</p>
        <p class="pump-status" id="pump-status-${plantCount}">Pump: Off</p>
        <label class="switch">
            <input type="checkbox" id="pump-toggle-${plantCount}" onclick="togglePump(${plantCount})">
            <span class="slider"></span>
        </label></br>
        <button class="remove-btn" onclick="removePlant(${plantCount})">Remove</button>
    `;

    // Append new plant card to container
    plantContainer.appendChild(newPlantCard);
}

function removePlant(plantId) {
    const plantCard = document.getElementById('plant-' + plantId);
    if (plantCard) {
        plantCard.remove();
    }
}

// Fetch data every second
setInterval(fetchData, 1000);