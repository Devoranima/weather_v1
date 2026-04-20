# Weather App

A pet project — a simple weather dashboard built with React.

## What it does

- Detects your location via browser geolocation on load
- Shows current temperature, weather condition, and location
- 3-day forecast with day selection
- Hourly temperature chart (Chart.js) for the selected day
- Auto-refresh ticker (updates label every minute)

## Stack

- React 18
- [WeatherAPI.com](https://www.weatherapi.com/) — forecast data
- Chart.js + react-chartjs-2
- Semantic UI React — loader/dimmer
- Axios

## Running locally

You need a free API key from [weatherapi.com](https://www.weatherapi.com/).

```bash
# 1. Clone and install
npm install

# 2. Create .env in the project root
echo "REACT_APP_WEATHER_API_KEY=your_key_here" > .env

# 3. Start
npm start
```
