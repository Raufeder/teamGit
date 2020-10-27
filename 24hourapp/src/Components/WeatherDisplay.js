import {Button} from "reactstrap";
import {useState, useEffect} from 'react';
import '../styles/Weather.css'

const WeatherDisplay = (props) => {
    const [myData, setMyData] = useState({});
    const [unitToggle, setUnitToggle] = useState(true);
    const apiKey = "6b821d97f5e4e74b9d6f6f3dbb9e44f5";

    const fetchyBoy = (units) => {
        if( props.geoCoords.lat ){
            let urlBase = "http://api.openweathermap.org/data/2.5/weather?lat=";
            fetch(`${urlBase}${props.geoCoords.lat}&lon=${props.geoCoords.lon}&appid=${apiKey}&units=${units}`)
                .then( (r) => { return r.json(); } )
                .then( (data) => {
                    setMyData(data);
                    console.log(data);
                })
                .catch( (err) => { console.log(err); } );
        }
    };

    useEffect( () => {
        console.log( typeof(props.geoCoords.lat), props.geoCoords.lat );
        fetchyBoy("imperial");
        setUnitToggle(true);
    }, [props.geoCoords]);

    const farenheightToCelsius = (far) => { return ((far-32)*(5/9)).toFixed(2); };

    const temperatureDisplayFormat = (temp) => {
        let unitAppend = String.fromCharCode(176) + (unitToggle ? "F" : "C");
        return (unitToggle ? myData.main.temp: farenheightToCelsius(myData.main.temp) ) + unitAppend;
    };

    const showWeatherData = () => {
        if(myData.main){
            return (
                <>
                      
                    <span>Temp: {temperatureDisplayFormat(myData.main.temp)}</span>
                    <br />
                    <span>Pressure: {myData.main.pressure}millibar</span>
                    <br />
                    <span>Humidity: {myData.main.humidity}%</span>
                    <br />
                    <span>High Temp: {temperatureDisplayFormat(myData.main.temp_max)}</span>
                    <br />
                    <span>Low Temp: {temperatureDisplayFormat(myData.main.temp_min)}</span>
                    <br />
                    <span>Feels Like: {temperatureDisplayFormat(myData.main.feels_like)}</span>
                    <br />
                </>
            );
        }
        return (
            <><p>Coords haven't updated yet</p></>
        );
    };

    const changeUnits = (e) => { setUnitToggle( !unitToggle ); };

    return (
        <>
            {showWeatherData()}
            <Button className="button" color="success" size="xl" onClick={changeUnits}>Change Units!</Button>
        </>
    );
};

export default WeatherDisplay;