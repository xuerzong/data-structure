import SinglyLinkedList, { SinglyLinkedNode } from './singly-linked-list'

let linked: SinglyLinkedList<number>
describe('LinkedList.SinglyLinkedList', () => {
  beforeEach(() => {
    linked = new SinglyLinkedList()
  })

  it('unshift: should insert new node from head', () => {
    linked.unshift(0)
    expect(linked.length).toBe(1)
    expect(linked.head?.value).toBe(0)

    linked.unshift(1)
    expect(linked.length).toBe(2)
    expect(linked.head?.value).toBe(1)
    expect(linked.head?.next?.value).toBe(0)
  })

  it('shift: should return the head node', () => {
    linked.unshift(0)
    linked.unshift(1)
    linked.unshift(2)
    expect(linked.length).toBe(3)
    expect(linked.shift()).toBe(2)
    expect(linked.length).toBe(2)
    expect(linked.head?.value).toBe(1)
    expect(linked.head?.next?.value).toBe(0)

    linked.shift()
    linked.shift()
    expect(linked.length).toBe(0)
    expect(linked.head).toBe(null)
  })

  it('push: should insert new node from tail', () => {
    linked.push(0)
    linked.push(1)
    expect(linked.length).toBe(2)
    expect([...linked]).toEqual([0, 1])

    linked.push(2)
    expect(linked.length).toBe(3)
    expect([...linked]).toEqual([0, 1, 2])
  })

  it('pop: should return the tail node', () => {
    linked.push(0)
    linked.push(1)
    linked.push(2)
    expect(linked.length).toBe(3)
    expect(linked.pop()).toBe(2)
    expect(linked.length).toBe(2)
    expect([...linked]).toEqual([0, 1])
    linked.pop()
    linked.pop()
    expect(linked.length).toBe(0)
    expect([...linked]).toEqual([])
  })

  it('remove: should remove the node with the given value', () => {
    linked.push(0)
    linked.push(1)
    linked.push(2)
    expect(linked.length).toBe(3)
    expect(linked.remove(1)).toBe(true)
    expect(linked.length).toBe(2)
    expect([...linked]).toEqual([0, 2])

    expect(linked.remove(1)).toBe(false)
    expect(linked.length).toBe(2)
    expect([...linked]).toEqual([0, 2])

    expect(linked.remove(0)).toBe(true)
    expect(linked.length).toBe(1)
    expect([...linked]).toEqual([2])

    expect(linked.remove(2)).toBe(true)
    expect(linked.length).toBe(0)
    expect([...linked]).toEqual([])
  })

  it('removeAll: should remove all the nodes with the given value', () => {
    linked.push(0)
    linked.push(1)
    linked.push(1)
    linked.push(2)
    expect(linked.length).toBe(4)
    expect(linked.removeAll(1)).toBe(2)
    expect(linked.length).toBe(2)
    expect([...linked]).toEqual([0, 2])

    expect(linked.removeAll(1)).toBe(0)
    expect(linked.length).toBe(2)
    expect([...linked]).toEqual([0, 2])

    expect(linked.removeAll(0)).toBe(1)
    expect(linked.length).toBe(1)
    expect([...linked]).toEqual([2])

    expect(linked.removeAll(2)).toBe(1)
    expect(linked.length).toBe(0)
    expect([...linked]).toEqual([])
  })

  it('has: should return true if the value exists', () => {
    linked.push(0)
    linked.push(1)
    linked.push(2)
    expect(linked.length).toBe(3)
    expect(linked.has(1)).toBe(true)
    expect(linked.has(3)).toBe(false)
  })

  it('toArray: should return the value list', () => {
    linked.unshift(0)
    linked.unshift(1)
    expect(linked.length).toBe(2)
    expect([...linked]).toEqual([1, 0])

    linked.unshift(2)
    expect(linked.length).toBe(3)
    expect([...linked]).toEqual([2, 1, 0])
  })
})

describe('LinkedList.SinglyLinkedNode', () => {
  it('should be iterable', () => {
    const node = new SinglyLinkedNode(1)
    expect([...node]).toEqual([1])
  })
})
