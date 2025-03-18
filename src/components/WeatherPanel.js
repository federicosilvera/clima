import React, {useState} from 'react'
import Forms from './Forms';
import Cards from './Cards';

const WeatherPanel = () => {

    let urlWeather = "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=e3f337086beb61b7e1d81f9261f24692&lang=es"
    let cityUrl = "&q=";

    let urlForecast = "https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=e3f337086beb61b7e1d81f9261f24692&lang=es"

    const [weather, setWeather] = useState([]);
    const [forecast, setForecast] = useState([]);
    const [loading, setLoading] =useState(false);
    const [show, setShow] = useState(false);
    const [location, setLocation] = useState("");

    const getLocation = async(location) => {
        setLoading(true);
        setLocation(location);

        //weather

        urlWeather = urlWeather + cityUrl + location;

        await fetch(urlWeather).then((response) =>{
            if(!response.ok) throw{response}
            return response.json();
        }).then((weatherData)=>{
            console.log(weatherData);
            setWeather(weatherData);
        }).catch(error=>{
            setLoading(false);
            setShow(false);
            alert("Introduce una ciudad correcta")
        })

        //forecast

        urlForecast = urlForecast + cityUrl + location;

        await fetch(urlForecast).then((response) =>{
            if(!response.ok) throw{response}
            return response.json();
        }).then((forecastData)=>{
            console.log(forecastData);
            setForecast(forecastData);

            setLoading(false);
            setShow(true);

        }).catch(error=>{
            setLoading(false);
            setShow(false);
        })

    }

  return (
    <React.Fragment>
        <Forms 
            newLocation ={getLocation}
        />
        <Cards 
            showData = {show}
            loadingData = {loading}
            weather = {weather}
            forecast = {forecast}
        />    
    </React.Fragment>
  )
}

export default WeatherPanel