import { LinkedList } from "../Data Structures/LinkedList.mjs";

export function initLinkedList() {
    let list = new LinkedList();

    list.add(1);
    list.add(2);
    list.add(3);
    list.add(4);
    list.add(5);
    list.add(6);

    return list;
}