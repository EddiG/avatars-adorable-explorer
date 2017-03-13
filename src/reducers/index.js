// @flow
import { combineReducers } from 'redux';
import eyes from './eyes'
import noses from './noses'
import mouths from './mouths'
import face from './face'

export default combineReducers({
  eyes,
  noses,
  mouths,
  face,
});
