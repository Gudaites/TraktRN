import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.trakt.tv',
  headers: {
    'Content-Type': 'application/json',
    'trakt-api-key':
      '599f8a9f283287c22635c5d9182d650d512ea5f020cf351730004e2bbe923634',
    'trakt-api-version': 2,
  },
});

export const apiTMDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie/',
});
