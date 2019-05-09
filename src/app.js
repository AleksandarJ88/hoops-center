import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import showPlayerAsync from "./actions/player";
import { addToCompareAsync, removeFromCompare } from "./actions/compare";
import filterPlayersAsync from "./actions/filters";

const store = configureStore();

store.dispatch(showPlayerAsync(117));
store.dispatch(showPlayerAsync(125));

store.dispatch(addToCompareAsync(118));
store.dispatch(addToCompareAsync(128));
store.dispatch(addToCompareAsync(135));

setTimeout(() => {
  store.dispatch(removeFromCompare({id: 135}));
}, 3000)



//store.dispatch(filterPlayersAsync("davis"));

store.subscribe(() => console.log(store.getState()));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
