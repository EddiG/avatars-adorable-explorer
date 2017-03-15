// @flow
import type { Action } from './types';

export const loadFaceElements = (): Action => ({
  type: 'LOAD_FACE_ELEMENTS',
});

export const eyesLoaded = (eyes: Array<string>): Action => ({
  type: 'EYES_LOADED',
  eyes,
});

export const nosesLoaded = (noses: Array<string>): Action => ({
  type: 'NOSES_LOADED',
  noses,
});

export const mouthsLoaded = (mouths: Array<string>): Action => ({
  type: 'MOUTHS_LOADED',
  mouths,
});

export const selectEyes = (eyes: string): Action => ({
  type: 'EYES_SELECTED',
  eyes,
});

export const selectNose = (nose: string): Action => ({
  type: 'NOSE_SELECTED',
  nose,
});

export const selectMouth = (mouth: string): Action => ({
  type: 'MOUTH_SELECTED',
  mouth,
});

export const initFace = (): Action => ({
  type: 'INIT_FACE',
});

export const setFace = (eyes: string, nose: string, mouth: string): Action => ({
  type: 'SET_FACE',
  eyes,
  nose,
  mouth,
});

export const selectColor = (color: string): Action => ({
  type: 'SET_COLOR',
  color,
});
