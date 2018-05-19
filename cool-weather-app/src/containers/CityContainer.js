import React, { Component } from 'react';
import City from '../components/City';
import CityDays from '../components/CityDays';
import { connect } from 'react-redux';
import { toggleFav, fetchWeather } from '../actions';
import api from "../api";

const mapStateToProps = state => ({
  favorites: state.favorites || [],
  cities: state.cities
});

const mapDispatchToProps = dispatch => ({
  toggleFavorites: (cityId, name) => dispatch(toggleFav(cityId, name)),
  fetchWeather: cityId => dispatch(fetchWeather(cityId))
});

class CityContainer extends Component {
  state = {
    city: '',
    id: null,
    isFetching: true
  };

  shouldFetch = (cities, cityId) => {
    const cityCached = cities[cityId];
    const cityCachedMoreThanADayAgo = cities[cityId] && cities[cityId].fetchDate < new Date().getDate() - 1;

    return !cityCached || cityCachedMoreThanADayAgo;
  };

  updateSelectedWeather = () => {
    this.shouldFetch(this.props.cities, this.state.id) && this.props.fetchWeather(this.state.id);
  };

  getCity = (id) => {
    api.getCityNameByCityId(id)
      .then(({data}) => {

        const city = data.find(c => c.id === +id);
        if(!city) {
          this.setState({isFetching: false});
          return;
        }

        this.setState({
          city: city.name.split(',')[0],
          id: city.id,
          isFetching: false
        });
      })
      .then(() => {
        if(this.state.id) this.updateSelectedWeather();
      })
  };

  componentDidMount() {
    if (this.props.match.params.id) {
      this.for = 'today';
      this.getCity(this.props.match.params.id);
    }

    if (this.props.match.params.forecast) {
      this.for = 'forecast';
    }
  }

  componentDidUpdate() {
    if (this.props.cities.isFetching) return;
    this.updateSelectedWeather();
  }

  render() {
    const {cities, favorites, toggleFavorites} = this.props;
    const weather = cities[this.state.id];

    if (this.props.cities.isFetching || this.state.isFetching) {
      return (
        <div className="loader">LOADING</div>
      )
    }

    if (this.for === 'today') {
      return (
        <City city={this.state.city} cityId={this.state.id}
              favorites={favorites} toggleFavorites={toggleFavorites}
              weatherData={weather} />
      )
    }

    if (this.for === 'forecast') {
      return (
        <CityDays city={this.state.city} cityId={this.state.id}
                  favorites={favorites } toggleFavorites={toggleFavorites}
                  weatherData={weather} />

      )
    }

    return (<div>No data</div>);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CityContainer);
