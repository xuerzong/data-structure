import { isFunction, isUndefined } from '@/_utils/is'
import Stack from '.'

describe('Stack', () => {
  describe('init', () => {
    const stack = new Stack()
    it('len: should be 0', () => {
      expect(stack.length).toBe(0)
    })

    it('should have function called push', () => {
      expect(isFunction(stack.push)).toBe(true)
    })

    it('should have function called pop', () => {
      expect(isFunction(stack.pop)).toBe(true)
    })

    it('len: should return 0', () => {
      expect(stack.length).toBe(0)
    })
  })

  describe('push', () => {
    const stack = new Stack()
    stack.push(0)
    stack.push(1)

    it('top: should be the last value', () => {
      expect(stack.top).toBe(1)
    })

    it('len: should return stack.length', () => {
      expect(stack.length).toBe(2)
    })
  })

  describe('pop', () => {
    const stack = new Stack()
    stack.push(0)
    stack.push(1)
    const popValue = stack.pop()

    it('popValue: should be the top value', () => {
      expect(popValue).toBe(1)
    })

    it('top: should be the last value', () => {
      expect(stack.top).toBe(0)
    })

    it('len: should return stack.length', () => {
      expect(stack.length).toBe(1)
    })
  })

  it('should be iterable', () => {
    const stack = new Stack()
    stack.push(1)
    stack.push(2)
    expect([...stack]).toEqual([2, 1])
  })
})
