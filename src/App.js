import React from "react";
import {
  Router,
  Switch,
  Route
} from "react-router-dom";
import history from './history';

import Home from './Components/Home';
import ReviewCreate from "./Components/ReviewCreate";

export default function OliverTakeHome() {
  return (
    <Router history={history}>
      <div>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/review/:id" exact component={ReviewCreate}/>
        </Switch>
      </div>
    </Router>
  );
}
