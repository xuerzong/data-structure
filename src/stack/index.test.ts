import { Stack } from '.';

describe('Stack', () => {
  describe('init', () => {
    const stack = new Stack();
    it('size: should be 0', () => {
      console.log(3);
      expect(stack.size).toBe(0);
    });
    it('isEmpty: should return true', () => {
      expect(stack.isEmpty()).toBe(true);
    });
  });

  describe('push', () => {
    const stack = new Stack();
    stack.push(1);
    it('size: should be increased', () => {
      expect(stack.size).toBe(1);
    });
    it('isEmpty: should return false', () => {
      expect(stack.isEmpty()).toBe(false);
    });
  });

  describe('pop', () => {
    const stack = new Stack();
    stack.push(1);
    stack.pop();
    it('size: should be reduced', () => {
      expect(stack.size).toBe(0);
    });
    it('isEmpty: should return true', () => {
      expect(stack.isEmpty()).toBe(true);
    });

    it('should throw error when stack is empty', () => {
      expect(() => stack.pop()).toThrow(Error);
      expect(() => stack.pop()).toThrow('underflow');
    });
  });
});
