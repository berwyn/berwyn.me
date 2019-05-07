import { SELECT_PAINT, DESELECT_PAINT } from '../actions/selected-paint';

export const selectedPaints = (state = [], action) => {
  switch (action.type) {
    case SELECT_PAINT:
      if (!state.some(paint => paint.name === action.paint.name)) {
        return state.concat([action.paint]);
      }
      return state;
    case DESELECT_PAINT:
      return state.filter(p => p.name !== action.paint.name);
    default:
      return state;
  }
};
