import React, {useState, useEffect} from "react";
import { Button } from 'reactstrap';

let baseURL = "https://api.openweathermap.org/data/2.5/weather";
let key ="f9da721e37175547f37fd7af327f89dd"
let metric = "metric"
let imperial = "imperial"

const WeatherDisplay = (props) => {

    let urlMetric=`${baseURL}?lon=${props.geoCoords.lon}&lat=${props.geoCoords.lat}&units=${metric}&appid=${key}`

    const [temp, setTemp] = useState(0);
    const [unit, setUnit] = useState('Celsius')
    const [celsius, setCelsius] = useState(true)

   useEffect(() => {
    fetch(urlMetric)
    .then(res => res.json())
    .then((data) => {
        console.log(data)
        setTemp(data.main ? data.main.temp : 0)
        setUnit('Celsius')
        setCelsius(true)
    })
  }, []) 

const fetchImperial = (event) => {
    let urlImperial = `${baseURL}?lon=${props.geoCoords.lon}&lat=${props.geoCoords.lat}&units=${imperial}&appid=${key}`

  celsius == true ?
    fetch(urlImperial)
    .then(res => res.json())
    .then((data) => {
        console.log(data)
        setTemp(data.main.temp)
        setUnit('Fahrenheit')
        setCelsius(false)
    }) : fetch(urlMetric)
    .then(res => res.json())
    .then((data) => {
        console.log(data)
        setTemp(data.main.temp)
        setUnit('Celsius')
        setCelsius(true)
    })
}

    return (
        <div id="weatherDiv">
            <h1>Weather In Your Location</h1>
            <p>Currently, it is {temp} degrees {unit}.</p>
            <br />
            <Button color="info" onClick={(e) => fetchImperial(e)}>Toggle Units</Button>
        </div>
    );
};

export default WeatherDisplay;