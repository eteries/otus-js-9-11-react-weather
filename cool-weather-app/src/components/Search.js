import React, { Component } from 'react';
import './Search.css';

export default class Search extends Component {
  render() {
    return (
      <input
        className="Search"
        placeholder={this.props.placeholder}
        onInput={this.props.search} />
    );
  }
}
