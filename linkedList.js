const node = (v, n) => {return {value: v, next: n}};
const linkedList = () => {
    let head = node(0, undefined);
    let last = head;
    return {
        head: head,
        last: last,
        add: (v) => { 
            let current = node(v, undefined); 
            last.next = current; 
            last = current;
        },
        reverse: () => {
            let current = head.next;
            let previous = undefined;
            while (head.next) {
                current = head.next;
                head.next = current.next;
                current.next = previous;
                previous = current;
            }
            head.next = previous;
        },
        toString: () => {
            let current = head;
            let result = '';
            while (current.next) {
                current = current.next;
                result += current.value + " ";
            }
            console.log('Linked List values: ' + result)
        }
    }
};
let list = linkedList();
list.add(1); list.add(2); list.add(3);
list.add(4); list.add(5); list.add(6);
list.toString();
console.log('Reverse list')
list.reverse(); 
list.toString();