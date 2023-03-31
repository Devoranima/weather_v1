import React, { useEffect, useState } from 'react';
import ForecastDay from './UI/forecastDay/ForecastDay';

import Chart from "chart.js/auto"
import {CategoryScale} from 'chart.js'
import WeatherChart from "./UI/chart/WeatherChart" 

const days = ['Sunday', 'Monday', 'Tuesday', 'Wendsday', 'Thursday', 'Friday', 'Saturday']

Chart.register(CategoryScale);

const Weather = ({fetchweather, ...weatherData}) => {

    const [updated, setUpdated] = useState(0);

    const [currentDay, setCurrentDay] = useState(0);

    const [currentState, setcurrentState] = useState({
        temperature: weatherData.current.temp_c,
        image: weatherData.current.condition.icon,
        condition: weatherData.current.condition.text
    });

    const [chartData, setChartData] = useState({
        labels: weatherData.forecast.forecastday[currentDay].hour.map((data, index) => {
            if (index % 2 === 0) return data.time.slice(-5);
        }), 
        datasets: [
            {
            label: "Temperature",
                data: weatherData.forecast.forecastday[currentDay].hour.map((data, index) =>  {
                    if (index % 2 === 0) return data.temp_c;
                }),
                backgroundColor: [
                    "rgba(75,192,192,1)"
                ],
                borderColor: "#00AAF3",
                borderWidth: 2,
                spanGaps: true
            }
    ]})

    useEffect(()=>{
        setChartData({
            labels: weatherData.forecast.forecastday[currentDay].hour.map((data, index) => {
                if (index % 2 === 0) return data.time.slice(-5)
            }), 
            datasets: [
                {
                label: "Temperature",
                    data: weatherData.forecast.forecastday[currentDay].hour.map((data, index) =>  {
                        if (index % 2 === 0) return data.temp_c
                    }),
                    backgroundColor: [
                        "rgba(75,192,192,1)"
                    ],
                    borderColor: "#00AAF3",
                    borderWidth: 2,
                    spanGaps: true
                }
            ]  
        })

        setcurrentState( currentDay === 0 ?
        {
            temperature: weatherData.current.temp_c,
            image: weatherData.current.condition.icon,
            condition: weatherData.current.condition.text
        }
        :
        {
            temperature: weatherData.forecast.forecastday[currentDay].day.avgtemp_c,
            image: weatherData.forecast.forecastday[currentDay].day.condition.icon,
            condition: weatherData.forecast.forecastday[currentDay].day.condition.text
        }
        )

    },[currentDay, weatherData.location.name])

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
                
                <div className='current-state_of_weather'>
                    <div className='current-description'>
                        <div className='day'>{(currentDay === 0 ? "Today, " : "" )+ days[new Date(weatherData.forecast.forecastday[currentDay].date).getUTCDay()]}</div>
                        <div className='current-num'> {(currentState.temperature > 0 ? "+" : "") + (currentState.temperature + " °C")} </div>
                        <div>{currentState.condition}</div>
                    </div>
                    <div className='current-right'>
                        <div className='location'>Current location:<br/> <span>{weatherData.location.name}, {weatherData.location.country}</span></div>
                        <img src={currentState.image} alt="" className='current-image'/>
                    </div>
                </div>
                <WeatherChart chartData={chartData}></WeatherChart>
            </div>

            <div className='forecast'>
                {
                weatherData.forecast.forecastday.map((e, index) => 
                    <ForecastDay 
                        day={days[new Date(e.date).getUTCDay()]} 
                        image={e.day.condition.icon} 
                        temperature={e.day.avgtemp_c} 
                        key={new Date(e.date).getUTCDay()} 
                        callback={()=>{
                            setCurrentDay(index)
                        }}
                        isCurrent = {index === currentDay}
                    ></ForecastDay>  
                )
                }
            </div>
        </div>
    )

};


export default Weather;