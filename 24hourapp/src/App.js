import './App.css';
import React from "react";

import NasaDisplay from "./Components/NasaDisplay";
import WeatherDisplay from "./Components/WeatherDisplay";
import ZomatoDisplay from "./Components/ZomatoDisplay";

function App() {
  const coords = {};
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition((pos) => { coords.lat = pos.coords.latitude; coords.lon = pos.coords.longitude; console.log(coords);}, () => { console.log("error");});
  }

  return (
    <div className="App">
      <NasaDisplay geoCoords={coords} />
      <hr />
      <WeatherDisplay geoCoords={coords} />
      <hr />
      <ZomatoDisplay geoCoords={coords} />
      <hr />
    </div>
  );
};

export default App;