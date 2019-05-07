export const SELECT_PAINT = '[PAINT] Select';
export const DESELECT_PAINT = '[PAINT] Deselect';

export function selectPaint(paint) {
  return {
    type: SELECT_PAINT,
    paint,
  };
}

export function deselectPaint(paint) {
  return {
    type: DESELECT_PAINT,
    paint,
  };
}
