import React, { useState, useEffect } from "react";

import {Form, FormGroup, Label, Input, Button} from "reactstrap";

const NasaDisplay = (props) => {
    const [imgURL, setImgURL] = useState("");
    const api_key = "OEsFnQDgshfRHHJR28qQsOGQrlgOgyNAilBXGrMA";

    useEffect( () => {
        fetch(`https://api.nasa.gov/planetary/earth/assets?lon=${props.geoCoords.lon}&lat=${props.geoCoords.lat}&api_key=${api_key}`)
            .then( (r) => { return r.json(); } )
            .then( (d) => { setImgURL(d.url); });
    }, [props.geoCoords])

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("https://api.nasa.gov/planetary/earth/assets?lon=" + 
            `${props.geoCoords.lon}&lat=${props.geoCoords.lat}&date=${e.target[0].value}&api_key=${api_key}`)
            .then( (r) => { return r.json(); } )
            .then( (d) => { setImgURL(d.url); });
    };

    return (
        <>
            <h1>Nasa Picture of Your Location</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="dateSelector" >Choose Image Date: </Label>
                    <Input id="dateSelector" name="dateSelector" type="date" />
                </FormGroup>
                <Button color="success" type="submit">Try Date</Button>
            </Form>
            <img src={imgURL} style={{ width: "300px", height: "300px" }}/>
        </>
    );
};

export default NasaDisplay;
