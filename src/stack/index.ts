import { isNull } from '@/_utils/is'
import SinglyLinkedList from '../linked-list/singly-linked-list'

interface IStack<T> {
  readonly length: number

  readonly top: T | null

  push: (value: T) => void

  pop: () => T | null

  [Symbol.iterator](): IterableIterator<T>
}

export default class Stack<T = unknown> implements IStack<T> {
  private readonly _value: SinglyLinkedList<T>

  constructor() {
    this._value = new SinglyLinkedList()
  }

  get length() {
    return this._value.length
  }

  get top() {
    const topNode = this._value.findByIndex(0)
    return isNull(topNode) ? null : topNode.value
  }

  push(value: T) {
    this._value.insertFromHead(value)
  }

  pop() {
    const head = this._value.head
    this._value.removeByIndex(0)
    return isNull(head) ? null : head.value
  }

  *[Symbol.iterator]() {
    let current = this._value.head
    while (current) {
      yield current.value
      current = current.next
    }
  }
}
