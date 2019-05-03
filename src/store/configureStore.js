import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import playersReducer from "../reducers/players";

export default () => {
  const store = createStore(
    combineReducers({
      players: playersReducer
    }), applyMiddleware(thunk)
  );
  return store;
};

