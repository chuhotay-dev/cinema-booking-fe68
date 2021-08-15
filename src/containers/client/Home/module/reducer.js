import { FETCH_ALL_MOVIE } from './types';

const initialState = {
  listMovie: [],
};

const movieReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_ALL_MOVIE:
      state.listMovie = payload;
      return { ...state };
    default:
      return state;
  }
};

export default movieReducer;
