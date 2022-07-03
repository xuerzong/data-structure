import SinglyLinkedList, { SinglyLinkedNode } from './singly-linked-list'

const linked = new SinglyLinkedList<number>()
describe('LinkedList.SinglyLinkedList', () => {
  it('insert: should be the new node', () => {
    // linked: []
    linked.insert(0)
    expect(linked.len()).toBe(1)
    expect(linked.getHead()).toEqual(new SinglyLinkedNode(0))

    // linked: [0]
    linked.insert(1)
    expect(linked.len()).toBe(2)
    expect(linked.getHead()?.key).toBe(1)
    expect(linked.getHead()?.next).toEqual(new SinglyLinkedNode(0))
  })

  it('search: should return the index of input key', () => {
    const tmpNode1 = new SinglyLinkedNode(0)
    const tmpNode2 = new SinglyLinkedNode(1)
    tmpNode2.next = tmpNode1

    // linked: [0, 1]
    expect(linked.search(0)).toEqual(tmpNode1)
    expect(linked.search(1)).toEqual(tmpNode2)
    expect(linked.search(2)).toBe(null)
  })

  it('remove: should remove node which key is equal key', () => {
    // linked: [1, 0]
    linked.remove(0)
    expect(linked.len()).toBe(1)
    expect(linked.getHead()).toEqual(new SinglyLinkedNode(1))

    // linked: [1]
    linked.insert(2)
    linked.remove(2)
    expect(linked.len()).toBe(1)
    expect(linked.getHead()).toEqual(new SinglyLinkedNode(1))
  })

  it('toArray: should return the key list in order', () => {
    // linked: [2, 1]
    linked.insert(2)
    expect(linked.toArray()).toEqual([2, 1])

    linked.insert(3)
    expect(linked.toArray()).toEqual([3, 2, 1])
  })
})
