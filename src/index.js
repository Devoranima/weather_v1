import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import 'semantic-ui-css/semantic.min.css'
import './styles/App.css' 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <a href="https://www.weatherapi.com/" title="Free Weather API">
      <img src='//cdn.weatherapi.com/v4/images/weatherapi_logo.png' alt="Weather data by WeatherAPI.com" border="0"/></a>
  </React.StrictMode>
);
