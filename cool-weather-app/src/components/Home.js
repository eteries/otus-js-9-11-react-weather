import React, { Component } from 'react';
import './Home.css';
import SearchContainer from '../containers/SearchContainer';
import List from './List';
import faCloud from '@fortawesome/fontawesome-free-solid/faCloud';
import faSun from '@fortawesome/fontawesome-free-solid/faSun';
import faHeart from '@fortawesome/fontawesome-free-solid/faHeart';

const RU_CITIES = [
  {id: 2227297, name: 'Ekaterinburg'},
  {id: 2145091, name: 'Moscow'},
  {id: 2182456, name: 'Saint-Petersburg'},
  {id: 2192981, name: 'Sochi'},
  {id: 2221155, name: 'Vladivostok'}
];

const WORLD_CITIES = [
  {id: 386789, name: 'Beijing'},
  {id: 568120, name: 'Berlin'},
  {id: 2801268, name: 'London'},
  {id: 2618724, name: 'New York'},
  {id: 3125553, name: 'Tokio'}
];

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="Home__search">
          <SearchContainer />
        </div>
        <div className="Home__choose">
          or choose one
        </div>
        <ul className="Home__list">
          <li className="Home__list-item">
            <List title="World Weather"
                  items={ WORLD_CITIES }
                  icon={faSun} />
          </li>
          <li className="Home__list-item">
            <List title="Russian Weather" items={RU_CITIES}
                  icon={faCloud} />
          </li>
          <li className="Home__list-item">
            <List title="Your favorites"
                  items={this.props.favorites}
                  text="Use search to find and make city your favorite"
                  icon={faHeart} />
          </li>
        </ul>
      </div>
    );
  }
}
