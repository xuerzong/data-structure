import DoublyLinkedList, { DoublyLinkedNode } from './doubly-linked-list';

const linked = new DoublyLinkedList();

describe('LinkedList.DoublyLinkedList', () => {
  it('insert: should be the new node', () => {
    const tmpNode1 = new DoublyLinkedNode(0);
    const tmpNode2 = new DoublyLinkedNode(1);
    linked.insert(0);
    expect(linked.head).toEqual(tmpNode1);

    linked.insert(1);
    tmpNode1.prev = tmpNode2;
    tmpNode2.next = tmpNode1;
    expect(linked.head?.next).toEqual(tmpNode1);
  });

  it('search: should return the node which key is equal input key', () => {
    const tmpNode1 = new DoublyLinkedNode(0);
    const tmpNode2 = new DoublyLinkedNode(1);
    tmpNode1.prev = tmpNode2;
    tmpNode2.next = tmpNode1;
    expect(linked.search(1)).toEqual(tmpNode2);
    expect(linked.search(0)).toEqual(tmpNode1);
    expect(linked.search(2)).toBe(null);
  });
  it('delete: should remove the node which key is equal input key', () => {
    const tmpNode1 = new DoublyLinkedNode(0);
    const tmpNode2 = new DoublyLinkedNode(1);
    linked.remove(1);
    expect(linked.head).toEqual(tmpNode1);

    linked.insert(1);
    linked.remove(0);
    expect(linked.head).toEqual(tmpNode2);
  });
});
