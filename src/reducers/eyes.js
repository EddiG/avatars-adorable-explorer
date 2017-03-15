// @flow
import type { Action } from '../actions/types';

type State = Array<string>;

const initialState = [
  'eyes1',
  'eyes10',
  'eyes2',
  'eyes3',
  'eyes4',
  'eyes5',
  'eyes6',
  'eyes7',
  'eyes9',
];

const eyes = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case 'EYES_LOADED':
      return action.eyes;
    default:
      return state;
  }
};

export default eyes;
