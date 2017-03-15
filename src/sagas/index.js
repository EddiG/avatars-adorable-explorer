// @flow
// import { call, put, select, takeLatest } from 'redux-saga/effects'
// import fetchElements from '../services/faceElements'
// import { eyesLoaded, nosesLoaded, mouthsLoaded, setFace } from '../actions'
import { put, select, takeLatest } from 'redux-saga/effects';
import { setFace } from '../actions';
import {
  getFirstEyes,
  getFirstNose,
  getFirstMouth,
} from '../reducers/selectors';

// function* loadFaceElements() {
//   const elements = yield call(fetchElements)
//   yield put(eyesLoaded(elements.eyes))
//   yield put(nosesLoaded(elements.nose))
//   yield put(mouthsLoaded(elements.mouth))
//   yield put({ type: 'INIT_FACE' })
// }

function* initFace() {
  const eyes = yield select(getFirstEyes);
  const nose = yield select(getFirstNose);
  const mouth = yield select(getFirstMouth);
  yield put(setFace(eyes, nose, mouth));
}

function* root(): any {
  // yield takeLatest('LOAD_FACE_ELEMENTS', loadFaceElements)
  yield takeLatest('INIT_FACE', initFace);
}

export default root;
