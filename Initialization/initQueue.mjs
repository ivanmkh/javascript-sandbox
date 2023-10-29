import { Queue } from "../Data Structures/Queue.mjs";

export function initQueue() {
    let queue = new Queue();
    
    queue.push(1);
    queue.push(2);
    queue.push(3);
    queue.push(4);
    queue.push(5);
    queue.push(6);

    return queue;
};