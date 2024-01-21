import React from "react";
import axios from "axios";
import "./Weather.css";
import WeatherSearch from "./WeatherSearch";

export default function Weather() {
  let weatherData = {
    city: "Maspalomas",
    temperature: 25,
    date: "Tuesday 15:00",
    description: "Sunny",
    humidity: 80,
    wind: 10,
    imgUrl:
      "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png",
  };
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
                <img src={weatherData.imgUrl} alt={weatherData.description} />
              </div>
            </div>
            <div className="weather-app-temperature-container">
              <div className="weather-app-temperature">
                {weatherData.temperature}
              </div>
              <div className="weather-app-unit">
                <a href="/">°C</a> | <a href="/">°F</a>
              </div>
            </div>
          </div>
          <p className="weather-app-details">
            <span>{weatherData.date},</span>{" "}
            <span> {weatherData.description}</span>
            <br />
            Humidity: {weatherData.humidity}%<strong></strong>, Wind:{" "}
            {weatherData.wind}km/h
            <strong></strong>
          </p>
        </main>
        <footer>
          This project was coded by
          <a
            href="https://github.com/MariaBerbis"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Maria Berbis
          </a>
          , is
          <a
            href="https://github.com/MariaBerbis?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            open-sourced on GitHub
          </a>{" "}
          and
          <a
            href="https://app.netlify.com/sites/my-weather-app-calima/overview"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            hosted on Netlify
          </a>
          .
        </footer>
      </div>
    </div>
  );
}
