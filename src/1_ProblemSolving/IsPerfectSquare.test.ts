import { isPerfectSquare } from "./IsPerfectSquare";

test("isPerfectSquare function", () => {
  expect(isPerfectSquare(-1)).toBeFalsy();
  expect(isPerfectSquare(0)).toBeTruthy();
  expect(isPerfectSquare(1)).toBeTruthy();
  expect(isPerfectSquare(4)).toBeTruthy();
  expect(isPerfectSquare(9)).toBeTruthy();
  expect(isPerfectSquare(10)).toBeFalsy();
});
