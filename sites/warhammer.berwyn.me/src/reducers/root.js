import { combineReducers } from 'redux';

import { selectedPaints } from './selected-paints';
import { purchaseCandidates } from './purchase-candidates';
import { paints } from './paints';
import { sets } from './sets';

export const warhammerApp = combineReducers({
  selectedPaints,
  purchaseCandidates,
  paints,
  sets,
});
