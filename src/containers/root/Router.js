import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from '../app/App';

const basename = process.env.PUBLIC_URL || '';

const RoutedApp = () => (
  <Router>
    <Switch>
      <Route
        path={`${basename}/face/:eyes/:nose/:mouth/:color`}
        component={App}
      />
      <Route exact path={`${basename}/`} component={App} />
      <Route render={() => <h1>Page not found</h1>} />
    </Switch>
  </Router>
);

export default RoutedApp;
