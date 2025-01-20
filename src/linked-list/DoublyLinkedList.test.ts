import { DLL_Node, DoublyLinkedList } from "./DoublyLinkedList";

describe("Doubly Linked List", () => {
  test("New DLL Node creation", () => {
    const dllNode = new DLL_Node(5);
    expect(dllNode).not.toBeNull();
    expect(dllNode.value).toBe(5);
    expect(dllNode.next).toBeNull();
    expect(dllNode.previous).toBeNull();
  });

  test("New Doubly LinkedList creation", () => {
    const dll = new DoublyLinkedList(5);
    expect(dll).not.toBeNull();
    expect(dll.head).not.toBeNull();
    expect(dll.head?.value).toBe(5);
    expect(dll.tail).not.toBeNull();
    expect(dll.tail?.value).toBe(5);
    expect(dll.length).toBe(1);
  });

  describe("DoublyLinkedList methods", () => {
    let dll: DoublyLinkedList;

    beforeEach(() => {
      dll = new DoublyLinkedList(5);
    });

    test("add", () => {
      dll.add(3, 0);
      expect(dll.length).toBe(2);
      expect(dll.head?.value).toBe(3);
      expect(dll.tail?.value).toBe(5);
      dll.add(4, 1);
      expect(dll.length).toBe(3);
      expect(dll.toArray()).toStrictEqual([3, 4, 5]);
      expect(dll.add(3, -1)).toBeUndefined();
      expect(dll.add(3, 5)).toBeUndefined();
      dll.removeFirst();
      dll.removeFirst();
      dll.removeFirst();
      dll.add(3, 0);
      expect(dll.toArray()).toEqual([3]);
      dll.add(6, 1);
      expect(dll.toArray()).toEqual([3, 6]);
    });

    test("addFirst", () => {
      dll.addFirst(4);
      expect(dll.length).toBe(2);
      expect(dll.head?.value).toBe(4);
      expect(dll.tail?.value).toBe(5);
      dll.removeFirst();
      dll.removeFirst();
      dll.addFirst(1);
      expect(dll.length).toBe(1);
      expect(dll.head?.value).toBe(1);
      expect(dll.tail?.value).toBe(1);
    });

    test("addLast", () => {
      dll.addLast(4);
      expect(dll.length).toBe(2);
      expect(dll.head?.value).toBe(5);
      expect(dll.tail?.value).toBe(4);
      dll.removeFirst();
      dll.removeFirst();
      dll.addLast(1);
      expect(dll.length).toBe(1);
      expect(dll.head?.value).toBe(1);
      expect(dll.tail?.value).toBe(1);
    });

    test("removeFirst", () => {
      dll.addFirst(4);
      dll.addFirst(3);
      dll.addFirst(2);
      dll.addFirst(1);
      dll.removeFirst();
      expect(dll.length).toBe(4);
      expect(dll.head?.value).toBe(2);
      expect(dll.tail?.value).toBe(5);
      dll.removeFirst();
      dll.removeFirst();
      dll.removeFirst();
      dll.removeFirst();
      expect(dll.length).toBe(0);
      expect(dll.head).toBeNull();
      expect(dll.tail).toBeNull();
      expect(dll.removeFirst()).toBeFalsy();
    });

    test("removeLast", () => {
      dll.removeLast();
      expect(dll.head).toBe(null);
      expect(dll.tail).toBe(null);
      expect(dll.length).toBe(0);
      expect(dll.removeLast()).toBeFalsy();
      dll.addLast(1);
      dll.addLast(2);
      dll.addLast(3);
      dll.addLast(4);
      expect(dll.toArray()).toEqual([1, 2, 3, 4]);
      dll.removeLast();
      expect(dll.toArray()).toEqual([1, 2, 3]);
    });

    test("removeLast", () => {
      expect(dll.remove(-1)).toBeFalsy();
      expect(dll.remove(3)).toBeFalsy();
      dll.remove(0);
      expect(dll.length).toBe(0);
      dll.addLast(1);
      dll.addLast(2);
      dll.addLast(3);
      dll.addLast(4);
      expect(dll.toArray()).toEqual([1, 2, 3, 4]);
      dll.remove(2);
      expect(dll.toArray()).toEqual([1, 2, 4]);
      dll.remove(2);
      expect(dll.toArray()).toEqual([1, 2]);
    });

    test("get should get element at that index", () => {
      dll.addLast(6);
      dll.addLast(7);
      dll.addLast(8);
      dll.addFirst(3);
      expect(dll.get(-1)).toBeUndefined();
      expect(dll.get(0)?.value).toBe(3);
      expect(dll.get(1)?.value).toBe(5);
      expect(dll.get(2)?.value).toBe(6);
      expect(dll.get(3)?.value).toBe(7);
      expect(dll.get(4)?.value).toBe(8);
      expect(dll.get(5)).toBeUndefined();
    });

    test("set should update element at that index", () => {
      dll.addLast(6);
      dll.addFirst(4);
      expect(dll.set(-1, 9)).toBeUndefined();
      expect(dll.set(0, 6)?.get(0)?.value).toBe(6);
      expect(dll.set(1, 7)?.get(1)?.value).toBe(7);
      expect(dll.set(2, 8)?.get(2)?.value).toBe(8);
      expect(dll.set(5, 9)).toBeUndefined();
    });

    test("toArray should return an array with element values", () => {
      dll.addLast(6);
      dll.addFirst(4);
      expect(dll.toArray()).toEqual([4, 5, 6]);
    });
  });
});
