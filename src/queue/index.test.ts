import { isFunction, isNumber } from '@/_utils/is'
import Queue from '.'

describe('Queue', () => {
  describe('init', () => {
    const queue = new Queue()

    it('should have function called len', () => {
      expect(isNumber(queue.length)).toBe(true)
    })

    it('should have function called enqueue', () => {
      expect(isFunction(queue.enqueue)).toBe(true)
    })

    it('should have function called dequeue', () => {
      expect(isFunction(queue.dequeue)).toBe(true)
    })

    it('len: should return 0', () => {
      expect(queue.length).toBe(0)
    })
  })

  describe('enqueue', () => {
    const queue = new Queue<number>()
    queue.enqueue(0, 1)

    it('len: should return queue.length', () => {
      expect(queue.length).toBe(2)
    })
  })

  describe('dequeue', () => {
    const queue = new Queue<number>()
    queue.enqueue(0, 1)
    const head = queue.dequeue()

    it('should return the head value', () => {
      expect(head).toBe(0)
    })

    it('len: should return queue.length', () => {
      expect(queue.length).toBe(1)
    })
  })
})
