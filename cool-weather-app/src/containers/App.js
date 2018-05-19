import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import {loadStateFromStorage, saveStateToStorage } from '../localStorage'
import { weatherApp } from '../reducers';

import Header from '../components/Header';
import '../components/Header.css';
import HomeContainer from './HomeContainer';
import CityContainer from './CityContainer';
import { BrowserRouter, Switch, Route } from "react-router-dom";

const logger = createLogger();

const loadedState = loadStateFromStorage();

const store = createStore(weatherApp, loadedState, applyMiddleware(thunk, logger));

store.subscribe(() => saveStateToStorage(store.getState()));

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Header/>
          <div className="container">

            <BrowserRouter>
              <div className='content'>
                <Switch>
                  <Route exact path='/' component={HomeContainer} />
                  <Route path='/city/:id/:forecast(forecast)?' component={CityContainer} />
                  <Route render={function () {
                    return <p>Not Found</p>
                  }} />
                </Switch>
              </div>
            </BrowserRouter>
          </div>
        </div>
      </Provider>
    );
  }
}
