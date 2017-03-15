// @flow
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import './App.css';
import FaceEdit from '../face/FaceEdit';
import { initRouter } from '../../actions';

type Props = {
  match: Object,
  location: Object,
  initRouter: Function,
};

class App extends PureComponent {
  componentWillMount() {
    const match = this.props.match;
    const location = this.props.location;
    this.props.initRouter(match, location);
  }

  props: Props;

  render() {
    return (
      <div className="App">
        <FaceEdit />
      </div>
    );
  }
}

export default connect(() => ({}), {
  initRouter,
})(App);
