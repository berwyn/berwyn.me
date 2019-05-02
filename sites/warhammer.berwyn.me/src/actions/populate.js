export const POPULATE_PAINTS = '[POPULATE] Paints';
export const POPULATE_SETS = '[POPULATE] Sets';

export function populatePaints(paints) {
  return {
    type: POPULATE_PAINTS,
    paints,
  };
}

export function populateSets(sets) {
  return {
    type: POPULATE_SETS,
    sets,
  };
}
