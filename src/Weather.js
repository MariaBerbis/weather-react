import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

import WeatherSearch from "./WeatherSearch";
import Footer from "./Footer";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.city,
      temperature: response.data.temperature.current,
      date: response.data.time * 1000,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      icon: response.data.condition.icon_url,
      description: response.data.condition.description,
    });
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="container">
          <header>
            <WeatherSearch />
          </header>
          <main className="main-container">
            <div className="weather-app-data">
              <div>
                <h1 className="weather-app-city">{weatherData.city}</h1>
                <div>
                  <img src={weatherData.icon} alt={weatherData.description} />
                </div>
              </div>
              <div className="weather-app-temperature-container">
                <div className="weather-app-temperature">
                  {Math.round(weatherData.temperature)}
                </div>
                <div className="weather-app-unit">
                  <a href="/">°C</a> | <a href="/">°F</a>
                </div>
              </div>
            </div>
            <p className="weather-app-details">
              <span>{weatherData.date},</span>{" "}
              <span className="text-capitalize">
                {" "}
                {weatherData.description}
              </span>
              <br />
              Humidity: <strong>{Math.round(weatherData.humidity)}%</strong>,
              Wind:
              <strong>{weatherData.wind} km/s</strong>
            </p>
          </main>
          <Footer />
        </div>
      </div>
    );
  } else {
    const ApiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=5399eea49f9baa9t4a0de908084b4of2&units=metric`;
    axios.get(ApiUrl).then(handleResponse);

    return "Loading...";
  }
}
