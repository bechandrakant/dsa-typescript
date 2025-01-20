import { LL_Node } from "../linked-list/LinkedList";

export class Stack {
  top: LL_Node | null;
  length: number;

  constructor(value: number) {
    this.top = new LL_Node(value);
    this.length = 1;
  }

  push(value: number) {
    let newNode = new LL_Node(value);
    newNode.next = this.top;
    this.top = newNode;
    this.length++;
    return newNode;
  }

  pop() {
    if (this.length == 0) return false;
    let temp = this.top;
    if (temp) {
      this.top = temp.next;
      temp.next = null;
    }
    this.length--;
    return temp;
  }

  toArray() {
    let current = this.top;
    let arr = [];
    while (current) {
      arr.push(current.value);
      current = current.next;
    }
    return arr;
  }
}
