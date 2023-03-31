import React from 'react';
import classes from './ForecastDay.module.css'

const ForecastDay = ({day, image, temperature, callback, isCurrent}) => {
    return (
        <div className={ isCurrent? (classes.forecast_item + " " + classes.active) : classes.forecast_item} onClick={callback}>
            <div className={classes.forecast_day}>{day}</div>
            <img className={classes.forecast_image} src={image} alt=""/>
            <div className={classes.temperature}>{(temperature> 0 && "+") + (temperature + " °C")}</div>
        </div>
    );
};

export default ForecastDay;