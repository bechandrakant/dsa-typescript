export class LL_Node {
  value: number;
  next: LL_Node | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

export class LinkedList {
  head: LL_Node | null;
  tail: LL_Node | null;
  length: number;

  constructor(value: number) {
    const newNode: LL_Node = new LL_Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }

  add(value: number, index: number) {
    if (index < 0 || index > this.length) return undefined;

    const newNode = new LL_Node(value);
    const previous = this.get(index - 1);
    const nextElement = previous?.next;

    if (previous && previous.next && nextElement) {
      newNode.next = nextElement;
      previous.next = newNode;
    }
    this.length++;
  }

  addFirst(value: number) {
    const newNode: LL_Node = new LL_Node(value);
    if (this.length) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      this.head = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  addLast(value: number) {
    const newNode: LL_Node = new LL_Node(value);
    if (this.tail) {
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      this.head = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  remove(index: number) {
    if (index < 0 || index >= this.length) return undefined;

    let previous = this.get(index - 1);

    if (previous) {
      let element = previous.next;
      let temp = element?.next;

      if (element) element.next = null;
      if (temp) previous.next = temp;
    }

    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
  }

  removeFirst() {
    if (!this.length) return undefined;

    if (this.head && this.head.next) {
      let temp = this.head.next;
      this.head.next = null;
      this.head = temp;
    }

    this.length--;
    if (!this.length) {
      this.head = null;
      this.tail = null;
    }
  }

  removeLast() {
    if (!this.length) return undefined;
    let temp = this.head;
    let previous = temp;

    while (temp && temp.next) {
      previous = temp;
      temp = temp.next;
    }

    if (previous) {
      previous.next = null;
      this.tail = previous;
    }

    this.length--;
    if (!this.length) {
      this.head = null;
      this.tail = null;
    }
  }

  get(index: number) {
    if (index < 0 || index >= this.length) return undefined;

    let cursor = this.head;
    while (index--) {
      cursor = cursor ? (cursor.next ? cursor.next : null) : null;
    }

    return cursor;
  }

  set(index: number, value: number) {
    const element = this.get(index);
    if (element) {
      element.value = value;
    } else {
      return undefined;
    }
    return this;
  }

  reverse() {
    if (this.length <= 1) return;

    // Swap head and tail
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;

    let previous = null;
    let next = temp?.next;

    while (temp) {
      next = temp.next;
      temp.next = previous;
      previous = temp;
      temp = next;
    }
  }

  toArray() {
    let temp = this.head;
    let arr = [];
    while (temp) {
      arr.push(temp.value);
      temp = temp.next;
    }
    return arr;
  }
}
