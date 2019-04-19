import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "../components/HomePage";
import SearchPage from "../components/SearchPage";
import ComparePage from "../components/ComparePage";
import NotFoundPage from "../components/NotFoundPage";
import Header from "../components/Header";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header/>
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/search" component={SearchPage} />
        <Route path="/compare" component={ComparePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;