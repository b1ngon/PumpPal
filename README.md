# PumpPal - Find the Cheapest Gas Near You

[![Live Demo](https://img.shields.io/badge/Live-Demo-blue?style=for-the-badge&logo=github)](https://b1ngon.github.io/PumpPal/)

PumpPal is a lightweight, browser-based web app that detects your location and displays simulated nearby gas station prices. Built for portfolio purposes to demonstrate geolocation, DOM rendering, and GitHub Pages deployment.

---

## Features
- Geoloccation using the browser's API
- Dynamic rendering of gas station listing (mocked data)
- Real-time fuel type filtering (Regular, Midgrade, Premium)
- Error handling (denied permissions, unavailable location, etc.)
- Detects user’s current location
- Light/Dark theme toggle
- Deployed with GitHub Pages
- Displays coordinates
- API-ready codebase for fuel pricing integration

---

## Preview
![PumpPal Screenshot](assets/screenshot-dark.png)

![PumpPal Screenshot](assets/screenshot-light.png)

## Technologies Used 
- HTML5, CSS3, JavaScript
- Git & GitHub
- GitHub Pages for deployment
- Visual Studio Code

---

## Lessons Learned
- Using geolocation in JavaScript
- DOM manipulation best practices
- Deploying static projects with GitHub Pages
- Structuring code for modularity and clarity

---

## Project Structure
- `index.html` – Web UI
- `style.css` – Styling
- `app.js` – Location + logic
- `.gitignore` – Clean version control

---

## How to Run
1. Clone the repo
2. Open `index.html` in a browser
3. Click the "Find My Location" button
4. Select a fuel type from the dropdown

---

## What's New (April 2025)
- Added dropdown menu for selecting fuel types (Regular, Midgrade, Premium)
- Re-render nearby stations based on selected fuel type
- Mock data enhanced with structured price categories

---

## Todo
- Integrate gas pricing API
- Sort stations by distance & price
- Deploy to GitHub Pages or Vercel

---

## Future Plans
- Add sort/filter controls by price, distance
- Responsive mobile-first redesign
- Save user preferences (fuel type) with localStorage

> Built by Barry Ngon (https://github.com/b1ngon)
