import SinglyLinkedList from '@/linked-list/singly-linked-list'
import { isNull } from '@/_utils/is'

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
    values.forEach((v) => this._value.insertFromTail(v))
  }

  dequeue() {
    const head = this._value.head
    this._value.removeByIndex(0)
    return isNull(head) ? null : head.value
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
