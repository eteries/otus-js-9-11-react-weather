import api from "../api";

export const toggleFav = (id, name) => ({type: 'TOGGLE_FAV', id, name});

export const addFavAction = (id, name) => ({type: 'ADD_FAV', id, name});

export const selectCity = (id, name) => ({type: 'SELECT_CITY', id, name});

export const fetchWeather = id => dispatch => {
  dispatch({type: 'MAKE_REQUEST'});

  return api.getForecastByCityId(id)
      .then(({ data }) => dispatch({
        type: 'SAVE_CITY',
        id: id,
        fetchDate: Date.now(),
        weather: data
      }))
      .catch(e => console.log(e));
};