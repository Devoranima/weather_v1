import React, { useEffect, useState } from 'react';
import { useFetching } from '../hooks/useFetching';
import WeatherServices  from '../services/Weather-api';
import ForecastDay from './UI/forecastDay/ForecastDay';

const days = ['Sunday', 'Monday', 'Tuesday', 'Wendsday', 'Thursday', 'Friday', 'Saturday']

const Weather = ({fetchweather, ...weatherData}) => {

    const [updated, setUpdated] = useState(0);

    if (weatherData.current !== undefined){

        setInterval(() => {
            setUpdated(updated+1);
        }, 60000);
        
        return (
            <div className='weather'>
                <div className="current-weather">
                    <div className='reload'>
                        <button id="reload-btn" 
                            className='reload-btn' 
                            onClick={()=>{
                                fetchweather("Kazan");
                                
                            }}
                        ></button>
                        <div>
                            Updated: {updated === 0 ? "now" : updated + " mins ago"}
                        </div>  
                    </div>
                    <div className='location'>Current location: {weatherData.location.name}, {weatherData.location.country}</div>

                    <div className='current-state_of_weather'>
                        <div className='current-description'>
                            <div className='day'>{days[new Date(weatherData.location.localtime).getUTCDay()]}</div>
                            <div className='current-num'> {(weatherData.current.temp_c > 0 ? "+" : "") + (weatherData.current.temp_c + " °C")} </div>
                            <div>{weatherData.current.condition.text}</div>
                        </div>
                        <img src={weatherData.current.condition.icon} alt="" className='current-image'/>
                    </div>
                </div>
                <div className='forecast'>
                    {
                    weatherData.forecast.forecastday.map((e, index) => 
                        index !== 0 ? <ForecastDay day={days[new Date(e.date).getUTCDay()]} image={e.day.condition.icon} temperature={e.day.avgtemp_c} key={new Date(e.date).getUTCDay()}></ForecastDay> : "" 
                    )
                    }
                </div>
            </div>
        )
    }

    return <h1 style={{textAlign: 'center'}}>No weather :(</h1> 
};


export default Weather;