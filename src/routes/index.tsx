import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Edit from './Edit';
import Home from './Home';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/edit" component={Edit} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}
