import { twoGreaterElement } from "./TwoGreaterElement";

test("TwoGreaterElement", () => {
  expect(twoGreaterElement([1, 2, 3])).toEqual([1]);
  expect(twoGreaterElement([1, 2, 3, 4, 5])).toEqual([1, 2, 3]);
  expect(twoGreaterElement([4, 9, 6, 8, 3, 5, 2])).toEqual([4, 6, 3, 5, 2]);
});
