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

  addLast(value: number) {
    const newNode = new DLL_Node(value);
    if (this.tail) {
      newNode.previous = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      this.head = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  add(value: number, index: number) {
    if (index < 0 || index > this.length) return undefined;
    else if (index == 0) this.addFirst(value);
    else if (index == this.length) this.addLast(value);
    else {
      const newNode = new DLL_Node(value);
      const prevNode = this.get(index - 1);
      if (prevNode && prevNode.next) {
        newNode.next = prevNode.next;
        newNode.previous = prevNode;
        prevNode.next.previous = newNode;
        prevNode.next = newNode;
      }
      this.length++;
    }
  }

  removeFirst() {
    if (this.head) {
      if (this.length == 1) {
        this.head = null;
        this.tail = null;
      } else {
        let temp = this.head.next;
        temp && (temp.previous = null);
        this.head.next = null;
        this.head = temp;
      }
      this.length--;
    } else {
      return false;
    }
  }

  removeLast() {
    if (this.tail) {
      if (this.length == 1) {
        this.head = null;
        this.tail = null;
      } else {
        let temp = this.tail.previous;
        temp && (temp.next = null);
        this.tail = temp;
      }
      this.length--;
    } else {
      return false;
    }
  }

  remove(index: number) {
    if (index < 0 || index >= this.length) return false;
    else if (index == 0) {
      this.removeFirst();
    } else if (index == this.length - 1) {
      this.removeLast();
    } else {
      let temp = this.get(index);
      let previous = temp?.previous;
      let next = temp?.next;
      if (previous && next) {
        previous.next = next;
        next.previous = previous;
      }
      this.length--;
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
