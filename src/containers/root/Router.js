import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import App from '../app/App';

const RoutedApp = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App} />
  </Router>
);

export default RoutedApp;
