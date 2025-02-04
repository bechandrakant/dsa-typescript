import { isPowerOfTwo } from "./IsPowerOfTwo";

test("isPowerOfTwo", () => {
  expect(isPowerOfTwo(3)).toBeFalsy();
  expect(isPowerOfTwo(4)).toBeTruthy();
});
