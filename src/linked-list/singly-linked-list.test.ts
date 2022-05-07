import SinglyLinkedList, { SinglyLinkedNode } from './singly-linked-list';

const linked = new SinglyLinkedList();
describe('LinkedList.SinglyLinkedList', () => {
  it('insert: should be the new node', () => {
    linked.insert(0);
    expect(linked.head).toEqual(new SinglyLinkedNode(0));

    linked.insert(1);
    expect(linked.head?.key).toBe(1);
    expect(linked.head?.next).toEqual(new SinglyLinkedNode(0));
  });

  it('search: should return the index of input key', () => {
    const tmpNode1 = new SinglyLinkedNode(0);
    const tmpNode2 = new SinglyLinkedNode(1);
    tmpNode2.next = tmpNode1;

    expect(linked.search(0)).toEqual(tmpNode1);
    expect(linked.search(1)).toEqual(tmpNode2);
    expect(linked.search(2)).toBe(null);
  });

  it('remove: should remove node which key is equal key', () => {
    linked.remove(0);
    expect(linked.head).toEqual(new SinglyLinkedNode(1));

    linked.insert(2);
    linked.remove(2);
    expect(linked.head).toEqual(new SinglyLinkedNode(1));
  });
});
