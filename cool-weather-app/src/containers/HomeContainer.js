import React, { Component } from 'react';
import Home from '../components/Home';
import { connect } from 'react-redux';

class HomeContainer extends Component {
  render() {
    return (
      <Home favorites={ this.props.favorites } />
    )
  }
}

export default connect(state => ({favorites: state.favorites || []}))(HomeContainer);
