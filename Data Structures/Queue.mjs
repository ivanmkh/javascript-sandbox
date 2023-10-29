import { Node } from "./Node.mjs";

export class Queue {
    constructor() {
        this.root = new Node();
        this.last = this.root;
        this.size = 0;
    };

    push(value) {
        let newNode = new Node(value);
        this.last.next = newNode;
        this.last = newNode;
        this.size++;
    };

    pop() {
        let node = this.root.next;
        this.root.next = this.root.next.next || null;
        return node.data;
    };
}