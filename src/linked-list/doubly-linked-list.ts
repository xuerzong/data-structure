export class DoublyLinkedNode<T> {
  value: T
  prev: DoublyLinkedNode<T> | null
  next: DoublyLinkedNode<T> | null

  constructor(key: T) {
    this.value = key
    this.prev = null
    this.next = null
  }

  *[Symbol.iterator]() {
    let current: DoublyLinkedNode<T> | null = this
    while (current) {
      yield current.value
      current = current.next
    }
  }
}

interface IDoublyLinkedList<T> {
  readonly length: number

  readonly head: DoublyLinkedNode<T> | null

  readonly tail: DoublyLinkedNode<T> | null

  unshift(value: T): number

  shift(): T | null

  push(value: T): number

  pop(): T | null

  has(value: T): boolean

  get(value: T): DoublyLinkedNode<T> | null

  [Symbol.iterator](): IterableIterator<T>
}

export default class DoublyLinkedList<T = any> implements IDoublyLinkedList<T> {
  private _head: DoublyLinkedNode<T> | null
  private _tail: DoublyLinkedNode<T> | null
  private _length: number = 0

  constructor() {
    this._head = null
    this._tail = null
  }

  get head() {
    return this._head
  }

  get tail() {
    return this._tail
  }

  get length() {
    return this._length
  }

  unshift(value: T): number {
    const currentLen = this._length

    this._length++

    const node = new DoublyLinkedNode(value)

    node.next = this._head

    if (this._head !== null) {
      this._head.prev = node
    }

    this._head = node

    if (currentLen === 0) {
      this._tail = this._head
    }

    return this._length
  }

  shift() {
    if (this._length === 0) {
      return null
    }

    const currentLen = this._length
    this._length--
    const oldHead = this._head
    this._head = this._head!.next

    if (currentLen === 1) {
      this._tail = this._head // null
    }

    return oldHead!.value
  }

  push(value: T) {
    if (this._length === 0) {
      return this.unshift(value)
    }

    this._length++

    const node = new DoublyLinkedNode(value)
    node.prev = this._tail
    this._tail!.next = node
    this._tail = node

    return this._length
  }

  pop(): T | null {
    if (this._length === 0) {
      return null
    }

    const currentLen = this._length
    this._length--
    const oldTail = this._tail
    this._tail = this._tail!.prev

    if (currentLen === 1) {
      this._head = this._tail // null
    }

    return oldTail!.value
  }

  has(value: T) {
    let current = this._head
    while (current) {
      if (current.value === value) {
        return true
      }
      current = current.next
    }
    return false
  }

  get(value: T) {
    let current = this._head
    while (current) {
      if (current.value === value) {
        return current
      }
      current = current.next
    }
    return null
  }

  *[Symbol.iterator]() {
    let current = this._head
    while (current) {
      yield current.value
      current = current.next
    }
  }
}
