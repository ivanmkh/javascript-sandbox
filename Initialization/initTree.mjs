import { BinaryTree } from "../Data Structures/BinaryTree.mjs";

export function initBinaryTree() {
    let tree = new BinaryTree(10);

    tree.root.left = tree.add(20);
    tree.root.right = tree.add(30);
    tree.root.left.left = tree.add(40);
    tree.root.left.right = tree.add(50);
    
    return tree;
};