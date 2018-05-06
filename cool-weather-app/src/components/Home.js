import React, { Component } from 'react';
import './Home.css';
import SearchContainer from '../containers/SearchContainer';
import List from './List';
import faCloud from '@fortawesome/fontawesome-free-solid/faCloud';
import faSun from '@fortawesome/fontawesome-free-solid/faSun';
import faHeart from '@fortawesome/fontawesome-free-solid/faHeart';

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
                  items={ ['Beijing', 'Berlin', 'London', 'New York', 'Tokio'] }
                  icon={faSun} />
          </li>
          <li className="Home__list-item">
            <List title="Russian Weather" items={['Ekaterinburg', 'Moscow', 'Saint-Petersburg', 'Sochi', 'Vladivostok']}
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
