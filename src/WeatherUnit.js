import React, { useState } from "react";

export default function WeatherUnit(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherUnit">
        <div className="weather-app-temperature-container">
          <div className="weather-app-temperature ms-5">
            {Math.round(props.celsius)}
          </div>
          <div className="weather-app-unit">
            <a href="/">°C</a> |{" "}
            <a href="/" onClick={showFahrenheit}>
              °F
            </a>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="WeatherUnit">
        <div className="weather-app-temperature-container">
          <div className="weather-app-temperature ms-5">
            {Math.round(fahrenheit())}
          </div>
          <div className="weather-app-unit">
            <a href="/" onClick={showCelsius}>
              °C
            </a>{" "}
            | <a href="/">°F</a>
          </div>
        </div>
      </div>
    );
  }
}
