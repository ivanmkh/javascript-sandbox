import { Queue } from "./Data Structures/Queue.mjs";
import { initLinkedList } from "./Initialization/initLinkedList.mjs";
import { initBinaryTree } from "./Initialization/initTree.mjs";
import { initQueue } from "./Initialization/initQueue.mjs";

console.log('--------------------------------------------------');
let list = initLinkedList();
list.toString();
console.log('Reverse list values ..');
list.reverse(); 
list.toString();

console.log('--------------------------------------------------');
let queue = initQueue();
console.log('First elenemt in queue: ' + queue.pop());

console.log('--------------------------------------------------');
let tree = initBinaryTree();
console.log('In-Order Traverse: ' + tree.inOrderTraverse(tree.root));
console.log('Pre-Order Traverse: ' + tree.preOrderTraverse(tree.root));
console.log('Post-Order Traverse: ' + tree.postOrderTraverse(tree.root));
console.log('Level-Order Traverse: ' + tree.levelOrderTraverse(tree.root));