import SinglyLinkedList from '@/linked-list/singly-linked-list'
import { isNull } from '@/_utils/is'

interface IQueue<T> {
  enqueue(value: T): void

  dequeue(): T | null

  readonly length: number

  [Symbol.iterator](): IterableIterator<T>
}

export default class Queue<T = unknown> implements IQueue<T> {
  private readonly queue: SinglyLinkedList<T>

  constructor() {
    this.queue = new SinglyLinkedList()
  }

  enqueue(...values: T[]) {
    values.forEach((v) => this.queue.insertFromTail(v))
  }

  dequeue() {
    const head = this.queue.head
    this.queue.removeByIndex(0)
    return isNull(head) ? null : head.value
  }

  get length() {
    return this.queue.length
  }

  *[Symbol.iterator]() {
    let current = this.queue.head
    while (current) {
      yield current.value
      current = current.next
    }
  }
}
