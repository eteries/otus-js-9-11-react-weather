import React, { Component } from 'react';
import './List.css';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

class List extends Component {
  render() {
    return (
      <section>
        <h3 className="List__title">
          <span className="List__icon"><FontAwesomeIcon icon={this.props.icon} size="2x"/></span>
          {this.props.title}
        </h3>
        {!this.props.items.length && (<p className="List__text">{this.props.text}</p>)}
        <ul className="List__ul">
        {this.props.items.map(
          (item, index) =>
            <li key={index} className="List__item">
              <a className="List__link" href="">
                {item}
              </a>
            </li>
        )}
        </ul>
      </section>
    );
  }
}

export default List;