export const ADD_PURCHASE_CANDIDATE = '[PURCHASE CANDIDATE] Add';
export const CLEAR_PURCHASE_CANDIDATES = '[PURCHASE CANDIDATE] Clear';

export function addPurchaseCandidate(candidate) {
  return {
    type: ADD_PURCHASE_CANDIDATE,
    candidate,
  };
}

export function clearPurchaseCandidates() {
  return { type: CLEAR_PURCHASE_CANDIDATES };
}
