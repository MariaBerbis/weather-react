import React from "react";
import FormattedDate from "./FormattedDate";
import "./Weather.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <main className="main-container">
        <div className="weather-app-data">
          <div>
            <h1 className="weather-app-city">{props.data.city}</h1>
            <div>
              <img src={props.data.icon} alt={props.data.description} />
            </div>
          </div>
          <div className="weather-app-temperature-container">
            <div className="weather-app-temperature">
              {Math.round(props.data.temperature)}
            </div>
            <div className="weather-app-unit">
              <a href="/">°C</a> | <a href="/">°F</a>
            </div>
          </div>
        </div>
        <p className="weather-app-details">
          <span>
            <FormattedDate date={props.data.date} />,
          </span>{" "}
          <span className="text-capitalize"> {props.data.description}</span>
          <br />
          Humidity: <strong>{Math.round(props.data.humidity)}%</strong>, Wind:
          <strong>{props.data.wind} km/s</strong>
        </p>
      </main>
    </div>
  );
}
