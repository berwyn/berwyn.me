import { SELECT_PAINT } from '../actions/selected-paint';

export const selectedPaints = (state = [], action) => {
  switch (action.type) {
    case SELECT_PAINT:
      if (!state.some(paint => paint.name === action.paint.name)) {
        return state.concat([action.paint]);
      }
      return state;
    default:
      return state;
  }
};
