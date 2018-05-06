import React, { Component } from 'react';
import Search from '../components/Search';
import Results from '../components/Results';
import constants from '../constants';
import axios from 'axios';

export default class SearchContainer extends Component {
  constructor() {
    super();
    this.state = {
      query: '',
      results: []
    };
  }

  handleUserInput = e => {
    this.setState({
      query: e.target.value
    });
    if (this.state.query.length > 2) {
      this.getCities();
    }
  };

  getCities = () => {
    axios.get(`http://api.apixu.com/v1/search.json?key=${constants.KEY}&q=${this.state.query}`)
      .then(({ data }) => {
        this.setState({
          results: data
        })
      });
  };

  render() {
   return (
     <div>
       <Search placeholder="Find your city" search={this.handleUserInput} />
       <Results results={this.state.results} />
     </div>
   )
  }
}