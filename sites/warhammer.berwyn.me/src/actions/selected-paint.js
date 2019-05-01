export const SELECT_PAINT = '[PAINT] Select';

export function selectPaint(paint) {
  return {
    type: SELECT_PAINT,
    paint,
  };
}
