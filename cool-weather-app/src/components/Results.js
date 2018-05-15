import React, { Component } from 'react';
import './Results.css';

export default class Results extends Component {

  handleClick = (e, id, name) => {
    e.preventDefault();
    this.props.click(id, name.split(',')[0]);
  };

  render() {
    if (!this.props.results.length) return null;
    return (
      <ul className="Results__ul">
        {this.props.results.map(
          (item) =>
            <li key={item.id} className="Results__item">
              <a className="Results__link" href={`/city/${item.id}`}
                 onClick={e => this.handleClick(e, item.id, item.name)}>
                {item.name}
              </a>
            </li>
        )}
      </ul>
    );
  }
}
