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
  len(): number

  insert(value: T): void

  insertByIndex(index: number, value: T): void

  insertFromHead(value: T): void

  insertFromTail(value: T): void

  findByIndex: (index: number) => DoublyLinkedNode<T> | null

  updateByIndex(index: number, value: T): void

  removeByIndex(index: number): void

  toArray(): T[]
}

export default class DoublyLinkedList<T = any> implements IDoublyLinkedList<T> {
  head: DoublyLinkedNode<T> | null
  private length: number = 0

  constructor() {
    this.head = null
  }

  len() {
    return this.length
  }

  insert(value: T) {
    this.length = this.length + 1
    const newNode = new DoublyLinkedNode(value)

    newNode.next = this.head
    if (isNotNull<DoublyLinkedNode<T>>(this.head)) {
      this.head.prev = newNode
    }

    this.head = newNode
  }

  insertByIndex(index: number, value: T) {
    if (this.length === 0) {
      return this.insertFromHead(value)
    }

    if (this.length > this.length) {
      // TODO optimize
      return this.insertFromTail(value)
    }

    this.length = this.length + 1

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
    this.insertByIndex(this.length, value)
  }

  findByIndex(index: number) {
    let headCache = this.head

    const oversize = index < 0 || index > this.length
    if (oversize) {
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
    const curNode = this.findByIndex(index)

    if (isNull(curNode)) {
      return
    }

    this.length = this.length - 1

    if (isNull(curNode.prev)) {
      // current node is head node
      this.head = curNode.next
    } else {
      curNode.prev.next = curNode.next
    }

    if (isNotNull<DoublyLinkedNode<T>>(curNode.next)) {
      curNode.next.prev = curNode.prev
    }
  }

  toArray() {
    const result: T[] = []

    let headCache = this.head

    while (headCache) {
      result.push(headCache.value)
      headCache = headCache.next
    }

    return result
  }
}
