import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import showPlayerAsync from "./actions/player";
import { addToCompareAsync, removeFromCompare } from "./actions/compare";
import { filterPlayersAsync } from "./actions/filters";

const store = configureStore();

/*TEST AREA

store.dispatch(showPlayerAsync(127));

store.dispatch(addToCompareAsync(118));
store.dispatch(addToCompareAsync(128));

store.dispatch(filterPlayersAsync("michael"));

store.subscribe(() => console.log(store.getState()));

*/

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
