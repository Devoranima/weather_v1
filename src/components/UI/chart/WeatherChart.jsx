import React from "react";
import { Line } from "react-chartjs-2";
import classes from "./WeatherChart.module.css"

function WeatherChart({ chartData }) {
  return (
    <div className={classes.chart}>
      <Line
        data={chartData}
        options={{
          plugins: {
            title: {
              display: false,
            },
            legend: {
              display: false
            }
          }
        }}
      />
    </div>
  );
}
export default WeatherChart;