import React, {useState, useEffect} from "react";

const WeatherDisplay = (props) => {
    const [myData, setMyData] = useState({});
    const apiKey = "6b821d97f5e4e74b9d6f6f3dbb9e44f5";

    useEffect( () => {
        console.log( typeof(props.geoCoords.lat), props.geoCoords.lat );
        if( props.geoCoords.lat ){
            fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${props.geoCoords.lat}&lon=${props.geoCoords.lon}&appid=${apiKey}`)
                .then( (r) => { return r.json(); } )
                .then( (data) => {
                    setMyData(data);
                    //console.log(data.main.temp);
                })
                .catch( (err) => { console.log(err); } );
        }
    }, [props.geoCoords])

    return (
        <><p>Temp: { myData ? myData.main.temp : "fail"  }</p></>
    );
};

export default WeatherDisplay;