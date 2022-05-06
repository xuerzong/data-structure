import { isFunction, isUndefined } from '@/_utils/is';
import Queue from '.';

describe('Queue', () => {
  describe('init', () => {
    const queue = new Queue();

    it('head: should be undefined', () => {
      expect(isUndefined(queue.head)).toBe(true);
    });

    it('should have function called len', () => {
      expect(isFunction(queue.len)).toBe(true);
    });

    it('should have function called enqueue', () => {
      expect(isFunction(queue.enqueue)).toBe(true);
    });

    it('should have function called dequeue', () => {
      expect(isFunction(queue.dequeue)).toBe(true);
    });

    it('len: should return 0', () => {
      expect(queue.len()).toBe(0);
    });
  });

  describe('enqueue', () => {
    const queue = new Queue<number>();
    queue.enqueue(0, 1);

    it('head: should be the first value', () => {
      expect(queue.head).toBe(0);
    });

    it('len: should return queue.length', () => {
      expect(queue.len()).toBe(2);
    });
  });

  describe('dequeue', () => {
    const queue = new Queue<number>();
    queue.enqueue(0, 1);
    const head = queue.dequeue();

    it('should return the head value', () => {
      expect(head).toBe(0);
    });

    it('head: should be the first value', () => {
      expect(queue.head).toBe(1);
    });

    it('len: should return queue.length', () => {
      expect(queue.len()).toBe(1);
    });

    it('should throw error when stack is empty', () => {
      queue.dequeue();
      expect(() => queue.dequeue()).toThrow(Error);
      expect(() => queue.dequeue()).toThrow('underflow');
    });
  });
});
