import { LinkedList, LL_Node } from "./LinkedList";

describe("Linked List", () => {
  test("new Node creation", () => {
    const node = new LL_Node(5);
    expect(node).not.toBeNull();
    expect(node.value).toBe(5);
    expect(node.next).toBeNull();
  });

  test("Linked List Creation", () => {
    const ll = new LinkedList(4);
    expect(ll).not.toBeNull();
    expect(ll.length).toBe(1);
    expect(ll.head).not.toBeNull();
    expect(ll.tail).not.toBeNull();
  });

  describe("Linked List methods", () => {
    let ll: LinkedList;

    beforeEach(() => {
      ll = new LinkedList(4);
    });

    test("add should add element at the given index", () => {
      ll.addFirst(1);
      ll.add(2, 1);
      ll.add(3, 2);
      expect(ll.head?.value).toBe(1);
      expect(ll.head?.next).not.toBeNull();
      expect(ll.tail?.value).toBe(4);
      expect(ll.tail?.next).toBe(null);
      expect(ll.length).toBe(4);
      expect(ll.get(0)?.value).toBe(1);
      expect(ll.get(1)?.value).toBe(2);
      expect(ll.get(2)?.value).toBe(3);
      expect(ll.get(3)?.value).toBe(4);
    });

    test("addFirst should add a new node at start", () => {
      ll.addFirst(3);
      expect(ll.head?.value).toBe(3);
      expect(ll.head?.next).not.toBeNull();
      expect(ll.tail?.value).toBe(4);
      expect(ll.tail?.next).toBeNull();
      expect(ll.length).toBe(2);

      ll.removeFirst();
      ll.removeFirst();
      ll.addFirst(5);

      expect(ll.head?.value).toBe(5);
      expect(ll.head?.next).toBeNull();
      expect(ll.tail?.value).toBe(5);
      expect(ll.tail?.next).toBeNull();
      expect(ll.length).toBe(1);
    });

    test("addLast should add a new node at end", () => {
      ll.addLast(3);
      expect(ll.head?.value).toBe(4);
      expect(ll.head?.next).not.toBeNull();
      expect(ll.tail?.value).toBe(3);
      expect(ll.tail?.next).toBe(null);
      expect(ll.length).toBe(2);

      ll.removeFirst();
      ll.removeFirst();
      ll.addLast(5);

      expect(ll.head?.value).toBe(5);
      expect(ll.head?.next).toBeNull();
      expect(ll.tail?.value).toBe(5);
      expect(ll.tail?.next).toBeNull();
      expect(ll.length).toBe(1);
    });

    test("remove should remove node at given index", () => {
      ll.addFirst(3);
      ll.addFirst(2);
      ll.addFirst(1);
      ll.remove(2);
      expect(ll.length).toBe(3);
      expect(ll.get(0)?.value).toBe(1);
      expect(ll.get(1)?.value).toBe(2);
      expect(ll.get(2)?.value).toBe(4);
      expect(ll.remove(-1)).toBeUndefined();
      expect(ll.remove(4)).toBeUndefined();

      ll.remove(0);
      ll.remove(0);
      ll.remove(0);

      expect(ll.head).toBeNull();
      expect(ll.tail).toBeNull();
      expect(ll.length).toBe(0);
    });

    test("removeLast should remove last node", () => {
      ll.addFirst(5);
      ll.removeLast();
      expect(ll.tail?.next).toBeNull();
      expect(ll.tail?.value).toBe(5);
      expect(ll.head?.next).toBeNull();
      expect(ll.head?.value).toBe(5);
      expect(ll.removeLast()).toBeUndefined();
    });

    test("removeFirst should remove first node", () => {
      ll.addLast(5);
      ll.removeFirst();
      expect(ll.tail?.next).toBeNull();
      expect(ll.tail?.value).toBe(5);
      expect(ll.head?.next).toBeNull();
      expect(ll.head?.value).toBe(5);
      expect(ll.removeFirst()).toBeUndefined();
    });

    test("get should get element at that index", () => {
      ll.addLast(5);
      ll.addLast(6);
      ll.addLast(7);
      ll.addFirst(3);
      expect(ll.get(-1)).toBeUndefined();
      expect(ll.get(0)?.value).toBe(3);
      expect(ll.get(1)?.value).toBe(4);
      expect(ll.get(2)?.value).toBe(5);
      expect(ll.get(3)?.value).toBe(6);
      expect(ll.get(4)?.value).toBe(7);
      expect(ll.get(5)).toBeUndefined();
    });

    test("set should update element at that index", () => {
      ll.addLast(5);
      ll.addFirst(3);
      expect(ll.set(-1, 9)).toBeUndefined();
      expect(ll.set(0, 6)?.get(0)?.value).toBe(6);
      expect(ll.set(1, 7)?.get(1)?.value).toBe(7);
      expect(ll.set(2, 8)?.get(2)?.value).toBe(8);
      expect(ll.set(5, 9)).toBeUndefined();
    });

    test("toArray should return an array with element values", () => {
      ll.addLast(5);
      ll.addFirst(3);
      expect(ll.toArray()).toEqual([3, 4, 5]);
    });

    test("reverse Linked List", () => {
      ll.reverse();
      expect(ll.toArray()).toEqual([4]);
      ll.removeLast();
      ll.reverse();
      expect(ll.head).toBeNull();

      ll.addLast(5);
      ll.addLast(6);
      ll.addLast(7);
      ll.addLast(8);
      ll.reverse();
      expect(ll.toArray()).toEqual([8, 7, 6, 5]);
    });
  });
});
