import React, {Component} from 'react';
import './City.css';
import Forecast from './Forecast';
import List from './List';
import FavBtn from './FavBtn';
import faHeart from '@fortawesome/fontawesome-free-solid/faHeart';

export default class City extends Component {
  isFavorite() {
    return this.props.favorites.includes(this.props.city);
  }

  render() {
    const cityName = this.props.city;
    const data = this.props.data;

    return (
      <div className="City">
        <div className="City__data">
          <h2 className="City__title">Forecast for {cityName}</h2>
          <div className="City__add">
            <FavBtn cb={this.props.toggleCityFav }
                    city={cityName}
                    isFavorite={this.isFavorite()} />
          </div>
          <Forecast location={cityName} current={ data } />
          <a href="" className="days-link">Check { cityName }'s forecast for 5 more days</a>
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
