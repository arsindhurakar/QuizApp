import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "../pages/home/";
import Dashboard from "../pages/quiz/dashboard";
import NotFound from "../pages/notFound";

import { PrivateRoute } from "./privateRoute";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
