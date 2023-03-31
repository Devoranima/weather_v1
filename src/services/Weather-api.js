import axios from "axios";

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export default class WeatherServices{

    static async getAll(city = 'Kazan'){
        const response = await axios.get(`https://api.weatherapi.com/v1/forecast.json`, {
            headers:{
                'Access-Control-Allow-Origin': '*' 
                //'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE',
                //'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
            },
            params:{
                key: API_KEY,
                q: city,
                days: 3,
                aqi: 'no',
                alerts: 'no'
            }
        })

        return response;
    }

}