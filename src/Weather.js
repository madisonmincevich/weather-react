import React, { useState } from "react";
import Search from "./Search.js";

export default function Weather(props) {
  return (
    <div className="Weather">
      <div className="weather-app">
        <Search defaultCity="London" />
      </div>
      <small>Open source code by Maddie Mincevich</small>
    </div>
  );
}
