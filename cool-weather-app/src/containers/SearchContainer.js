import React, { Component } from 'react';
import Search from '../components/Search';
import Results from '../components/Results';
import { addFavAction, selectCity } from '../actions';
import api from "../api";
import { connect } from "react-redux";

const mapDispatchToProps = dispatch => ({
  addFavorite: (cityId, name) => dispatch(addFavAction(cityId, name)),
  select: (cityId, name) => dispatch(selectCity(cityId, name))
});

class SearchContainer extends Component {
  constructor() {
    super();
    this.state = {query: '', results: []};
  }

  handleUserInput = e => {
    this.setState({query: e.target.value}, () => {
      (this.state.query.length > 2) && this.getCities();
    });
  };

  handleClick = (cityId, name) => {
    this.props.select(cityId, name);
    this.props.addFavorite(cityId, name);
    this.setState({query: '', results: []});
  };

  getCities = () => {
    api.getCitiesBySearch(this.state.query)
      .then(({data}) => {
        this.setState({results: data});
      });
  };

  render() {
    return (
      <div>
        <Search placeholder="Find your city" search={this.handleUserInput}/>
        <Results results={this.state.results} click={this.handleClick}/>
      </div>
    )
  }
}

export default connect(null, mapDispatchToProps)(SearchContainer)