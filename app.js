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
    { name: "Shell", price: 3.45, distance: 1.2 },
    { name: "Chevron", price: 3.29, distance: 2.5 },
    { name: "Barry's Gas Station", price: 2.99, distance: 0.3 },
    { name: "Exxon", price: 3.55, distance: 0.8 },
    { name: "QT", price: 3.40, distance: 1.5 },
    { name: "Mobil", price: 3.60, distance: 2.0 },
    { name: "7-Eleven", price: 3.25, distance: 0.5 },
    { name: "Circle K", price: 3.50, distance: 1.8 },
    { name: "Valero", price: 3.30, distance: 2.2 },
    { name: "Loves", price: 3.70, distance: 1.0 },
    { name: "Sunoco", price: 3.65, distance: 1.7 },
  ];
  
  function renderStations(stations) {
    const list = document.getElementById("station-list");
    list.innerHTML = ""; // Clear previous results
  
    if (stations.length === 0) {
      list.innerHTML = "<li>No gas stations found.</li>";
      return;
    }
  
    stations.forEach((station) => {
      const li = document.createElement("li");
      li.textContent = `${station.name}: $${station.price.toFixed(2)} (${station.distance} miles away)`;
      list.appendChild(li);
    });
  }
  
  // ==== Theme ====
  
  window.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.body.classList.add("dark");
    }
  });
  
  document.getElementById("theme-toggle").addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
  