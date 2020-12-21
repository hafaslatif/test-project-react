import React from 'react';
import App from './App';
import Plan from './components/Plan';
import { NavBar } from './components/NavBar';
import { Route, Switch, Redirect } from 'react-router-dom';

export const Routes = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/App" component={App} />
        <Route exact path="/">
          <Redirect to="/App" />
        </Route>
        <Route exact path="/Plan/:id" component={Plan} />
      </Switch>
    </div>
  );
};
