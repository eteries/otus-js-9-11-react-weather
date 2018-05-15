import React, {Component} from 'react';
import CityDays from '../components/CityDays';
import weatherSpb from '../forecast_spb';

export default class CityDaysContainer extends Component {
  getCityForecast() {
    return weatherSpb.forecast.forecastday;
  }

  render() {
    return (
      <CityDays city={this.props.city}
                data={this.getCityForecast()}
                favorites = {this.props.favorites}
                toggleCityFav={this.props.toggleCityFav} />
    )
  }
}