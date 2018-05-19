import React, { Component } from 'react';
import './CityDays.css';
import Forecast from './Forecast';
import FavBtn from "./FavBtn";

export default class CityDays extends Component {
  isFavorite = () => {
    return this.props.favorites.find(fav => fav.id === this.props.cityId);
  };

  render() {
    if (!this.props.weatherData) return null;

    const {city, cityId, weatherData, toggleFavorites} = this.props;
    const days = weatherData.weather.forecast.forecastday;
    return (
      <div className="City">
        <div className="City__data">
          <h2 className="City__title">Forecast for {city} for 5 days</h2>
          <div className="City__fav">
            <FavBtn cb={toggleFavorites}
                    city={city}
                    cityId={cityId}
                    isFavorite={this.isFavorite()}/>
          </div>
          <ul className="days">
            {days.map((dayForecast, index) =>
            <li key={index} className="days__day">
              <h4 className="days__date">{dayForecast.date}</h4>
              <div className="days__forecast">
                <Forecast
                  location={city}
                  forecast={dayForecast.day} />
              </div>
            </li>
            )}
          </ul>
          <a href={`/city/${cityId}`} className="days-link">Check {city}'s today weather</a>
          <a href="/" className="days-link">Choose another city</a>
        </div>
      </div>
    );
  }
}
