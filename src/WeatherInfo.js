import React from "react";
import FormattedDate from "./FormattedDate";
import "./WeatherInfo.css";
import WeatherUnit from "./WeatherUnit";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <main className="main-container">
        <div className="weather-app-data">
          <div>
            <h1 className="weather-app-city">{props.data.city}</h1>
            <div className="weather-app-icon">
              <img src={props.data.icon} alt={props.data.description} />
            </div>
          </div>
          <div>
            <WeatherUnit celsius={props.data.temperature} />
          </div>
        </div>
        <div className="weather-app-details">
          <span className="text-capitalize d-flex ms-4">
            <FormattedDate date={props.data.date} />
            {" , "}
            {props.data.description}
          </span>
          <span>
            Humidity: <strong>{Math.round(props.data.humidity)}%</strong>, Wind:
            <strong>{props.data.wind} km/s</strong>
          </span>
        </div>
      </main>
    </div>
  );
}
