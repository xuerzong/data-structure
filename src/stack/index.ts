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
    return this._value.tail?.value ?? null
  }

  push(value: T) {
    this._value.push(value)
  }

  pop() {
    return this._value.pop()
  }

  *[Symbol.iterator]() {
    let current = this._value.head
    while (current) {
      yield current.value
      current = current.next
    }
  }
}
