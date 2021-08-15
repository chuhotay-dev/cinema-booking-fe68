import { FETCH_MOVIE_DETAIL } from './types';

const initialState = {
  movieDetail: {},
};

const movieDetailReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_MOVIE_DETAIL:
      state.movieDetail = payload;
      return { ...state };

    default:
      return state;
  }
};

export default movieDetailReducer;
