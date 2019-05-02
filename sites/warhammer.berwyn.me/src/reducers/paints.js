import { POPULATE_PAINTS } from '../actions/populate';

export const paints = (state = [], action) => {
  switch (action.type) {
    case POPULATE_PAINTS:
      return action.paints;
    default:
      return state;
  }
};
