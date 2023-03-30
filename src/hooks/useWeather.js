import {useMemo} from 'react'

export const useWeather = (weatherData) => {
    const preparedWeather = useMemo(()=>{
        if (weatherData !== undefined) return Object.values(weatherData) 
        return []
    }, weatherData)

    return preparedWeather;
}