import SinglyLinkedList from './singly-linked-list'

let linked: SinglyLinkedList<number>
describe('LinkedList.SinglyLinkedList', () => {
  beforeEach(() => {
    linked = new SinglyLinkedList()
  })

  it('insert: should be the new node', () => {
    linked.insert(0)
    expect(linked.length).toBe(1)
    expect(linked.head?.value).toBe(0)

    linked.insert(1)
    expect(linked.length).toBe(2)
    expect(linked.head?.value).toBe(1)
    expect(linked.head?.next?.value).toBe(0)
  })

  it('toArray: should return the value list', () => {
    linked.insert(0)
    linked.insert(1)
    expect(linked.length).toBe(2)
    expect([...linked]).toEqual([1, 0])

    linked.insert(2)
    expect(linked.length).toBe(3)
    expect([...linked]).toEqual([2, 1, 0])
  })

  it('insertFromHead: should insert new node from link-list head', () => {
    linked.insertFromHead(0)
    linked.insertFromHead(1)
    expect(linked.length).toBe(2)
    expect([...linked]).toEqual([1, 0])

    linked.insertFromHead(2)
    expect(linked.length).toBe(3)
    expect([...linked]).toEqual([2, 1, 0])
  })

  it('insertFromTail: should insert new node from link-list tail', () => {
    linked.insertFromTail(0)
    linked.insertFromTail(1)
    expect(linked.length).toBe(2)
    expect([...linked]).toEqual([0, 1])

    linked.insertFromTail(2)
    expect(linked.length).toBe(3)
    expect([...linked]).toEqual([0, 1, 2])
  })

  it('insertByIndex: should insert new node at index', () => {
    linked.insertByIndex(0, 0)
    linked.insertByIndex(1, 1)
    expect(linked.length).toBe(2)
    expect([...linked]).toEqual([0, 1])

    linked.insertByIndex(1, 2)
    expect(linked.length).toBe(3)
    expect([...linked]).toEqual([0, 2, 1])
  })

  it('findByIndex: should return the value at index', () => {
    linked.insert(0)
    linked.insert(1)
    expect(linked.findByIndex(0)?.value).toEqual(1)
    expect(linked.findByIndex(-1)).toBe(null)
    expect(linked.findByIndex(linked.length + 1)).toBe(null)
  })

  it('updateByIndex: should update the value at index', () => {
    linked.insert(0)
    linked.insert(1)
    linked.updateByIndex(0, 4)
    linked.updateByIndex(1, 3)
    expect([...linked]).toEqual([4, 3])
  })

  it('removeByIndex: should remove the value at index', () => {
    linked.insert(0)
    linked.insert(1)
    linked.insert(2)

    linked.removeByIndex(1)
    expect(linked.length).toBe(2)
    expect([...linked]).toEqual([2, 0])

    linked.removeByIndex(0)
    expect(linked.length).toBe(1)
    expect([...linked]).toEqual([0])
  })
})
