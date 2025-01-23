import { BinarySearchTree, BT_Node } from "./BinarySearchTree";

describe("BinarySearchTree", () => {
  test("BT_Node creation", () => {
    const btNode = new BT_Node(5);
    expect(btNode).not.toBeNull();
    expect(btNode.value).toBe(5);
    expect(btNode.left).toBeNull();
    expect(btNode.right).toBeNull();
  });

  test("BinarySearchTree creation", () => {
    const bst = new BinarySearchTree();
    expect(bst).not.toBeNull();
    expect(bst.root).toBeNull();
  });

  test("BinarySearchTree insert", () => {
    const bst = new BinarySearchTree();
    bst.insert(4);
    bst.insert(3);
    bst.insert(2);
    bst.insert(5);
    expect(bst).not.toBeNull();
    expect(bst.root).not.toBeNull();
    expect(bst.root?.value).toBe(4);
    expect(bst.root?.left?.value).toBe(3);
    expect(bst.root?.right?.value).toBe(5);
    expect(bst.insert(5)).toBeUndefined();
  });

  test("BinarySearchTree contains", () => {
    const bst = new BinarySearchTree();
    expect(bst.contains(1)).toBeFalsy();
    bst.insert(4);
    bst.insert(3);
    bst.insert(2);
    bst.insert(5);
    expect(bst.contains(1)).toBeFalsy();
    expect(bst.contains(2)).toBeTruthy();
    expect(bst.contains(3)).toBeTruthy();
    expect(bst.contains(4)).toBeTruthy();
    expect(bst.contains(5)).toBeTruthy();
    expect(bst.contains(6)).toBeFalsy();
  });
});
