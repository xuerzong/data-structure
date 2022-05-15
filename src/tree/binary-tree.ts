import { isNull } from '@/_utils/is';

export class BinaryTreeNode<T> {
  key: T;
  right: BinaryTreeNode<T> | null;
  left: BinaryTreeNode<T> | null;

  constructor(key: T) {
    this.key = key;
    this.right = null;
    this.left = null;
  }
}

interface IBinaryTree<T> {
  insert(key: T): void;
}

class BinaryTree<T = number> implements IBinaryTree<T> {
  private root: BinaryTreeNode<T> | null;

  constructor() {
    this.root = null;
  }
  /**
   * Get root for test
   * @returns this.root
   */
  getRoot() {
    return this.root;
  }

  insert(key: T) {
    const newNode = new BinaryTreeNode<T>(key);
    if (this.root === null) {
      this.root = newNode;
      return;
    }
    this.insertNode(this.root, newNode);
  }

  private insertNode(root: BinaryTreeNode<T>, node: BinaryTreeNode<T>) {
    /**
     * if `new node key` is lower than `root key`
     * insert node into root left
     */
    if (root.key > node.key) {
      if (isNull(root.left)) {
        root.left = node;
        return;
      }
      this.insertNode(root.left, node);
    } else {
      /**
       * if `new node key` is higher than `root key`
       * insert node into root right
       */
      if (isNull(root.right)) {
        root.right = node;
        return;
      }
      this.insertNode(root.right, node);
    }
  }
}

export default BinaryTree;
