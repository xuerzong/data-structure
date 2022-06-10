interface IQueue<T> {
  enqueue: (value: T) => void

  dequeue: () => T

  len: () => number
}

export default class Queue<T = unknown> implements IQueue<T> {
  private readonly value: T[]
  head: T | undefined

  constructor() {
    this.value = [] as T[]
  }

  len() {
    return this.value.length
  }

  enqueue<U extends T[]>(...args: U) {
    if (args.length > 0 && this.len() === 0) {
      this.head = args[0]
    }
    this.value.push(...args)
  }

  dequeue() {
    if (this.len() === 0) {
      throw new Error('underflow')
    }
    const headRes = this.value.shift() as T
    this.head = this.value[0]
    return headRes
  }
}
