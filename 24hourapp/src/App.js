import './App.css';
import React, { useState, useEffect } from "react";

import NasaDisplay from "./Components/NasaDisplay";
import WeatherDisplay from "./Components/WeatherDisplay";
import ZomatoDisplay from "./Components/ZomatoDisplay";

function App() {
  const [coords, setCoords] = useState({});

  useEffect( () => {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(
        (pos) => { 
          setCoords({ lat: pos.coords.latitude, lon: pos.coords.longitude }); 
        }, 
        () => { console.log("error"); });
    }
  }, [])


  return (
  
    <div className="App">
      <NasaDisplay geoCoords={coords} />
      <hr />
      <WeatherDisplay geoCoords={coords} />
      <hr />
      <ZomatoDisplay geoCoords={coords} />
    </div>
  );
};

export default App;