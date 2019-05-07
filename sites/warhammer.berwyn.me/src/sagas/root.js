import { all, takeEvery } from 'redux-saga/effects';

import { SELECT_PAINT, DESELECT_PAINT } from '../actions/selected-paint';
import { calculatePurchaseCandidates } from './calculate-purchase-candidates';

export function* rootSaga() {
  yield all([
    takeEvery(SELECT_PAINT, calculatePurchaseCandidates),
    takeEvery(DESELECT_PAINT, calculatePurchaseCandidates),
  ]);
}
