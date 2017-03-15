// @flow
import type { Action } from '../actions/types';

type State = Array<string>;

const initialState = [
  'mouth1',
  'mouth10',
  'mouth11',
  'mouth3',
  'mouth5',
  'mouth6',
  'mouth7',
  'mouth9',
];

const mouths = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case 'MOUTHS_LOADED':
      return action.mouths;
    default:
      return state;
  }
};

export default mouths;
