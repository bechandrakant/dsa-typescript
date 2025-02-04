import { smallerAndGreater } from "./SmallerAndGreater";

test("smallerAndGreater", () => {
  expect(smallerAndGreater([1])).toEqual([]);
  expect(smallerAndGreater([1, 1])).toEqual([]);
  expect(smallerAndGreater([1, 1, 2, 2])).toEqual([]);
  expect(smallerAndGreater([1, 2, 3])).toEqual([2]);
});
