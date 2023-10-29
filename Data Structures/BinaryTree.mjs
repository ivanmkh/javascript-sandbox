import { BinaryTreeNode } from "./BinaryTreeNode.mjs";
import { Queue } from "./Queue.mjs";

export class BinaryTree {

    constructor(value) {
        this.root = new BinaryTreeNode(value);
    }

    add(value) {
        return new BinaryTreeNode(value);
    }

    inOrderTraverse(current) {
        if (!current) { return ""; }
        let traverseResult = "";
        traverseResult += this.inOrderTraverse(current.left);
        traverseResult += current.data + ' ';
        traverseResult += this.inOrderTraverse(current.right);
        return traverseResult;
    };

    preOrderTraverse(current) {
        if (!current) { return ""; }
        let traverseResult = "";
        traverseResult += current.data + ' ';
        traverseResult += this.inOrderTraverse(current.left);
        traverseResult += this.inOrderTraverse(current.right);
        return traverseResult;
    };

    postOrderTraverse(current) {
        if (!current) { return ""; }
        let traverseResult = "";
        traverseResult += this.inOrderTraverse(current.left);
        traverseResult += this.inOrderTraverse(current.right);
        traverseResult += current.data + ' ';
        return traverseResult;
    };

    levelOrderTraverse() {
        let current = this.root;
        let traverseResult = "";
        let queue = new Queue();
        queue.push(current.data);

        while(current) {
            if (current.left) {
                queue.push(current.left.data);
            }
    
            if (current.right) {
                queue.push(current.right.data);
            }
            current = current.left; 
        }
        
        for (let i = 0; i < queue.size; i++) {
            traverseResult += queue.pop() + ' ';
        }
    
        return traverseResult;
    };
}