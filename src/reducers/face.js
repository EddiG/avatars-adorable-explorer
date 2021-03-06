// @flow
import type { Action } from '../actions/types';

type State = {
  eyes: string,
  nose: string,
  mouth: string,
  color: string,
};

const initialState = {
  eyes: '',
  nose: '',
  mouth: '',
  color: '00ffff',
};

const face = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case 'EYES_SELECTED':
      return { ...state, eyes: action.eyes };
    case 'NOSE_SELECTED':
      return { ...state, nose: action.nose };
    case 'MOUTH_SELECTED':
      return { ...state, mouth: action.mouth };
    case 'SET_COLOR':
      return { ...state, color: action.color };
    case 'SET_FACE':
      return {
        ...state,
        eyes: action.eyes,
        nose: action.nose,
        mouth: action.mouth,
      };
    default:
      return state;
  }
};

export default face;
