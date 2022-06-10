import { isNull } from '@/_utils/is'

export class BinaryTreeNode<T> {
  key: T
  right: BinaryTreeNode<T> | null
  left: BinaryTreeNode<T> | null

  constructor(key: T) {
    this.key = key
    this.right = null
    this.left = null
  }
}

interface IBinaryTree<T> {
  insert(key: T): void

  preOrder(): T[]

  inOrder(): T[]

  postOrder(): T[]
}

class BinaryTree<T = number> implements IBinaryTree<T> {
  private root: BinaryTreeNode<T> | null

  constructor() {
    this.root = null
  }
  /**
   * Get root for test
   * @returns this.root
   */
  getRoot() {
    return this.root
  }

  insert(key: T) {
    const newNode = new BinaryTreeNode<T>(key)
    if (this.root === null) {
      this.root = newNode
      return
    }
    this.insertNode(this.root, newNode)
  }

  private insertNode(root: BinaryTreeNode<T>, node: BinaryTreeNode<T>) {
    /**
     * if `new node key` is lower than `root key`
     * insert node into root left
     */
    if (root.key > node.key) {
      if (isNull(root.left)) {
        root.left = node
        return
      }
      this.insertNode(root.left, node)
    } else {
      /**
       * if `new node key` is higher than `root key`
       * insert node into root right
       */
      if (isNull(root.right)) {
        root.right = node
        return
      }
      this.insertNode(root.right, node)
    }
  }

  preOrder() {
    const result: T[] = []

    const _preOrder = (root: BinaryTreeNode<T> | null) => {
      if (isNull(root)) {
        return
      }
      result.push(root.key)
      _preOrder(root.left)
      _preOrder(root.right)
    }

    _preOrder(this.root)

    return result
  }

  inOrder() {
    const result: T[] = []

    const _inOrder = (root: BinaryTreeNode<T> | null) => {
      if (isNull(root)) {
        return
      }
      _inOrder(root.left)
      result.push(root.key)
      _inOrder(root.right)
    }

    _inOrder(this.root)

    return result
  }

  postOrder() {
    const result: T[] = []

    const _postOrder = (root: BinaryTreeNode<T> | null) => {
      if (isNull(root)) {
        return
      }
      _postOrder(root.left)
      _postOrder(root.right)
      result.push(root.key)
    }

    _postOrder(this.root)

    return result
  }
}

export default BinaryTree
