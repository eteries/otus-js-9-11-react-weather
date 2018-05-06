import React, { Component } from 'react';
import Search from '../components/Search';

export default class SearchContainer extends Component {
  render() {
   return (
     <Search placeholder="Find your city" search={e => console.log(e.target.value)}/>
   )
  }
}