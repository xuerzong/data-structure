import SinglyLinkedList from '@/linked-list/singly-linked-list'

interface IQueue<T> {
  enqueue(value: T): void

  dequeue(): T | null

  readonly length: number

  [Symbol.iterator](): IterableIterator<T>
}

export default class Queue<T = unknown> implements IQueue<T> {
  private readonly _value: SinglyLinkedList<T>

  constructor() {
    this._value = new SinglyLinkedList()
  }

  enqueue(...values: T[]) {
    values.forEach((v) => this._value.push(v))
  }

  dequeue() {
    return this._value.shift()
  }

  get length() {
    return this._value.length
  }

  *[Symbol.iterator]() {
    let current = this._value.head
    while (current) {
      yield current.value
      current = current.next
    }
  }
}
