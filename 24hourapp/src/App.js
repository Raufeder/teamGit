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
      <h1>git location. <br/>
      git weather.<br /> 
      git food.</h1>
      <div className="Comp">
        <h2>Satellite Image of Your Location</h2>
        <br />
      <NasaDisplay geoCoords={coords} />
      </div>
      <div className="Comp">
        <h2>The Current Weather In Your Location</h2>
        <br/>
      <WeatherDisplay geoCoords={coords} />
      </div>
      <div className="Comp">
        <h2>Restaurants Near You</h2>
      <ZomatoDisplay geoCoords={coords} />
      </div>
    </div>
  );
};

export default App;