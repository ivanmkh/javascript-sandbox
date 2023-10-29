import { Node } from "./Node.mjs";

export class LinkedList {
    constructor() {
        this.head = new Node(0);
        this.last = this.head;
    }

    add(value) {
        let current = new Node(value);
        this.last.next = current;
        this.last = current;
    };

    reverse() {
        let current = this.head.next;
        let previous = null;
        while (this.head.next) {
            current = this.head.next;
            this.head.next = current.next;
            current.next = previous;
            previous = current;
        }
        this.head.next = previous;
    };

    toString() {
        let current = this.head;
        let result = '';
        while (current.next) {
            current = current.next;
            result += current.data + " ";
        }
        console.log('Linked List values: ' + result)
    };

}