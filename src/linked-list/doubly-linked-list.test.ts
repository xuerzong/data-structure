import DoublyLinkedList, { DoublyLinkedNode } from './doubly-linked-list'

let linked: DoublyLinkedList<number>

describe('LinkedList.DoublyLinkedList', () => {
  beforeEach(() => {
    linked = new DoublyLinkedList()
  })
  it('insert: should be the new node', () => {
    const tmpNode1 = new DoublyLinkedNode(0)
    const tmpNode2 = new DoublyLinkedNode(1)
    linked.insert(0)
    expect(linked.len()).toBe(1)
    expect(linked.head).toEqual(tmpNode1)

    linked.insert(1)
    tmpNode1.prev = tmpNode2
    tmpNode2.next = tmpNode1
    expect(linked.len()).toBe(2)
    expect(linked.head?.next).toEqual(tmpNode1)
  })

  it('toArray: should return the key list', () => {
    linked.insert(0)
    linked.insert(1)
    expect(linked.toArray()).toEqual([1, 0])

    linked.insert(2)
    expect(linked.toArray()).toEqual([2, 1, 0])
  })

  it('insertByIndex: should insert new node at index', () => {
    linked.insertByIndex(0, 0)
    linked.insertByIndex(1, 1)
    expect(linked.len()).toBe(2)
    expect(linked.toArray()).toEqual([0, 1])

    linked.insertByIndex(1, 2)
    expect(linked.len()).toBe(3)
    expect(linked.toArray()).toEqual([0, 2, 1])
  })

  it('insertFromHead: should insert new node at first index', () => {
    linked.insertFromHead(0)
    linked.insertFromHead(1)
    expect(linked.len()).toBe(2)
    expect(linked.toArray()).toEqual([1, 0])

    linked.insertFromHead(2)
    expect(linked.len()).toBe(3)
    expect(linked.toArray()).toEqual([2, 1, 0])
  })

  it('insertFromTail: should insert new node at last index', () => {
    linked.insertFromTail(0)
    linked.insertFromTail(1)
    expect(linked.len()).toBe(2)
    expect(linked.toArray()).toEqual([0, 1])

    linked.insertFromTail(2)
    expect(linked.len()).toBe(3)
    expect(linked.toArray()).toEqual([0, 1, 2])
  })

  it('findByIndex: should return the key at index', () => {
    linked.insert(0)
    linked.insert(1)
    expect(linked.findByIndex(0)?.value).toEqual(1)
    expect(linked.findByIndex(1)?.prev?.value).toEqual(1)

    expect(linked.findByIndex(-1)).toBe(null)
    expect(linked.findByIndex(linked.len() + 1)).toBe(null)
  })

  it('updateByIndex: should update the key at index', () => {
    linked.insert(0)
    linked.insert(1)
    linked.updateByIndex(0, 4)
    linked.updateByIndex(1, 3)
    expect(linked.toArray()).toEqual([4, 3])
  })

  it('removeByIndex: should remove the key at index', () => {
    linked.insert(0)
    linked.insert(1)
    linked.insert(2)

    linked.removeByIndex(1)
    expect(linked.len()).toBe(2)
    expect(linked.toArray()).toEqual([2, 0])
  })
})
