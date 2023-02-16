import { isNull, isNotNull } from '@/_utils/is'

export class DoublyLinkedNode<T> {
  value: T
  prev: DoublyLinkedNode<T> | null
  next: DoublyLinkedNode<T> | null

  constructor(key: T) {
    this.value = key
    this.prev = null
    this.next = null
  }
}

interface IDoublyLinkedList<T> {
  readonly length: number

  readonly head: DoublyLinkedNode<T> | null

  insert(value: T): void

  insertByIndex(index: number, value: T): void

  insertFromHead(value: T): void

  insertFromTail(value: T): void

  findByIndex: (index: number) => DoublyLinkedNode<T> | null

  updateByIndex(index: number, value: T): void

  removeByIndex(index: number): void

  [Symbol.iterator](): IterableIterator<T>
}

export default class DoublyLinkedList<T = any> implements IDoublyLinkedList<T> {
  private _head: DoublyLinkedNode<T> | null
  private _length: number = 0

  constructor() {
    this._head = null
  }

  get head() {
    return this._head
  }

  get length() {
    return this._length
  }

  insert(value: T) {
    this._length++
    const newNode = new DoublyLinkedNode(value)

    newNode.next = this._head
    if (isNotNull<DoublyLinkedNode<T>>(this._head)) {
      this._head.prev = newNode
    }

    this._head = newNode
  }

  insertByIndex(index: number, value: T) {
    if (this._length === 0) {
      return this.insertFromHead(value)
    }

    if (this._length > this._length) {
      // TODO optimize
      return this.insertFromTail(value)
    }

    this._length++

    const preNode = this.findByIndex(index - 1) as DoublyLinkedNode<T>
    const newNode = new DoublyLinkedNode(value)

    newNode.next = preNode.next

    preNode.next = newNode
    newNode.prev = preNode
  }

  insertFromHead(value: T): void {
    this.insert(value)
  }

  insertFromTail(value: T): void {
    this.insertByIndex(this._length, value)
  }

  findByIndex(index: number) {
    let _headCache = this._head

    const oversize = index < 0 || index > this._length
    if (oversize) {
      return null
    }

    let i = 0
    while (i++ < index) {
      _headCache = _headCache!.next
    }
    return _headCache
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
    const curNode = this.findByIndex(index)

    if (isNull(curNode)) {
      return
    }

    this._length--

    if (isNull(curNode.prev)) {
      // current node is _head node
      this._head = curNode.next
    } else {
      curNode.prev.next = curNode.next
    }

    if (isNotNull<DoublyLinkedNode<T>>(curNode.next)) {
      curNode.next.prev = curNode.prev
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
