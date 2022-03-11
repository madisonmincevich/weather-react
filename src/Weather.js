import React from "react";
import Search from "./Search.js";
import "./Weather.css";

export default function Weather(props) {
  return (
    <div className="Weather">
      <div className="weather-app">
        <Search defaultCity="London" />
      </div>
      <small className="fw-bold">
        <a
          href="https://github.com/madisonmincevich/weather-react"
          alt=""
          target="_blank"
          rel="noreferrer"
        >
          Open source code
        </a>{" "}
        by Maddie Mincevich
      </small>
    </div>
  );
}
