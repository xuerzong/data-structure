import { isNotNull, isNull } from '@/_utils/is'

export class SinglyLinkedNode<T> {
  key: T
  next: SinglyLinkedNode<T> | null

  constructor(key: T) {
    this.key = key
    this.next = null
  }
}

interface ISinglyLinkedList<T> {
  getHead(): SinglyLinkedNode<T> | null

  len(): number

  insert(key: T): void

  search(key: T): SinglyLinkedNode<T> | null

  remove(key: T): void

  /**
   * Get list of key in order
   */
  toString(): T[]
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

  insert(key: T) {
    this.length = this.length + 1
    const newNode = new SinglyLinkedNode(key)

    if (isNull(this.head)) {
      return (this.head = newNode)
    }

    newNode.next = this.head
    this.head = newNode
  }

  search(key: T) {
    let headCache = this.head
    while (isNotNull<SinglyLinkedNode<T>>(headCache) && headCache.key !== key) {
      headCache = headCache.next
    }
    return headCache
  }

  remove(key: T) {
    if (this.head?.key === key) {
      this.length = this.length - 1
      return (this.head = this.head.next)
    }

    let headCache = new SinglyLinkedNode(key)
    headCache.next = this.head

    while (headCache?.next) {
      if (headCache.next.key === key) {
        headCache.next = headCache.next?.next || null
        this.length = this.length - 1
        break
      }
      headCache = headCache.next
    }
  }

  toString(): T[] {
    const result: T[] = []

    let headCache = this.head

    while (headCache) {
      result.push(headCache.key)
      headCache = headCache.next
    }

    return result
  }
}
