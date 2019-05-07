import { put, select } from 'redux-saga/effects';

import {
  addPurchaseCandidate,
  clearPurchaseCandidates,
} from '../actions/purchase-candidates';

export function* calculatePurchaseCandidates(action) {
  yield put(clearPurchaseCandidates());
  const state = yield select();

  if (state.selectedPaints.length === 0) {
    return;
  }

  yield put(addPurchaseCandidate({ paints: state.selectedPaints, sets: [] }));

  const completeSets = state.sets.filter(set =>
    set.paints.every(paint =>
      state.selectedPaints.map(paint => paint.name).includes(paint)
    )
  );

  for (const set of completeSets) {
    const remainingPaints = state.selectedPaints.filter(
      paint => !set.paints.includes(paint.name)
    );

    yield put(addPurchaseCandidate({ paints: remainingPaints, sets: [set] }));
  }
}
