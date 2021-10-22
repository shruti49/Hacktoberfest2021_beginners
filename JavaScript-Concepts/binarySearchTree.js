// AUTHOR: Shiv Shakti Bharti
// JavaScript Concept: Binary Tree Implementation with JS
// GITHUB: https://github.com/Shiv-git1

/* What is BST
.Every left child has a smaller value than its parent
.Every right child has a larger value than its parent
.Every node can contain from 0 to 2 children
*/

// Function to define the BST
function TreeNode(val, left, right) {
    this.val = val
    this.left = left
    this.right = right
}

// INORDER TRAVERSAL
// The Inorder algorithm traverses the tree nodes from left, to mid, to right.
const inorder = (root) => {
    const nodes = []
    if (root) {
        inorder(root.left)
        nodes.push(root.val)
        inorder(root.right)
    }
    return nodes
}

// POSTORDER TRAVERSAL
// Postorder traversal visits the tree nodes from left, to right, to mid.
const postorder = (root) => {
    const nodes = []
    if (root) {
        postorder(root.left)
        postorder(root.right)
        nodes.push(root.val)
    }
    return nodes
}

// PREORDER TRAVERSAL
// Postorder traversal visits the tree nodes from mid, to left, to right.
const preorder = (root) => {
    const nodes = []
    if (root) {
        nodes.push(root.val)
        preorder(root.left)
        preorder(root.right)
    }
    return nodes
}

// A valid BST
const isValidBST = (root) => {
    const helper = (node, min, max) => {
        if (!node) return true
        if (node.val <= min || node.val >= max) return false
        return helper(node.left, min, node.val) && helper(node.right, node.val, max)
    }
    return helper(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)
}

// Find the maximum depth of BST
const maxDepth = function (root) {
    const calc = (node) => {
        if (!node) return 0
        return Math.max(1 + calc(node.left), 1 + calc(node.right))
    }
    return calc(root)
};

