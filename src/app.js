import React from "react";
import ReactDOM from "react-dom";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import addPlayerAsync from "./actions/players";

const store = configureStore();

store.dispatch(addPlayerAsync(117));
store.dispatch(addPlayerAsync(125));

store.subscribe(() => console.log(store.getState()));

ReactDOM.render(<AppRouter />, document.getElementById("app"));
