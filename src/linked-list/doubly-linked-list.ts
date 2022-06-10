import { isNull, isNotNull } from '@/_utils/is'

export class DoublyLinkedNode {
  key: number | null
  prev: DoublyLinkedNode | null
  next: DoublyLinkedNode | null
  constructor(key: number) {
    this.key = key
    this.prev = null
    this.next = null
  }
}

interface IDoublyLinkedList {
  insert: (key: number) => void

  search: (key: number) => DoublyLinkedNode | null

  remove: (key: number) => void
}

export default class DoublyLinkedList implements IDoublyLinkedList {
  head: DoublyLinkedNode | null

  constructor() {
    this.head = null
  }

  insert(key: number) {
    const newNode = new DoublyLinkedNode(key)
    newNode.next = this.head
    if (isNotNull<DoublyLinkedNode>(this.head)) {
      this.head.prev = newNode
    }
    this.head = newNode
  }

  search(key: number) {
    let headCache = this.head
    while (isNotNull<DoublyLinkedNode>(headCache) && headCache.key !== key) {
      headCache = headCache.next
    }
    return headCache
  }

  remove(key: number) {
    if (isNull(this.head)) {
      return
    }
    const curNode = this.search(key)
    if (isNotNull<DoublyLinkedNode>(curNode)) {
      if (isNotNull<DoublyLinkedNode>(curNode.prev)) {
        curNode.prev.next = curNode.next
      } else {
        this.head = curNode.next
      }

      if (isNotNull<DoublyLinkedNode>(curNode.next)) {
        curNode.next.prev = curNode.prev
      }
    }
  }
}
