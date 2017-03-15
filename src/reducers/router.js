// @flow
import type { Action } from '../actions/types';

type State = {
  match: ?Object,
  location: ?Object,
};

const initialState = {
  match: null,
  location: null,
};

const router = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case 'INIT_ROUTER':
      return { ...state, match: action.match, location: action.location };
    default:
      return state;
  }
};

export default router;
