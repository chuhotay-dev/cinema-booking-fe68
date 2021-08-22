import movieApi from 'apis/movieApi';
import {
  FETCH_MOVIE_DETAIL_FAIL,
  FETCH_MOVIE_DETAIL_REQUEST,
  FETCH_MOVIE_DETAIL_SUCCESS,
} from './types';

export const actFetchMovieDetail = movieId => {
  return dispatch => {
    dispatch({ type: FETCH_MOVIE_DETAIL_REQUEST });
    movieApi
      .fetchMovieDetailApi(movieId)
      .then(res => {
        dispatch({
          type: FETCH_MOVIE_DETAIL_SUCCESS,
          payload: res.data.content,
        });
      })
      .catch(err => {
        dispatch({
          type: FETCH_MOVIE_DETAIL_FAIL,
          payload: err,
        });
      });
  };
};

// export const actFetchMovieDetail = () => {
//   return async dispatch => {
//     dispatch({ type: FETCH_MOVIE_DETAIL_REQUEST });
//     try {
//       const { data } = await movieApi.fetchMovieDetailApi();
//       dispatch({
//         type: FETCH_MOVIE_DETAIL_SUCCESS,
//         payload: data.content,
//       });
//     } catch (err) {
//       dispatch({
//         type: FETCH_MOVIE_DETAIL_FAIL,
//         payload: err,
//       });
//     }
//   };
// };
