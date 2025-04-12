

function getLocation() {
    const output = document.getElementById("output");

    if (!navigator.geolocation) {
        output.textContent = "Geolocation not supported by your browser.";
        return;
    }

    output.textContent = "Locating..."

    navigator.geolocation.getCurrentPosition(
        (postition) => {
            const { latitude, longitude } = position.coords;
            output.textContent = 'Your location: (${latitude.toFixed(4)}, ${longitude.toFixed(4)})';

            // TODO: Use these coordinates to fetch gas prices from an API
        },
        (error) => {
            output.textContent = 'Error: ${error.message}';
            switch (error.code) {
                case 1: // PERMISSION_DENIED
                    output.textContent = "User denied the request for Geolocation.";
                    break;
                case 2: // POSITION_UNAVAILABLE
                    output.textContent = "Location information is unavailable.";
                    break;
                case 3: // TIMEOUT
                    output.textContent = "The request to get user location timed out.";
                    break;
                default:
                    output.textContent = "An unexpected error occurred.";
                    break;
            }
        }
    );
}
                        