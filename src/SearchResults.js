import React from "react";
import FormatDate from "./FormatDate.js";
import WeatherIcon from "./WeatherIcon.js";
import "./Search.css";

export default function SearchResults(props) {
  return (
    <div className="SearchResults">
      <h1 className="fw-bold">{props.data.city}</h1>
      <ul className="description">
        <li>
          <FormatDate date={props.data.date} />
        </li>
        <li>{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <span className="icon">
            <WeatherIcon code={props.data.icon} size={50} />
          </span>
          <span class="temp fw-bold">
            {Math.round(props.data.temperature)}°F
          </span>
        </div>
        <div className="list col-6">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
