import axios from 'axios';

const API_URL = `https://api.themoviedb.org/3/`;
const API_KEY = '7cb81bd00b0c803fac6d7af27ad80264';
axios.defaults.params = {
  api_key: API_KEY,
};
export const getTrendingTodayMovies = async () => {
  const { data } = await axios.get(`${API_URL}trending/all/day`);
  return data;
};
export const getMovieById = async movieId => {
  const { data } = await axios.get(`${API_URL}/movie/${movieId}`);
  return data;
};
export const getMovieCasts = async movieId => {
  const { data } = await axios.get(`${API_URL}/movie/${movieId}/credits`);
  return data;
};
export const getMovieReviews = async movieId => {
  const { data } = await axios.get(`${API_URL}/movie/${movieId}/reviews`);
  return data;
};
export const getSearchMoviesByQuery = async query => {
  const { data } = await axios.get(`${API_URL}search/movie?query=${query}`);
  return data;
};
