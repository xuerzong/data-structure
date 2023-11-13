import DoublyLinkedList, { DoublyLinkedNode } from './doubly-linked-list'

let linked: DoublyLinkedList<number>

describe('LinkedList.DoublyLinkedList', () => {
  beforeEach(() => {
    linked = new DoublyLinkedList()
  })
  it('unshift: should insert new node from head', () => {
    linked.unshift(0)
    expect(linked.length).toBe(1)
    expect(linked.head?.value).toBe(0)
    expect(linked.tail?.value).toBe(0)

    linked.unshift(1)
    expect(linked.length).toBe(2)
    expect(linked.head?.value).toBe(1)
    expect(linked.tail?.value).toBe(0)

    expect([...linked]).toEqual([1, 0])
  })

  it('shift: should return the head node', () => {
    linked.unshift(0)
    linked.unshift(1)
    linked.unshift(2)

    expect(linked.shift()).toBe(2)
    expect(linked.length).toBe(2)

    expect(linked.head?.value).toBe(1)
    expect(linked.tail?.value).toBe(0)

    linked.shift()
    linked.shift()
    expect(linked.length).toBe(0)
    expect(linked.head).toBe(null)
    expect(linked.tail).toBe(null)
  })

  it('push: should insert new node from tail', () => {
    linked.push(0)
    linked.push(1)
    expect(linked.length).toBe(2)
    expect(linked.head?.value).toBe(0)
    expect(linked.tail?.value).toBe(1)

    linked.push(2)
    expect(linked.length).toBe(3)
    expect(linked.head?.value).toBe(0)
    expect(linked.tail?.value).toBe(2)

    expect([...linked]).toEqual([0, 1, 2])
  })

  it('pop: should return the tail node', () => {
    linked.push(0)
    linked.push(1)
    linked.push(2)

    expect(linked.pop()).toBe(2)
    expect(linked.length).toBe(2)

    expect(linked.head?.value).toBe(0)
    expect(linked.tail?.value).toBe(1)

    linked.pop()
    linked.pop()
    expect(linked.length).toBe(0)
    expect(linked.head).toBe(null)
    expect(linked.tail).toBe(null)
  })

  it('has: should return true if the given value exists in the list', () => {
    linked.push(0)
    linked.push(1)
    linked.push(2)

    expect(linked.has(1)).toBe(true)
    expect(linked.has(3)).toBe(false)
  })

  it('get: should return the node with the given value', () => {
    linked.push(0)
    linked.push(1)
    linked.push(2)

    expect(linked.get(1)?.value).toBe(1)
    expect(linked.get(3)).toBe(null)
  })
})

describe('LinkedList.DoublyLinkedNode', () => {
  it('should be iterable', () => {
    const node = new DoublyLinkedNode(1)
    expect([...node]).toEqual([1])
  })
})
