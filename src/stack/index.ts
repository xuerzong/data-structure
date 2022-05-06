interface IStack<T> {
  push: (value: T) => void;

  pop: () => T;

  len: () => number;
}

export default class Stack<T = unknown> implements IStack<T> {
  private readonly value: T[];
  top: T | undefined;
  constructor() {
    this.value = [] as T[];
  }

  len() {
    return this.value.length;
  }

  push(value: T) {
    this.top = value;
    this.value.push(value);
  }

  pop() {
    if (this.len() === 0) {
      throw new Error('underflow');
    }
    const topRes = this.value.pop() as T;
    this.top = this.value[this.value.length - 1];
    return topRes;
  }
}
