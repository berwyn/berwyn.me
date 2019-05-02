import { POPULATE_SETS } from '../actions/populate';

export const sets = (state = [], action) => {
  switch (action.type) {
    case POPULATE_SETS:
      return action.sets;
    default:
      return state;
  }
};
