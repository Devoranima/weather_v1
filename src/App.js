import Weather  from "./components/Weather";
import React, {useState, useEffect} from 'react';
import WeatherServices from "./services/Weather-api";
import { useFetching } from "./hooks/useFetching";
import { useWeather } from "./hooks/useWeather";

import {Loader, Dimmer, Segment} from "semantic-ui-react"

function App() {
  const [weatherData, setWeatherData] = useState({});

  const [city, setCity] = useState('Moscov');

  useEffect(()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
        const newCity = position.coords.latitude+','+position.coords.longitude;
        setCity(newCity);
        fetchWeather(newCity);
    });
  }, [])

  useEffect(()=>{
    fetchWeather(city)
  }, [city])

  
  const [fetchWeather, isWeatherLoading, weatherError] = useFetching(async(city) =>{
    const response = await WeatherServices.getAll(city);
    setWeatherData(response.data);
  })
  
  return (
      <div className='App'>
          {weatherError && 
              <h1>An error occured: {weatherError.toString()}</h1>
          }

          {isWeatherLoading?
          <Loader active inverted size="massive"/>
          :
          <Weather fetchweather={fetchWeather} {...weatherData}></Weather>
          }
          
          
      </div>
  )
}

export default App;
