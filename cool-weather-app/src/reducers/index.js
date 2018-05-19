import { combineReducers } from 'redux';

const favorites = (state=[], action) => {
  switch (action.type) {

    case 'TOGGLE_FAV': {
      if (state.find(fav => fav.id === action.id)) {
        return state.filter(fav => fav.id !== action.id);
      }
      return [...state, {id: action.id, name: action.name}];
    }

    case 'ADD_FAV': {
      if (state.find(fav => fav.id === action.id)) {
        return state;
      }
      return [...state, {id: action.id, name: action.name}];
    }

    default: {
      return state;
    }

  }
};

const cities = (state=[], action) => {
  switch (action.type) {

    case 'MAKE_REQUEST': {
      return {
        ...state,
        isFetching: true
      }
    }

    case 'SAVE_CITY': {
      return {
        ...state,
        isFetching: false,
        [action.id]: {
          fetchDate: action.fetchDate,
          weather: action.weather
        }
      };
    }

    default: {
      return state;
    }

  }
};

const weatherApp = combineReducers({ favorites, cities });

export { weatherApp, favorites, cities };
