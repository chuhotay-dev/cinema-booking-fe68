import { SET_MOVIE_LIST } from "redux/actions/movieAction";

const initState = {
  listMovie: [],
}

const movieReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_MOVIE_LIST: 
    console.log(action.payload);
      state.listMovie = action.payload;
      console.log(state);
      return {...state};
    default:
      return state;
  }
}

export default movieReducer;

