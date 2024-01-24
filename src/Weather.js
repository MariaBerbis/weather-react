import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import Footer from "./Footer";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.city,
      temperature: response.data.temperature.current,
      date: new Date(response.data.time * 1000),
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      icon: response.data.condition.icon_url,
      description: response.data.condition.description,
    });
  }
  function search() {
    const ApiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=5399eea49f9baa9t4a0de908084b4of2&units=metric`;
    axios.get(ApiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="container">
          <header>
            <div className="WeatherSearch">
              <form onSubmit={handleSubmit}>
                <input
                  className="search-form-input"
                  autoFocus="on"
                  type="search"
                  onChange={updateCity}
                />
                <input
                  className="search-form-button"
                  type="submit"
                  value="Type a city"
                />
              </form>
            </div>
          </header>
          <WeatherInfo data={weatherData} />
          <WeatherForecast />
          <Footer />
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
