import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
