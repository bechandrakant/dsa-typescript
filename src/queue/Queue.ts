import { LL_Node } from "../linked-list/LinkedList";

class Queue {
  head: LL_Node | null;
  tail: LL_Node | null;
  length: number;

  constructor(value: number) {
    const newNode = new LL_Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }

  enqueue(value: number) {
    // add to tail
    const newNode = new LL_Node(value);
    if (this.tail) {
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      this.head = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  dequeue() {
    // Head to next
    if (this.length == 0) return false;
    if (this.length == 1) {
      this.head = null;
      this.tail = null;
    } else {
      let temp = this.head;
      if (this.head) {
        this.head = this.head.next;
        temp && (temp.next = null);
      }
    }
    this.length--;
  }

  toArray() {
    let current = this.head;
    let arr = [];
    while (current) {
      arr.push(current.value);
      current = current.next;
    }
    return arr;
  }
}

export default Queue;
