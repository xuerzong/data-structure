import { isNotNull, isNull } from '@/_utils/is';

export class SinglyLinkedNode {
  key: number;
  next: SinglyLinkedNode | null;

  constructor(key: number) {
    this.key = key;
    this.next = null;
  }
}

interface ISinglyLinkedList {
  insert: (key: number) => void;

  search: (key: number) => SinglyLinkedNode | null;

  remove: (key: number) => void;
}

export default class SinglyLinkedList implements ISinglyLinkedList {
  head: SinglyLinkedNode | null;

  constructor() {
    this.head = null;
  }

  insert(key: number) {
    const newNode = new SinglyLinkedNode(key);

    if (isNull(this.head)) {
      return (this.head = newNode);
    }

    newNode.next = this.head;
    this.head = newNode;
  }

  search(key: number) {
    let headCache = this.head;
    while (isNotNull<SinglyLinkedNode>(headCache) && headCache.key !== key) {
      headCache = headCache.next;
    }
    return headCache;
  }

  remove(key: number) {
    if (this.head?.key === key) {
      return (this.head = this.head.next);
    }

    let headTmp = new SinglyLinkedNode(key);
    headTmp.next = this.head;

    while (headTmp?.next) {
      if (headTmp.next.key === key) {
        break;
      }
      headTmp = headTmp.next;
    }

    headTmp.next = headTmp.next?.next || null;
  }
}
