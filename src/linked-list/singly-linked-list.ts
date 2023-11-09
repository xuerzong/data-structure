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

  readonly tail: SinglyLinkedNode<T> | null

  readonly length: number

  unshift(value: T): number

  shift(): T | null

  push(value: T): number

  pop(): T | null

  remove(value: T): boolean

  removeAll(value: T): number

  has(value: T): boolean

  [Symbol.iterator](): IterableIterator<T>
}

export default class SinglyLinkedList<T> implements ISinglyLinkedList<T> {
  private _head: SinglyLinkedNode<T> | null
  private _tail: SinglyLinkedNode<T> | null
  private _length: number = 0

  constructor() {
    this._head = null
    this._tail = null
  }

  get length() {
    return this._length
  }

  get head() {
    return this._head
  }

  get tail() {
    return this._tail
  }

  unshift(value: T) {
    this._length++
    const newNode = new SinglyLinkedNode(value)

    if (this._head === null) {
      this._head = newNode
      this._tail = this._head
    } else {
      newNode.next = this._head
      this._head = newNode
    }

    return this._length
  }

  shift(): T | null {
    // length === 0
    if (this._head === null) {
      return null
    }

    this._length--
    const oldHead = this._head
    this._head = this._head.next
    return oldHead!.value
  }

  push(value: T) {
    this._length++
    const node = new SinglyLinkedNode(value)

    if (this._head === null) {
      this._head = node
    } else {
      this._tail!.next = node
    }

    this._tail = node

    return this._length
  }

  pop() {
    if (this._length === 0) {
      return null
    }

    let current = this._head!

    if (this._length === 1) {
      this._length--
      this._head = null
      this._tail = this._head
      return current.value
    }

    this._length--
    let preNode = current

    while (current.next) {
      preNode = current
      current = current.next
    }

    this._tail = preNode
    this._tail.next = null

    return current.value
  }

  remove(value: T) {
    return Boolean(this._remove(value))
  }

  removeAll(value: T) {
    return this._remove(value, true)
  }

  private _remove(value: T, removeAll = false) {
    if (this._length === 0) {
      return 0
    }

    let current: SinglyLinkedNode<T> | null = this._head!
    let rmCnt = 0

    if (this._length === 1 && current.value === value) {
      rmCnt++
      this._length--
      this._head = null
      this._tail = this._head
      return rmCnt
    }

    // if the head node is the target node
    while (current && current.value === value) {
      this._length--
      this._head = current.next
      current = this._head
      rmCnt++
      if (!removeAll) {
        return rmCnt
      }
    }

    // all node were removed
    // `this._length === 0`
    if (current === null) {
      this._tail = null
      return rmCnt
    }

    let preNode = current

    while (current) {
      if (current.value === value) {
        rmCnt++
        this._length--
        preNode.next = current.next
        if (!removeAll) {
          break
        }
      } else {
        preNode = current
      }
      current = current.next
    }

    if (preNode.next === null) {
      this._tail = preNode
    }

    return rmCnt
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

  *[Symbol.iterator]() {
    let current = this._head
    while (current) {
      yield current.value
      current = current.next
    }
  }
}
