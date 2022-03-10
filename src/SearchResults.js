import React, { useState } from "react";
import CurrentDate from "./CurrentDate.js";

export default function SearchResults(props) {
  return (
    <div className="SearchResults">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <CurrentDate date={props.data.date} />
        </li>
        <li>{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-1">
          <img src={props.data.icon} alt="" />
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
