// @flow

export type Action =
  | { type: 'LOAD_FACE_ELEMENTS' }
  | { type: 'EYES_LOADED', eyes: Array<string> }
  | { type: 'NOSES_LOADED', noses: Array<string> }
  | { type: 'MOUTHS_LOADED', mouths: Array<string> }
  | { type: 'EYES_SELECTED', eyes: string }
  | { type: 'NOSE_SELECTED', nose: string }
  | { type: 'MOUTH_SELECTED', mouth: string }
  | { type: 'INIT_FACE' }
  | { type: 'SET_FACE', eyes: string, nose: string, mouth: string }
  | { type: 'SET_COLOR', color: string };
