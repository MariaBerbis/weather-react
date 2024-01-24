import React from "react";
import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div class="row">
        <div className="col">
          <div className="weather-forecast-date">
            {"Tue"}
            <br />
          </div>
          <div>
            <img className="weather-forecast-icon" src={""} alt={""} />
            <WeatherIcon />
            <br />
            <div className="weather-forecast-temperatures">
              <span className="weather-forecast-temperature-max">
                <strong>{"15"}°</strong>
              </span>
              <span className="weather-forecast-temperature-min"> {"9"}°</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
