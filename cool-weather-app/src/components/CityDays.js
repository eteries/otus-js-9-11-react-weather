import React, { Component } from 'react';
import './CityDays.css';
import Forecast from './Forecast';
import FavBtn from "./FavBtn";

export default class CityDays extends Component {
  isFavorite() {
    return this.props.favorites.includes(this.props.city);
  }

  render() {
    const {city, data:days, toggleCityFav} = this.props;
    return (
      <div className="City">
        <div className="City__data">
          <h2 className="City__title">Forecast for {city} for 5 days</h2>
          <div className="City__fav">
              <FavBtn cb={toggleCityFav }
                      city={city}
                      isFavorite={this.isFavorite()}  />
          </div>
          <ul className="days">
            {days.map((dayForecast, index) =>
            <li key={index} className="days__day">
              <h4 className="days__date">{dayForecast.date}</h4>
              <div className="days__forecast">
                <Forecast
                  type="forecast"
                  location={city}
                  current={dayForecast.day} />
              </div>
            </li>
            )}
          </ul>
        </div>
      </div>
    );
  }
}
