// @flow
import type { Action } from '../actions/types'

type State = Array<string>

const initialState = [
  'nose2', 'nose3', 'nose4',
  'nose5', 'nose6', 'nose7',
  'nose8', 'nose9']

const noses = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case 'NOSES_LOADED':
      return action.noses
    default:
      return state
  }
}

export default noses
