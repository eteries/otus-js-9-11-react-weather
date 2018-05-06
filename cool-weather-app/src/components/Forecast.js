import React, { Component } from 'react';
import './Forecast.css';

class Forecast extends Component {
  render() {
    const data = this.props.current;
    const type = this.props.type;

    const current = (
      <section className="Forecast Forecast--cols">
        <div className="Forecast__left">
          <div className="temperature">{data.temp_c}&#8451;</div>
          <div><img src={data.condition.icon} alt="" /></div>
        </div>
        <div className="Forecast__right">
          <p>{data.condition.text}</p>
          <p>Wind: {data.wind_kph} kph
            <i className="wind-arrow" style={{transform: 'rotate(' + data.wind_degree + 'deg)'}}>&#8648;</i>
          </p>
          <p>Barometer: {data.pressure_mb} hPa</p>
          <p>Humidity: {data.humidity}%</p>
        </div>
      </section>
    );
    const forecast = (
      <section className="Forecast">
        <p><img src={data.condition.icon} alt="" /></p>
        <p className="temp">{data.mintemp_c} - {data.maxtemp_c} &#8451;</p>
        <p className="clouds">{data.condition.text}</p>
        <p className="wind">Wind: up to {data.maxwind_kph} kph</p>
        <p className="humidity">Humidity: {data.avghumidity}%</p>
      </section>
    );

    if (type === 'forecast') return forecast;
    return current;
  }
}

export default Forecast;