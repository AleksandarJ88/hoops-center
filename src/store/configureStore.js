import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import playerReducer from "../reducers/player";
import { filteredPlayersReducer, textFilterReducer } from "../reducers/filters";
import compareReducer from "../reducers/compare";
import errorsReducer from "../reducers/errors";

const configureStore = () => {
  const store = createStore(
    combineReducers({
      player: playerReducer,
      filteredPlayers: filteredPlayersReducer,
      textFilter: textFilterReducer,
      compare: compareReducer,
      errors: errorsReducer
    }), applyMiddleware(thunk)
  );
  return store;
};

export default configureStore;