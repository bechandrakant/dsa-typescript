import Queue from "./Queue";

describe("Queue", () => {
  let queue: Queue;

  beforeEach(() => {
    queue = new Queue(1);
  });

  test("creation", () => {
    expect(queue).not.toBeNull();
    expect(queue.head).not.toBeNull();
    expect(queue.head?.value).toBe(1);
    expect(queue.tail).not.toBeNull();
    expect(queue.tail?.value).toBe(1);
    expect(queue.length).toBe(1);
  });

  test("enqueue", () => {
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.toArray()).toEqual([1, 2, 3]);
  });

  test("dequeue", () => {
    queue.dequeue();
    expect(queue.head).toBeNull();
    expect(queue.tail).toBeNull();
    expect(queue.length).toBe(0);
    expect(queue.dequeue()).toBeFalsy();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.toArray()).toEqual([1, 2, 3]);
    queue.dequeue();
    expect(queue.toArray()).toEqual([2, 3]);
  });

  test("toArray", () => {
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.toArray()).toEqual([1, 2, 3]);
  });
});
