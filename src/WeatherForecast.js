import axios from "axios";
import React, { useState } from "react";
import WeatherForecastDay from "./WeatherForecastDay.js";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded && props.city === forecast.city.name) {
    return (
      <div className="WeatherForecast">
        <div class="row">
          {forecast.map(function (dailyForecast, index) {
            return (
              <div className="col-12" key={index}>
                <WeatherForecastDay data={dailyForecast} />
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?${props.city}&appid=eb98e4302ac840d8fb104f13e5058252&units=imperial`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
