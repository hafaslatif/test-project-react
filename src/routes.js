import React from "react";
import App from "./App";
import Plan from "./components/Plan";
import { NavBar } from "./components/NavBar";
import { Route, Switch } from "react-router-dom";

export const Routes = () => (
  <div>
    <NavBar />
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/Plan/:id" component={Plan} />
    </Switch>
  </div>
);
