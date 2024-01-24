import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";


export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  function load() {
    let apiKey = "5399eea49f9baa9t4a0de908084b4of2";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }
if (loaded) {
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

            <br />
            <div className="weather-forecast-temperatures">
              <span className="weather-forecast-temperature-max">
                <strong>{"15"}°</strong>
              </span>
              <span className="weather-forecast-temperature-min"> {"9"}°</span>
            </div>
          </div>
        </div>
        );
            } else {
              return null;
            }
          })}
        </div>
      </div>  );
} else {
  load();
  return null;
}
}
