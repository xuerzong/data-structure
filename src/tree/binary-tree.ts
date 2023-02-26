import { isNull, isUndefined } from '@/_utils/is'
import chunk from '@/_utils/chunk'
import Queue from '../queue'

export class BinaryTreeNode<T> {
  value: T
  right: BinaryTreeNode<T> | null
  left: BinaryTreeNode<T> | null

  constructor(value: T) {
    this.value = value
    this.right = null
    this.left = null
  }
}

interface IBinaryTree<T> {
  insert(value: T): void

  preOrder(): T[]

  inOrder(): T[]

  postOrder(): T[]
}

class BinaryTree<T = number> implements IBinaryTree<T> {
  private _root: BinaryTreeNode<T> | null

  static generate<T extends number>(...args: (T | null)[]) {
    if (args.length <= 0) {
      throw new Error('The value list should not be empty')
    }

    if (isNull(args[0])) {
      throw new Error('The first value should not be null')
    }

    const tree = new BinaryTree<T>()
    tree.insert(args[0])

    const nodes = chunk(args.slice(1), 2)

    const queue = new Queue<BinaryTreeNode<T> | null>()
    queue.enqueue(tree.root)

    let index = 0
    while (index < nodes.length) {
      const node = nodes[index++]
      const root = queue.dequeue()
      const left = BinaryTree.generateNode(node[0])
      const right = BinaryTree.generateNode(node[1])
      queue.enqueue(left, right)
      if (root) {
        ;[root.left, root.right] = [left, right]
      }
    }

    return tree
  }

  static generateNode<T extends number>(value?: T | null) {
    if (isNull(value) || isUndefined(value)) return null
    return new BinaryTreeNode(value)
  }

  constructor() {
    this._root = null
  }

  get root() {
    return this._root
  }

  insert(value: T) {
    const newNode = new BinaryTreeNode<T>(value)
    if (this._root === null) {
      this._root = newNode
      return
    }
    this.insertNode(this._root, newNode)
  }

  private insertNode(root: BinaryTreeNode<T>, node: BinaryTreeNode<T>) {
    /**
     * if `new node key` is lower than `root key`
     * insert node into root left
     */
    if (root.value > node.value) {
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
      result.push(root.value)
      _preOrder(root.left)
      _preOrder(root.right)
    }

    _preOrder(this._root)

    return result
  }

  inOrder() {
    const result: T[] = []

    const _inOrder = (root: BinaryTreeNode<T> | null) => {
      if (isNull(root)) {
        return
      }
      _inOrder(root.left)
      result.push(root.value)
      _inOrder(root.right)
    }

    _inOrder(this._root)

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
      result.push(root.value)
    }

    _postOrder(this._root)

    return result
  }
}

export default BinaryTree
