import { FETCH_MOVIE_DETAIL } from './types';

export const actFetchMovieDetail = movie => ({
  type: FETCH_MOVIE_DETAIL,
  payload: movie,
});
