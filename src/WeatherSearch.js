import React, { useState } from "react";
import "./WeatherSearch.css";

export default function WeatherSearch() {
  const [city, setCity] = useState(" ");
  const [submitted, setSubmitted] = useState(" ");

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(`${city}`);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
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
      <h2>{submitted}</h2>
    </div>
  );
}
