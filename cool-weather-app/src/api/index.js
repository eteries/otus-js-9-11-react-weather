import axios from "axios/index";
const KEY = '722901b451a64bb6881194209182304';
const URL = 'http://api.apixu.com/v1/';

export function getWeatherByCityId(id) {
  return axios.get(`${URL}current.json?key=${KEY}&q=id:${id}`);
}

export function getForecastByCityId(id) {
  return axios.get(`${URL}forecast.json?key=${KEY}&q=id:${id}&days=5`);
}

export function getCitiesBySearch(query) {
  return axios.get(`${URL}search.json?key=${KEY}&q=${query}`);
}

export default {
  getWeatherByCityId,
  getForecastByCityId,
  getCitiesBySearch
}