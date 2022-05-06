import { isUndefined } from '.';

describe('utils.is', () => {
  describe('isUndefined', () => {
    it('should return true when value is undefined', () => {
      expect(isUndefined(void 0)).toBe(true);
    });

    it('should return false when value is not undefined', () => {
      expect(isUndefined([])).toBe(false);
      expect(isUndefined(1)).toBe(false);
      expect(isUndefined('string')).toBe(false);
      expect(isUndefined(Symbol.for('symbol'))).toBe(false);
    });
  });
});
