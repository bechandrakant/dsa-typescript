import { sqrt } from "./SquareRoot";

test("sqrt function", () => {
  expect(sqrt(-1)).toBeUndefined();
  expect(sqrt(0)).toBe(0);
  expect(sqrt(1)).toBe(1);
  expect(sqrt(4)).toBe(2);
  expect(sqrt(9)).toBe(3);
  expect(sqrt(100)).toBe(10);
});
