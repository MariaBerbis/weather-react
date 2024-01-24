import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import Footer from "./Footer";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      icon: response.data.condition.icon,
      wind: response.data.wind.speed,
      city: response.data.city,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "5399eea49f9baa9t4a0de908084b4of2";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
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
                  onChange={handleCityChange}
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
