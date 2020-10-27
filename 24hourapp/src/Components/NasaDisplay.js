import React, {useState} from "react";





const NasaDisplay = (props) => {

    const [dimension, setDimension]=useState(0.05);

    let NASA_base_endpoint = "https://api.nasa.gov/planetary/earth/imagery";
    let longitude = props.geoCoords.lon;                                    //-86.1920689
    let latitude = props.geoCoords.lat;                                     // 39.6625006
    let baseDate = "2020-08-25";                        //2020-08-25
    let NASA_API_Key = "&api_key=uCpgjIIIWQrT2dmBSwx6IIwLgDnc41QSk7VugrYu";

    //let URL = NASA_base_endpoint + "?lon=" + longitude + "&lat=" + latitude + "&date=" + baseDate + "&dim=" + dimension + NASA_API_Key;

    //let altMessage = "satellite image of " + latitude + " degrees latitude at " + longitude + " degrees longitude";



    const dateForURL = () => {
        let todaysDate = new Date().toISOString();
        console.log("Today's date", todaysDate);
        return todaysDate;
      };  //  end of dateForURL



    console.log(NASA_base_endpoint);
    console.log(longitude);
    console.log(latitude);
    console.log(baseDate);
    console.log(dimension);
    console.log(NASA_API_Key);
    console.log(dateForURL);
    //console.log(URL);





//<img src={URL} alt={ altMessage } />

    return (
        <>
        <h2>You are here</h2>
        
        </>
        
    );
};

export default NasaDisplay;