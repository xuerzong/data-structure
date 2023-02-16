import { isNull } from '@/_utils/is'

export class SinglyLinkedNode<T> {
  value: T
  next: SinglyLinkedNode<T> | null

  constructor(value: T) {
    this.value = value
    this.next = null
  }

  *[Symbol.iterator]() {
    let current: SinglyLinkedNode<T> | null = this
    while (current) {
      yield current.value
      current = current.next
    }
  }
}

interface ISinglyLinkedList<T> {
  readonly head: SinglyLinkedNode<T> | null

  readonly length: number

  insert(value: T): void

  insertByIndex(index: number, value: T): void

  insertFromHead(value: T): void

  insertFromTail(value: T): void

  findByIndex(index: number): SinglyLinkedNode<T> | null

  updateByIndex(index: number, value: T): void

  removeByIndex(index: number): void

  [Symbol.iterator](): IterableIterator<T>
}

export default class SinglyLinkedList<T> implements ISinglyLinkedList<T> {
  private _head: SinglyLinkedNode<T> | null
  private _length: number = 0

  constructor() {
    this._head = null
  }

  get length() {
    return this._length
  }

  get head() {
    return this._head
  }

  insert(value: T) {
    this._length++
    const newNode = new SinglyLinkedNode(value)

    if (isNull(this._head)) {
      return (this._head = newNode)
    }

    newNode.next = this._head
    this._head = newNode
  }

  insertByIndex(index: number, value: T) {
    if (this._length === 0) {
      return this.insertFromHead(value)
    }

    if (index > this._length) {
      // TODO optimize
      return this.insertFromTail(value)
    }

    this._length = this._length + 1
    const preNode = this.findByIndex(index - 1) as SinglyLinkedNode<T>
    const newNode = new SinglyLinkedNode(value)
    newNode.next = preNode.next
    preNode.next = newNode
  }

  insertFromHead(value: T) {
    this.insert(value)
  }

  insertFromTail(value: T) {
    this.insertByIndex(this._length, value)
  }

  findByIndex(index: number) {
    let headCache = this._head

    const over_length = index < 0 || index > this._length
    if (over_length) {
      return null
    }

    let i = 0
    while (i++ < index) {
      headCache = headCache!.next
    }
    return headCache
  }

  updateByIndex(index: number, value: T) {
    const curNode = this.findByIndex(index)
    if (isNull(curNode)) {
      // pass
    } else {
      curNode.value = value
    }
  }

  removeByIndex(index: number) {
    if (index === 0 && this._head) {
      this._length--
      return (this._head = this._head.next)
    }

    const preNode = this.findByIndex(index - 1)
    if (preNode) {
      this._length--
      preNode.next = preNode.next?.next || null
    }
  }

  *[Symbol.iterator]() {
    let current = this._head
    while (current) {
      yield current.value
      current = current.next
    }
  }
}
