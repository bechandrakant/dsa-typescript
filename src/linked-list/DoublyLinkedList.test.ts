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
  });
});
