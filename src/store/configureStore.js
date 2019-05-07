import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import playerReducer from "../reducers/player";
import filtersReducer from "../reducers/filters";
import compareReducer from "../reducers/compare";

export default () => {
  const store = createStore(
    combineReducers({
      player: playerReducer,
      filters: filtersReducer,
      compare: compareReducer
    }), applyMiddleware(thunk)
  );
  return store;
};

