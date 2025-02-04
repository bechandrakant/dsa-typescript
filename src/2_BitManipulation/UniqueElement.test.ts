import { findUnique, findUnique2, findUnique3 } from "./UniqueElement";

test("findUnique", () => {
  expect(findUnique([1, 2, 1])).toBe(2);
  expect(findUnique([1])).toBe(1);
});

test("findUnique2", () => {
  expect(findUnique2([1, 2, 1, 3])).toEqual(expect.arrayContaining([2, 3]));
});

test("findUnique3", () => {
  expect(findUnique3([1, 2, 1, 1, 2, 2, 4, 3, 3, 3])).toBe(4);
});
