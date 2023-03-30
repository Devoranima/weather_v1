import React from 'react';
import classes from './ForecastDay.module.css'

const ForecastDay = ({day, image, temperature}) => {
    return (
        <div className={classes.forecast_item}>
            <div className={classes.forecast_day}>{day}</div>
            <img className={classes.forecast_image} src={image} alt=""/>
            <div className="temperature">{(temperature> 0 && "+") + (temperature + " °C")}</div>
        </div>
    );
};

export default ForecastDay;