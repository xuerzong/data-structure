import BinaryTree, { BinaryTreeNode } from './binary-tree'

const bTree = new BinaryTree<number>()

describe('Tree.BinaryTree', () => {
  it('insert: show be the new node', () => {
    bTree.insert(1)
    expect(bTree.root).toEqual(new BinaryTreeNode(1))

    bTree.insert(0)
    bTree.insert(2)
    expect(bTree.root?.left).toEqual(new BinaryTreeNode(0))
    expect(bTree.root?.right).toEqual(new BinaryTreeNode(2))
  })

  it('order: should return order key array', () => {
    expect(bTree.preOrder()).toEqual([1, 0, 2])

    expect(bTree.inOrder()).toEqual([0, 1, 2])

    expect(bTree.postOrder()).toEqual([0, 2, 1])
  })

  it('generate: should generate a tree by order', () => {
    const tree = BinaryTree.generate(5, 2, 0, 1, 3, 1, 4)
    expect(tree.inOrder()).toEqual([1, 2, 3, 5, 1, 0, 4])
  })

  it('bsf: should return order value list', () => {
    const input = [5, 2, 0, 1, 3, 1, 4]
    const tree = BinaryTree.generate(...input)
    expect(tree.bfs()).toEqual(input)
  })
})
