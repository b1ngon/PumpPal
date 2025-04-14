function getLocation() {
    const output = document.getElementById("output");
  
    if (!navigator.geolocation) {
      output.textContent = "Geolocation not supported by your browser.";
      return;
    }
  
    output.textContent = "Locating...";
  
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
  
        // Log coordinates for debugging
        console.log("Latitude:", latitude, "Longitude:", longitude);
  
        output.textContent = `Your location: (${latitude.toFixed(4)}, ${longitude.toFixed(4)})`;
  
        renderStations(mockGasStations); // Could be replaced with future API
      },
      (error) => {
        output.textContent = `Error: ${error.message}`;
        switch (error.code) {
          case 1:
            output.textContent = "User denied the request for Geolocation.";
            break;
          case 2:
            output.textContent = "Location information is unavailable.";
            break;
          case 3:
            output.textContent = "The request to get user location timed out.";
            break;
          default:
            output.textContent = "An unexpected error occurred.";
            break;
        }
      }
    );
  }
  
  const mockGasStations = [
    { name: "Shell", prices: { regular: 3.45, midgrade: 3.75, premium: 3.95 }, distance: 1.2 },
    { name: "Chevron", prices: { regular: 3.29, midgrade: 3.59, premium: 3.79 }, distance: 2.5 },
    { name: "Barry's Gas Station", prices: { regular: 2.99, midgrade: 3.19, premium: 3.39 }, distance: 0.3 },
    { name: "Exxon", prices: { regular: 3.55, midgrade: 3.75, premium: 3.95 }, distance: 0.8 },
    { name: "QT", prices: { regular: 3.40, midgrade: 3.60, premium: 3.80 }, distance: 1.5 },
    { name: "Mobil", prices: { regular: 3.60, midgrade: 3.80, premium: 4.00 }, distance: 2.0 },
    { name: "7-Eleven", prices: { regular: 3.25, midgrade: 3.45, premium: 3.65 }, distance: 0.5 },
    { name: "Circle K", prices: { regular: 3.26, midgrade: 3.46, premium: 3.66 }, distance: 1.8 },
    { name: "Valero", prices: { regular: 3.30, midgrade: 3.50, premium: 3.70 }, distance: 2.2 },
    { name: "Costco", prices: { regular: 3.65, midgrade: 3.85, premium: 4.05 }, distance: 1.7 },
  ];
  
  
  function renderStations(stations) {
    const list = document.getElementById("station-list");
    const fuelType = document.getElementById("fuel-type").value;
    list.innerHTML = "";
  
    if (stations.length === 0) {
      list.innerHTML = "<li>No gas stations found.</li>";
      return;
    }
  
    stations.forEach((station) => {
      const li = document.createElement("li");
      const price = station.prices[fuelType];
      li.textContent = `${station.name}: $${price.toFixed(2)} (${station.distance} miles away)`;
      list.appendChild(li);
    });
  }
  
  
  // ==== Theme ====
  
  window.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.body.classList.add("dark");
    }
  
    const fuelTypeSelect = document.getElementById("fuel-type");
    fuelTypeSelect.addEventListener("change", () => {
      renderStations(mockGasStations);
    });
  });
  
  
  document.getElementById("theme-toggle").addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
  