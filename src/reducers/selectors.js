// @flow
import { get } from 'lodash';

export const getFirstEyes = (state: Object) => get(state, 'eyes[0]', '');
export const getFirstNose = (state: Object) => get(state, 'noses[0]', '');
export const getFirstMouth = (state: Object) => get(state, 'mouths[0]', '');
export const getFaceFromRouter = (state: Object) =>
  get(state, 'router.match.params', {});
