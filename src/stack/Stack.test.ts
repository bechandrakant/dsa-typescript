import { Stack } from "./Stack";

describe("Stack", () => {
  let stack: Stack;

  beforeEach(() => {
    stack = new Stack(1);
  });

  test("creation", () => {
    expect(stack).not.toBeNull();
    expect(stack.top).not.toBeNull();
    expect(stack.top?.value).toBe(1);
    expect(stack.length).toBe(1);
  });

  test("push", () => {
    stack.push(2);
    stack.push(3);
    expect(stack.toArray()).toEqual([3, 2, 1]);
  });

  test("pop", () => {
    stack.pop();
    expect(stack.top).toBeNull();
    expect(stack.pop()).toBeFalsy();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.toArray()).toEqual([3, 2, 1]);
  });

  test("toArray", () => {
    stack.push(2);
    stack.push(3);
    expect(stack.toArray()).toEqual([3, 2, 1]);
  });
});
