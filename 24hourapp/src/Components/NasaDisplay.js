import React, {useEffect, useState} from "react";
import '../styles/NasaDisplay.css';

const NasaDisplay = (props) => {

    let baseURL = "https://brianin3d.files.wordpress.com/2012/01/just_earth_800.gif?w=480";

    const [altMessage, setAltMessage] = useState("altMessage");
    const [locationAndDate, setLocationAndDate] = useState('');
    const [URL, setURL] = useState(baseURL);

    const dateForURL = () => {
        let todaysDate = new Date();
        let theFullYear = todaysDate.getFullYear();
        let theFullMonth = todaysDate.getMonth() + 1;
        let theDayIs = todaysDate.getDate();
        return `${theFullYear}-${theFullMonth}-${theDayIs}`;
    };  //  end of dateForURL


    useEffect( () => {

        let NASA_base_endpoint = "https://api.nasa.gov/planetary/earth/imagery";
        //let longitude = -86.1920689;
        //let latitude = 39.6625006;
        let longitude = props.geoCoords.lon;       //-86.1920689
        let latitude = props.geoCoords.lat;        // 39.6625006
        let dimension = 0.05;                    // agreed best local resolution
        let NASA_API_Key = "&api_key=uCpgjIIIWQrT2dmBSwx6IIwLgDnc41QSk7VugrYu";
        let NoGLServices = "Geolocation services are not available."
        let baseDate = dateForURL();                  // 2020-08-25

        // If GeoLocation services are unavailable, sets globe and message
        //   otherwise, display location image from NASA
        if (longitude === undefined || latitude === undefined) {
            setURL(baseURL);
            setAltMessage(NoGLServices);
            setLocationAndDate(NoGLServices);
        } else {
            setURL( `${NASA_base_endpoint}?lon=${longitude}&lat=${latitude}&date=${baseDate}&dim=${dimension}${NASA_API_Key}` );
            
            setAltMessage(`Satellite image of ${latitude} degrees latitude at ${longitude} degrees longitude`);

            setLocationAndDate(`Satellite image of ${latitude} degrees latitude at ${longitude} degrees longitude for ${baseDate}`);
        };

        console.log(NASA_base_endpoint);
        console.log(longitude);
        console.log(latitude);
        console.log(baseDate);
        console.log(dimension);
        console.log(NASA_API_Key);
        console.log(URL);
        console.log(altMessage);

    }, [props.geoCoords])


    return (
        <>
            <div id="finalFrontier">
                <img src={URL} alt={ altMessage } />
                <br/>
                <h4>{locationAndDate}</h4>
            </div>
        
        </>
        
    );
};

export default NasaDisplay;