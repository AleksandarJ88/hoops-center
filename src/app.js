import React from "react";
import ReactDOM from "react-dom";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import addPlayerAsync from "./actions/players";
import filterPlayersAsync from "./actions/filters";

const store = configureStore();

store.dispatch(addPlayerAsync(117));
store.dispatch(addPlayerAsync(125));

store.dispatch(filterPlayersAsync("davis"));

store.subscribe(() => console.log(store.getState()));

ReactDOM.render(<AppRouter />, document.getElementById("app"));
