// @flow

import { combineReducers } from 'redux';
import type { Action } from '../actions/types'

type State = {
  title: string,
  value: number
}

const initialState = {
  title: '',
  value: 0,
}

const reducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case 'SOME_ACTION':
      return { ...state, title: 'Some action' }
    case 'OTHER_ACTION':
      return { ...state, title: 'Other action', value: action.value }
    default:
      return state
  }
}

export default combineReducers({
  reducer,
});
