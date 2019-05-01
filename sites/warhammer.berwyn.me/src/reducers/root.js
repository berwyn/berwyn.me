import { combineReducers } from 'redux';
import { selectedPaints } from './selected-paints';

export const warhammerApp = combineReducers({
  selectedPaints,
});
