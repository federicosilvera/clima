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

    const getLocation = async(loc) => {
        setLoading(true);
        setLocation(loc);

        //weather

        urlWeather = urlWeather + cityUrl + loc;

        await fetch(urlWeather).then((response) =>{
            if(!response.ok) throw{response}
            return response.json();
        }).then((weatherData)=>{
            console.log(weatherData);
            setWeather(weatherData);
        }).catch(error=>{
            setLoading(false);
            setShow(false);
        })

        //forecast

        urlForecast = urlForecast + cityUrl + loc;

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