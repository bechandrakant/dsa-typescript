import { findUnique } from "./UniqueElement";

test("findUnique", () => {
  expect(findUnique([1, 2, 1])).toBe(2);
  expect(findUnique([1])).toBe(1);
});
