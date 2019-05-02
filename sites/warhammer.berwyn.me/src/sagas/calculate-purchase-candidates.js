import { put, select } from 'redux-saga/effects';

import {
  addPurchaseCandidate,
  clearPurchaseCandidates,
} from '../actions/purchase-candidates';

export function* calculatePurchaseCandidates(action) {
  yield put(clearPurchaseCandidates());
  const state = yield select();
  yield put(addPurchaseCandidate({ paints: state.selectedPaints, sets: [] }));

  const completeSets = state.sets.filter(set =>
    set.paints.every(paint =>
      state.selectedPaints.map(paint => paint.name).includes(paint)
    )
  );

  for (const set of completeSets) {
    yield put(addPurchaseCandidate({ paints: [], sets: [set] }));
  }
}
