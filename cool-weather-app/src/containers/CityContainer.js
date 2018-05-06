import React, {Component} from 'react';
import City from '../components/City';
import weatherSpb from '../forecast_spb';

export default class CityContainer extends Component {
  getCityToday() {
    return weatherSpb.current;
  }

  render() {
    return (
        <City city={this.props.city}
              data={this.getCityToday()}
              favorites = {this.props.favorites}
              toggleCityFav={this.props.toggleCityFav} />
    )
  }
}