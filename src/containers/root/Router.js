import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from '../app/App';

const RoutedApp = () => (
  <Router>
    <Switch>
      <Route path="/face/:eyes/:nose/:mouth/:color" component={App} />
      <Route exact path="/" component={App} />
      <Route render={() => <h1>Page not found</h1>} />
    </Switch>
  </Router>
);

export default RoutedApp;
