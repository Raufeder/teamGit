import React, {useState, useEffect} from "react";

let baseURL = "https://api.openweathermap.org/data/2.5/weather";
let key ="f9da721e37175547f37fd7af327f89dd"


const WeatherDisplay = (props) => {

    let url=`${baseURL}?lon=${props.geoCoords.lon}&lat=${props.geoCoords.lat}&appid=${key}`

    const [temp, setTemp] = useState(0);

    fetch(url)
        .then(res => res.json())
        .then((data) => {
            console.log(data)
            setTemp(data.main.temp - 273.15)
        })

     



    return (
        <div>
            <h1>Weather</h1>
            <h2>Current Weather In Your Location</h2>
            {temp} degrees Celsius
       
        </div>
    );
};

export default WeatherDisplay;