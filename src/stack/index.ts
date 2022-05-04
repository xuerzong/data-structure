interface IStack<T> {
  size: number;

  isEmpty: () => boolean;

  push: (value: T) => void;

  pop: () => T;
}

export class Stack<T = unknown> implements IStack<T> {
  private readonly value: T[];
  size: number;
  constructor() {
    this.value = [] as T[];
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  push(value: T) {
    this.value[this.size++] = value;
  }

  pop() {
    if(this.isEmpty()) {
      throw new Error('underflow')
    }
    return this.value[--this.size]
  }
}