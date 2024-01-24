import React, { useState, useEffect } from "react";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherIcon(props) {
  const [iconUrl, setIconUrl] = useState("");
  console.log(props);

  useEffect(() => {
    const apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.DefaultCity}&key=5399eea49f9baa9t4a0de908084b4of2&units=metric`;

    axios
      .get(apiUrl)
      .then((response) => {
        const iconKey = response.data.daily;
        const iconUrl = `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${iconKey}.png`;
        console.log(response.data);
        setIconUrl(iconUrl);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
  }, [city]);

  return (
    <div className="WeatherIcon">
      <img
        className="weather-forecast-icon"
        src={`http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${iconUrl}.png`}
        alt="Weather Icon"
      />
    </div>
  );
}
