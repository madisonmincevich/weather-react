import React, { useState } from "react";
import axios from "axios";
import SearchResults from "./SearchResults.js";

export default function Search(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState(props.defaultCity);

  function showWeather(response) {
    setWeatherData({
      city: response.data.name,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
    });
    setReady(true);
  }

  function Search() {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=eb98e4302ac840d8fb104f13e5058252&units=imperial`;
    axios.get(apiUrl).then(showWeather);
  }

  function changeCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    Search();
  }

  return (
    <div className="Search">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Type a city..."
          onChange={changeCity}
        />
        <input type="submit" placeholder="Search" />
      </form>
      <SearchResults data={weatherData} />
    </div>
  );
}