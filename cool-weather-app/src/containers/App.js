import React, { Component } from 'react';
import Home from '../components/Home';
import Header from '../components/Header';
import '../components/Header.css';
import CityContainer from './CityContainer';
import CityDaysContainer from './CityDaysContainer';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      favorites: [],
      currentCity: 'Saint-Petersburg'
    };
  }

  toggleCityFav = (cityName) => {
    this.setState(state => {
      if (state.favorites.includes(cityName)) {
        return {
          favorites: state.favorites.filter(fav => fav !== cityName)
        }
      } else {
        return {
          favorites: [...state.favorites, cityName]
        }
      }
    });
  };

  render() {
    return (
      <div>
        <Header/>
        <div className="container">
          <Home favorites={ this.state.favorites } />
          <CityContainer city={ this.state.currentCity }
                         toggleCityFav={ this.toggleCityFav }
                         favorites={ this.state.favorites } />
          <CityDaysContainer city={ this.state.currentCity }
                             toggleCityFav={ this.toggleCityFav }
                             favorites={ this.state.favorites } />
        </div>
      </div>
    );
  }
}
