import React, { Component } from 'react';
import './Results.css';

export default class Results extends Component {
  render() {
    if (!this.props.results.length) return null;
    return (
      <ul className="Results__ul">
        {this.props.results.map(
          (item) =>
            <li key={item.id} className="Results__item">
              <a className="Results__link" href={`/city/${item.id}`}
                 onClick={e => this.props.click(item.id, item.name.split(',')[0])}>
                {item.name}
              </a>
            </li>
        )}
      </ul>
    );
  }
}
