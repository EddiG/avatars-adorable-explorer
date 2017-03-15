// @flow

import type { Action } from '../actions/types';

type State = string;

const initialState = '00ffff';

const color = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case 'SET_COLOR':
      return action.color;
    default:
      return state;
  }
};

export default color;
