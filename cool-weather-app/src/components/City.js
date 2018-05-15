import React, { Component } from 'react';

import './City.css';
import Forecast from './Forecast';
import List from './List';
import FavBtn from './FavBtn';
import faHeart from '@fortawesome/fontawesome-free-solid/faHeart';

export default class City extends Component {
  isFavorite = () => {
    return this.props.favorites.find(fav => fav.id === this.props.cityId);
  };

  render() {
    if (!this.props.weatherData) return null;

    const {cityId, city, toggleFavorites, weatherData} = this.props;
    return (
      <div className="City">
        <div className="City__data">
          <h2 className="City__title">Today in { city }</h2>
          <div className="City__add">
            <FavBtn cb={toggleFavorites}
                    city={city}
                    cityId={cityId}
                    isFavorite={this.isFavorite()}/>
          </div>
          <Forecast location={city} current={weatherData.weather.current} />
          <a href="" className="days-link">Check {city}'s forecast for 5 more days</a>
        </div>
        <div className="City__favorites">
          <List title="Your favorites"
                items={this.props.favorites}
                icon={faHeart}
                text="Use 'Add to favorites' button to make city your favorite"/>
        </div>
      </div>
      )
  }
}
