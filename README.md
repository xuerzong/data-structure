# data-structure

Data structures implemented by typescript.

## How to use

```bash
yarn add @xuerzong/data-structure
```

### BinaryTree

```typescript
import { BinaryTree, BinaryTreeNode } from '@xuerzong/data-structure'

type TreeNode = BinaryTreeNode<number>

/**
 * @reference https://leetcode.cn/problems/invert-binary-tree/ 
 */
function invertTree(root: TreeNode | null): TreeNode | null {
  if(root === null) {
    return root
  }

  [root.left, root.right] = [root.right, root.left]

  invertTree(root.left)
  invertTree(root.right)

  return root
}

const tree = BinaryTree.generate(...[2, 1, 3])
invertTree(tree.root)
console.log(tree.bfs()) // [2, 1, 3]
```

## To do list

- [x] Queue
- [x] Stack
- [x] LinkedList
- [x] BinaryTree

## License

[MIT](./LICENSE)
