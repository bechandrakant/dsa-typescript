export class DLL_Node {
  value: number;
  next: DLL_Node | null;
  previous: DLL_Node | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

export class DoublyLinkedList {
  head: DLL_Node | null;
  tail: DLL_Node | null;
  length: number;

  constructor(value: number) {
    const newNode = new DLL_Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }

  addFirst(value: number) {
    const newNode = new DLL_Node(value);
    if (this.head) {
      newNode.next = this.head;
      this.head.previous = newNode;
      this.head = newNode;
    } else {
      this.head = newNode;
      this.tail = newNode;
    }
    this.length++;
  }
}
