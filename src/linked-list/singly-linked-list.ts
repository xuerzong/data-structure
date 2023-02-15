import { isNull } from '@/_utils/is'

export class SinglyLinkedNode<T> {
  value: T
  next: SinglyLinkedNode<T> | null

  constructor(value: T) {
    this.value = value
    this.next = null
  }
}

interface ISinglyLinkedList<T> {
  getHead(): SinglyLinkedNode<T> | null

  len(): number

  insert(value: T): void

  insertByIndex(index: number, value: T): void

  insertFromHead(value: T): void

  insertFromTail(value: T): void

  findByIndex(index: number): SinglyLinkedNode<T> | null

  updateByIndex(index: number, value: T): void

  removeByIndex(index: number): void

  /**
   * Get array of value in order
   */
  toArray(): T[]
}

export default class SinglyLinkedList<T> implements ISinglyLinkedList<T> {
  private head: SinglyLinkedNode<T> | null
  private length: number = 0

  constructor() {
    this.head = null
  }

  getHead() {
    return this.head
  }

  len() {
    return this.length
  }

  insert(value: T) {
    this.length = this.length + 1
    const newNode = new SinglyLinkedNode(value)

    if (isNull(this.head)) {
      return (this.head = newNode)
    }

    newNode.next = this.head
    this.head = newNode
  }

  insertByIndex(index: number, value: T) {
    if (this.length === 0) {
      return this.insertFromHead(value)
    }

    if (index > this.length) {
      // TODO optimize
      return this.insertFromTail(value)
    }

    this.length = this.length + 1
    const preNode = this.findByIndex(index - 1) as SinglyLinkedNode<T>
    const newNode = new SinglyLinkedNode(value)
    newNode.next = preNode.next
    preNode.next = newNode
  }

  insertFromHead(value: T) {
    this.insert(value)
  }

  insertFromTail(value: T) {
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
    if (index === 0 && this.head) {
      this.length = this.length - 1
      return (this.head = this.head.next)
    }

    const preNode = this.findByIndex(index - 1)
    if (preNode) {
      this.length = this.length - 1
      preNode.next = preNode.next?.next || null
    }
  }

  toArray(): T[] {
    const result: T[] = []

    let headCache = this.head

    while (headCache) {
      result.push(headCache.value)
      headCache = headCache.next
    }

    return result
  }
}
