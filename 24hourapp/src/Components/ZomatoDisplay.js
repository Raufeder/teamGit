import React, { useEffect, useState } from "react"; 

const baseURL = 'https://developers.zomato.com/api/v2.1/';
const key = '0c3eace9a13ded50a00e7959b0b360ee';


const ZomatoDisplay = (props) => {
const [results, setResults] = useState([])

    const fetchResults = () => {

        fetch(`${baseURL}/geocode?lat=${props.geoCoords.lat}&lon=${props.geoCoords.lon}`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'user-key': key
            })

        })
        .then(res => res.json())
        .then(data => setResults(data.nearby_restaurants))
        // .then(data => console.log(data.nearby_restaurants.[1].restaurant.name))
        .catch(err => console.log(err))
    }

    // const restaurantInfo = () => {
    //     for (let i = 0; i < results.length; i++) {
    //         let nameOfRestaurant = results[i].restaurant.name
    //         let addressOfRestaurant = results[i].restaurant.location.address
    //         let cuisineOfRestaurant = results[i].restaurant.cuisines
    //         let priceForTwoOfRestaurant = results[i].restaurant.average_price_for_two
    //     }
        
    // }


    const restaurantInfo = () => {
        return results.map( (results, index) => {
          return(
            <tr>
              <td>{results.restaurant.name}</td>
              <td>{results.restaurant.location.address}</td>
              <td>{results.restaurant.cuisines}</td>
              <td>{results.restaurant.average_cost_for_two}</td>
            </tr>
          )
        })
      };


    const handleSubmit = (e) => {
        e.preventDefault();
        fetchResults();
    }

    useEffect(() => {
        fetchResults()
    }, [])


    return (
        <>
        <p>Zomato</p>
        <form onSubmit={(e) => handleSubmit(e)}>
            <span>Check out restaurants in the area!</span>
            {restaurantInfo()}
            <button className="submit">Take a gander!</button>
        </form>
        </>
    )
};

export default ZomatoDisplay;