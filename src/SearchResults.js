import React from "react";
import FormatDate from "./FormatDate.js";
import WeatherIcon from "./WeatherIcon.js";

export default function SearchResults(props) {
  return (
    <div className="SearchResults">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormatDate date={props.data.date} />
        </li>
        <li>{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-1">
          <WeatherIcon code={props.data.icon} size={36} />
        </div>
        <div className="col-1">{Math.round(props.data.temperature)}</div>
        <div className="col-10">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
