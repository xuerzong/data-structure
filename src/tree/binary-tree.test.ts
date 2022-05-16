import BinaryTree, { BinaryTreeNode } from './binary-tree';

const bTree = new BinaryTree<number>();

describe('Tree.BinaryTree', () => {
  it('insert: show be the new node', () => {
    bTree.insert(1);
    expect(bTree.getRoot()).toEqual(new BinaryTreeNode(1));

    bTree.insert(0);
    bTree.insert(2);
    expect(bTree.getRoot()?.left).toEqual(new BinaryTreeNode(0));
    expect(bTree.getRoot()?.right).toEqual(new BinaryTreeNode(2));
  });
});
