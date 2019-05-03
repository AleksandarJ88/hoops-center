import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import playersReducer from "../reducers/players";
import filtersReducer from "../reducers/filters";

export default () => {
  const store = createStore(
    combineReducers({
      players: playersReducer,
      filters: filtersReducer
    }), applyMiddleware(thunk)
  );
  return store;
};

