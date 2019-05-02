import {
  ADD_PURCHASE_CANDIDATE,
  CLEAR_PURCHASE_CANDIDATES,
} from '../actions/purchase-candidates';

export const purchaseCandidates = (state = [], action) => {
  switch (action.type) {
    case ADD_PURCHASE_CANDIDATE:
      return state.concat([action.candidate]);
    case CLEAR_PURCHASE_CANDIDATES:
      return [];
    default:
      return state;
  }
};
