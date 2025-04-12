function assertEqual(actual, expected, message) {
    if (actual !== expected) {
      console.error(`❌ ${message} → Expected: ${expected}, Got: ${actual}`);
    } else {
      console.log(`✅ ${message}`);
    }
  }
  
  function mockGeolocation(success, errorCode) {
    navigator.geolocation.getCurrentPosition = (successCallback, errorCallback) => {
      if (errorCode !== undefined) {
        errorCallback({ code: errorCode, message: "Mock error" });
      } else {
        successCallback({
          coords: {
            latitude: 33.4484,
            longitude: -112.0740
          }
        });
      }
    };
  }
  
  // === TEST CASES ===
  
  function test_user_denied_geolocation() {
    mockGeolocation(null, 1); // 1 = PERMISSION_DENIED
  
    let output = document.createElement("p");
    output.id = "output";
    document.body.appendChild(output);
  
    getLocation();
  
    setTimeout(() => {
      assertEqual(output.textContent, "User denied the request for Geolocation.", "Should handle permission denial");
      document.body.removeChild(output);
    }, 100); // Let async callbacks finish
  }
  
  function test_successful_geolocation() {
    mockGeolocation(); // No error
  
    let output = document.createElement("p");
    output.id = "output";
    document.body.appendChild(output);
  
    getLocation();
  
    setTimeout(() => {
      const text = output.textContent;
      const match = text.match(/Your location: \(\d+\.\d{4}, -\d+\.\d{4}\)/);
      assertEqual(Boolean(match), true, "Should show coordinates on success");
      document.body.removeChild(output);
    }, 100);
  }

  function test_position_unavailable() {
    mockGeolocation(null, 2); // 2 = POSITION_UNAVAILABLE
  
    let output = document.createElement("p");
    output.id = "output";
    document.body.appendChild(output);
  
    getLocation();
  
    setTimeout(() => {
      assertEqual(output.textContent, "Location information is unavailable.", "Should handle position unavailable error");
      document.body.removeChild(output);
    }, 100);
  }

  function test_timeout_error() {
    mockGeolocation(null, 3); // 3 = TIMEOUT
  
    let output = document.createElement("p");
    output.id = "output";
    document.body.appendChild(output);
  
    getLocation();
  
    setTimeout(() => {
      assertEqual(output.textContent, "The request to get user location timed out.", "Should handle timeout error");
      document.body.removeChild(output);
    }, 100);
  }
  
  function test_station_list_rendering() {
    mockGeolocation(); // Simulate success
  
    const output = document.createElement("p");
    output.id = "output";
    document.body.appendChild(output);
  
    const list = document.createElement("ul");
    list.id = "station-list";
    document.body.appendChild(list);
  
    getLocation();
  
    setTimeout(() => {
      const items = document.querySelectorAll("#station-list li");
      const passed = items.length === mockGasStations.length;
      assertEqual(passed, true, "Should render all mock gas stations");
  
      document.body.removeChild(output);
      document.body.removeChild(list);
    }, 100);
  }
  
  
  