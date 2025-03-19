import React from 'react'
import '../styles/Cards.css'
import Spinner from './Spinner'
import waiting from '../assets/images/waiting.svg'

const Cards = ({loadingData, weather, showData, forecast}) => {

  var today = new Date();
  var day = today.getDate();
  var month = today.getMonth() + 1;
  var year = today.getFullYear();
  var date = day + '/' + month + '/' + year;

  var url = "";
  var iconUrl = "";

  var iconUrl3 ="";
  var iconUrl6="";
  var iconUrl9 ="";

  var forecastDate3 = "";
  var forecastDate6 = "";
  var forecastDate9 = "";

  if(loadingData){
    return <Spinner />;
  }

  if(showData){
    url = "http://openweathermap.org/img/w/";
    iconUrl = url + weather.weather[0].icon + ".png";

    iconUrl3 = url + forecast.list[1].weather[0].icon + ".png";
    iconUrl6 = url + forecast.list[2].weather[0].icon + ".png";
    iconUrl9 = url + forecast.list[3].weather[0].icon + ".png";

    forecastDate3 = forecast.list[1].dt_txt.substring(8, 10) + '/' +  forecast.list[1].dt_txt.substring(5, 7) + '/' + forecast.list[1].dt_txt.substring(0, 4) + ' ' +  forecast.list[1].dt_txt.substring(11, 13);
    forecastDate6 = forecast.list[2].dt_txt.substring(8, 10) + '/' +  forecast.list[2].dt_txt.substring(5, 7) + '/' + forecast.list[2].dt_txt.substring(0, 4) + ' ' +  forecast.list[2].dt_txt.substring(11, 13);
    forecastDate9 = forecast.list[3].dt_txt.substring(8, 10) + '/' +  forecast.list[3].dt_txt.substring(5, 7) + '/' + forecast.list[3].dt_txt.substring(0, 4) + ' ' +  forecast.list[3].dt_txt.substring(11, 13);
  }

  return (
    <div className='cards'>
      {
        showData === true ? (
          <div className='showData'>            
              <div className='data'>
               <h3 className='title-city'>{weather.name}</h3>
                <p className='title-date'>{date}</p>
                <h1 className='title-temp'> {(weather.main.temp - 273.15).toFixed(1)}°C</h1>
                <p className='title-icon'><img src={iconUrl} alt="icon"/>{weather.weather[0].description}</p>
                {/*<img className='image-city' src='https://images.pexels.com/photos/1816714/pexels-photo-1816714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='imagen de ciudad'/> */} 
                  <div> 
              </div>
            </div>
            <div className='temps-container'>
                      <h5 className='temps'>Temperatura maxima: {(weather.main.temp_max - 273.15).toFixed(1)}°C </h5>
                      <h5 className='temps'>Temperatura minimo: {(weather.main.temp_min - 273.15).toFixed(1)}°C </h5>
                      <h5 className='temps'>Sensacion termica: {(weather.main.feels_like - 273.15).toFixed(1)}°C </h5>
                      <h5 className='temps'>Humedad: {(weather.main.humidity)}%</h5>
                      <h5 className='temps'>Velocidad del viento: {(weather.wind.speed)}m/s</h5>
                    </div> 
                   <div className='forest-container'>
                      <p className='fore-date'>Proximos pronosticos: </p>
                      <div className='temps'>
                        <p className='fore-date'>{forecastDate3}h</p>
                        <p className='paraph'><img src={iconUrl3} alt='icon'/>{forecast.list[1].weather[0].description}</p>
                        <p className='paraph'>{(forecast.list[1].main.temp - 273.15).toFixed(1)}°C</p>
                      </div>
                      <div className='temps'>
                        <p className='fore-date'>{forecastDate6}h</p>
                        <p className='paraph'><img src={iconUrl6} alt='icon'/>{forecast.list[2].weather[0].description}</p>
                        <p className='paraph'>{(forecast.list[2].main.temp - 273.15).toFixed(1)}°C</p>
                      </div>
                      <div className='temps'>
                        <p className='fore-date'>{forecastDate9}h</p>
                        <p className='paraph'><img src={iconUrl9} alt='icon'/>{forecast.list[3].weather[0].description}</p>
                        <p className='paraph'>{(forecast.list[3].main.temp - 273.15).toFixed(1)}°C</p>
                      </div>
                  </div>
          </div> 
        ):(
        <>
          <h2 className="no-info">Hola 👋, por favor ingresa una ciudad para dar nuestras aproximaciones meteorologicas ⛅</h2>
          <div> <img  className='wait' src={waiting} alt='Imagen esperando' /> </div>
        </>
        )
      }

    </div>   
  )
}

export default Cards