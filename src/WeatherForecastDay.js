import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function max() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°`;
  }
  function min() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="WeatherForecastDay">
      <div className="WeatherForecast-date">{day()}</div>

      <WeatherIcon
        code={props.data.condition.icon}
        size={40}
        className="WeatherForecast-icon"
      />
      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temperature-max">
          <strong>{max()}</strong>
        </span>
        <span className="WeatherForecast-temperature-min">{min()}</span>
      </div>
    </div>
  );
}
