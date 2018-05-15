import React, { Component } from 'react';
import City from '../components/City';
import CityDays from '../components/CityDays';
import { connect } from 'react-redux';
import { toggleFav, fetchWeather, selectCity } from '../actions';

const mapStateToProps = state => ({
  favorites: state.favorites || [],
  cities: state.cities,
  current: state.current
});

const mapDispatchToProps = dispatch => ({
  toggleFavorites: (cityId, name) => dispatch(toggleFav(cityId, name)),
  fetchWeather: cityId => dispatch(fetchWeather(cityId)),
  select: (cityId, name) => dispatch(selectCity(cityId, name))
});

class CityContainer extends Component {

  shouldFetch = (cities, cityId) => {
    const cityCached = cities[cityId];
    const cityCachedMoreThanADayAgo = cities[cityId] && cities[cityId].fetchDate < new Date().getDate() - 1;

    return !cityCached || cityCachedMoreThanADayAgo;
  };

  updateSelectedWeather = () => {
    this.shouldFetch(this.props.cities, this.props.current.id) && this.props.fetchWeather(this.props.current.id);
  };

  componentDidMount() {
    this.props.select(this.props.current.id, this.props.current.name);
  }

  componentDidUpdate() {
    if (this.props.cities.isFetching) return;
    this.updateSelectedWeather();
  }

  render() {
    const {current, cities, favorites, toggleFavorites} = this.props;
    const weather = cities[current.id];

    if (this.props.cities.isFetching) {
      return (
        <div className="loader">LOADING</div>
      )
    }

    if (this.props.for === 'today') {
      return (
        <City city={current.name} cityId={current.id}
              favorites={favorites} toggleFavorites={toggleFavorites}
              weatherData={weather} />
      )
    }

    if (this.props.for === 'forecast') {
      return (
        <CityDays city={current.name} cityId={current.id}
                  favorites={favorites } toggleFavorites={toggleFavorites}
                  weatherData={weather} />

      )
    }

    return null;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CityContainer);
