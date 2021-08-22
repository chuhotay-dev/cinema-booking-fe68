import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import movieReducer from "containers/client/Home/module/reducer";
import movieDetailReducer from "containers/client/MovieDetail/module/reducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  movieReducer,
  movieDetailReducer,
});

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
