# 🌤️ Weather & AQI App

A simple React application that allows users to search for current weather conditions and air quality index (AQI) for any city using the OpenWeatherMap and AQICN APIs.

## 🚀 Features

* Search for real-time **weather** and **air quality** by city.
* Displays:

  * Temperature
  * Humidity
  * Feels Like temperature
  * General weather description
  * AQI (Air Quality Index)
  * Sunrise and Sunset times
* Quick search buttons for popular cities.
* Error handling for invalid or unknown city names.

## 🛠️ Tech Stack

* React (Vite)
* Tailwind CSS / Flowbite
* OpenWeatherMap API
* AQICN API

---

## 📦 Installation

1. **Clone the repository**

```bash
git clone https://github.com/your-username/weather-aqi-app.git
cd weather-aqi-app
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

Create a `.env` file in the root of the project:

```env
VITE_OWM_API_KEY=your_openweathermap_api_key
VITE_AQICN_API_KEY=your_aqicn_api_key
```

> You can get your API keys from:
>
> * [OpenWeatherMap](https://openweathermap.org/api)
> * [AQICN](https://aqicn.org/data-platform/token/)

4. **Start the development server**

```bash
npm run dev
```

The app should now be running at `http://localhost:5173`.

---

## 📂 Project Structure

```
src/
├── App.jsx
├── components/
│   ├── SearchBar.jsx
│   └── Weather/
│       ├── Weather.jsx
│       └── Weather.css
└── main.jsx
```

---

## 📝 Notes

* If an invalid city is entered, the app shows a message and clears existing data.
* Popular city buttons auto-fill the input for quick access.
* Timezone offsets are handled to show local sunrise/sunset times.

---
